import {NextResponse} from "next/server";
import {mysqlConnection} from "@/app/api/connectionOptions";
import {AllUserInfo, Transaction, UserAccountInfo, UserInfo, UserNotification} from "@/app/Types";

export async function POST(request: Request) {
    const userRequest = (await request.json())?.userid
    try {
        const [userInfo]: [unknown, unknown] = await mysqlConnection.execute("Select * from User where userid = ?", [userRequest])
        const [UserAccountInfo]: [unknown, unknown] = await mysqlConnection.execute("Select * from UserAccountInfo where userid = ?", [userRequest])
        const [userTransactions]: [unknown, unknown] = await mysqlConnection.execute("Select t.* from Transactions t join User u on t.userid = u.userid  where t.userid = ?", [userRequest])

        const [QueryResult2] = userInfo as Array<UserInfo>
        const [QueryResult3] = UserAccountInfo as Array<UserAccountInfo>
        const QueryResult4 = userTransactions as Array<Transaction>
        const [userNotification]: [unknown, unknown] = (await mysqlConnection.execute(`select u.*
                                                                                       from UserNotification un
                                                                                                join User u on un.userId = u.userid
                                                                                       where un.userid = ?`, [userRequest]))

        const [QueryResult5] = userNotification as Array<UserNotification>

        const allUserInfo: AllUserInfo = {
            UserInfo: QueryResult2,
            UserBalance: QueryResult3,
            UserTransactions: QueryResult4[0]?.userid ? QueryResult4.toReversed() : undefined,
            UserNotification: QueryResult5
        }
        return NextResponse.json({...allUserInfo}, {status: 200});
    } catch {
        return NextResponse.json({message: "An error occured"}, {status: 400});
    }
}
