import {DefaultSession, DefaultUser} from "next-auth";
import {AllUserInfo} from "@/app/Types";

declare module "next-auth" {
    interface User extends DefaultUser, AllUserInfo {
        id: string;
        role?: string; // Example: Add a user role
        accessToken?: string; // Example: Add an access token
    }

    interface Session extends DefaultSession {
        user: User; // Ensures the session user includes the extended User type
    }
}
