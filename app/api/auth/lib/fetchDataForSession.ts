"use server"
import { mysqlConnection } from "@/app/api/connectionOptions";
import { AllUserInfo, SessionInfo, Transaction, UserAccountInfo, UserInfo, UserNotification } from "@/app/Types";

export const fetchDataForSession = async (sessionId: string) => {
    try {
        const connection = mysqlConnection;
        const [request]: [unknown, unknown] = await connection.execute(`select sessionId
                                                                        from Session
                                                                        where sessionId = ?`, [sessionId]);
        const response = request as Array<SessionInfo>;

        if (response.length == 0) {
            return false;
        }

        const [session]: [unknown, unknown] = await connection.execute(`select Session.*
                                                                        from Session
                                                                        where sessionId = ?`, [sessionId]);

        const [user]: [unknown, unknown] = await connection.execute(`select u.*
                                                                     from User u
                                                                              join Session on Session.userId = u.userid
                                                                     where sessionId = ?`, [sessionId]);

        const [UserAccountInfo]: [unknown, unknown] = await connection.execute(`select u.*
                                                                                 from UserAccountInfo u
                                                                                          join Session on Session.userId = u.userid
                                                                                 where sessionId = ?`, [sessionId]);

        const [transactions]: [unknown, unknown] = await connection.execute(`select u.*
                                                                              from Transactions u
                                                                                       right join Session on Session.userId = u.userid
                                                                              where sessionId = ?`, [sessionId]);

        const [userNotification]: [unknown, unknown] = await connection.execute(`select u.*
                                                                                  from UserNotification u
                                                                                           join Session on Session.userId = u.userid
                                                                                  where sessionId = ?`, [sessionId]);

        const [QueryResult] = session as Array<SessionInfo>;
        const [QueryResult2] = user as Array<UserInfo>;
        const [QueryResult3] = UserAccountInfo as Array<UserAccountInfo>;
        const QueryResult4 = transactions as Array<Transaction>;
        const [QueryResult5] = userNotification as Array<UserNotification>;

        const allUserInfo: AllUserInfo = {
            UserInfo: QueryResult2,
            UserBalance: QueryResult3,
            UserTransactions: QueryResult4[0].userid ? QueryResult4.toReversed() : undefined,
            UserNotification: QueryResult5,
            SessionInfo: QueryResult,
        };

        return allUserInfo;
    } catch (err) {
        const error = err as Error;
        console.error(error?.message);
    }
};
