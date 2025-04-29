import NextAuth, {AuthError} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {fetchDataForUser} from "@/app/api/auth/lib/validateAndfetchDataOptions";
import {mysqlConnection} from "@/app/api/connectionOptions";
import {cookies} from "next/headers";
import {fetchDataForSession} from "@/app/api/auth/lib/fetchDataForSession";
import {DeleteSession} from "@/app/api/auth/lib/deleteSession";

export const {auth, handlers, signIn, signOut} = NextAuth({
        session: {
            strategy: "jwt",
        },
        providers: [
            Credentials({
                authorize: async (credentials) => {
                    if (!credentials?.Email || !credentials?.Password) {
                        return null
                    }

                    return await fetchDataForUser({
                        Email: credentials.Email.toString(),
                        Password: credentials.Password.toString(),
                    });
                }
            }),
        ],
        callbacks: {
            signIn: async (credentials) => {
                const user = credentials.user.UserInfo
                if (user) {
                    if (user?.isBlocked == 1) {
                        throw new AuthError("Error", {cause: {server_message: "Your account has been banned. Please contact the admin"}}); // ✅ Send the error to frontend
                    }
                    const userId = user.userid;
                    const insertSession = mysqlConnection

                    const randomSessionId = crypto.randomUUID()
                    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
                    await insertSession.execute(`insert into Session(sessionId, userId, expiryDate)
                                                 values (?, ?, ?)`, [randomSessionId, userId, expiresAt])

                    const cookie = await cookies()
                    cookie.set('expiresAt', expiresAt.toString())
                    cookie.set('sessionId', randomSessionId)
                    return true;
                }
                if (credentials?.user?.ErrorMessage) {
                    throw new AuthError("Error", {cause: {server_message: credentials?.user?.ErrorMessage}}); // ✅ Send the error to frontend
                }
                return false
            }
            ,
            async jwt({token, user}) {
                if (user) {
                    const cookie = await cookies()
                    const expireAt = cookie.get('expiresAt')?.value
                    const sessionId = cookie.get('sessionId')?.value
                    if (user && token) {
                        token.expiresAt = expireAt
                        token.sessionId = sessionId
                    }
                    cookie.delete('expiresAt')
                    cookie.delete('sessionId')
                }
                return token;
            }
            ,

            async session({session, token}) {
                const user = await fetchDataForSession(token.sessionId as string);
                if (!user) {
                    await signOut()
                    throw new AuthError("Invalid Session");
                }

                if (session) {
                    session.user = {...session.user, ...user}; // Ensure session has token data
                    return session;
                }
                return session;
            }
        },
        events: {
            // @ts-expect-error I don't know why it isn't recognizing token
            async signOut({token}) {
                await DeleteSession(token.sessionId);
            }
        },
        pages: {
            signIn: "/Login"
        }

    }
)