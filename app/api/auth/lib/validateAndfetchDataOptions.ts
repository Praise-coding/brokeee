"use server"
import { mysqlConnection } from "@/app/api/connectionOptions";

import { AllUserInfo, UserAccountInfo, UserInfo, UserNotification } from "@/app/Types";
import bcrypt from "bcryptjs";

export const fetchDataForUser = async (credentials: unknown) => {
    try {
        const userInput = credentials as { Email: string, Password: string };
        const connection = mysqlConnection;
        const [hashedPassword] = await connection.execute(`select userPassword
                                                           from UserAccountInfo
                                                                    join User
                                                           where email = ?`, [userInput.Email]);
        const [hashedPasswordArrayGone] = hashedPassword as Array<UserInfo>;
        if (!hashedPasswordArrayGone) {
            return { ErrorMessage: "Email not found" } as AllUserInfo;
        }
        if (!(await bcrypt.compare(userInput.Password, hashedPasswordArrayGone.userPassword))) {
            return { ErrorMessage: "Incorrect Pin" } as AllUserInfo;
        }

        const [QueryResult]: [unknown, unknown] = await connection.execute("select User.* from User join railway.UserAccountInfo u on User.userid = u.userid where email = ?", [userInput.Email]);
        const [QueryResult2]: [unknown, unknown] = await connection.execute("select UserAccountInfo.* from UserAccountInfo join railway.User u on UserAccountInfo.userid = u.userid where email = ?", [userInput.Email]);
        const [userData] = QueryResult as Array<UserInfo>;
        const [userData2] = QueryResult2 as Array<UserAccountInfo>;
        const [userNotification]: [unknown, unknown] = (await mysqlConnection.execute(`select u.*
                                                                                       from UserNotification un
                                                                                                join User u on un.userId = u.userid
                                                                                       where un.userid = ?`, [userData?.userid]));

        const [QueryResult5] = userNotification as Array<UserNotification>;

        const allUserInfo: AllUserInfo = {
            UserInfo: userData,
            UserBalance: userData2,
            UserNotification: QueryResult5
        };

        return allUserInfo;
    } catch (err) {
        throw err;
    }
};
