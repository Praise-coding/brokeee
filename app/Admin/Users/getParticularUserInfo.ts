"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";
import {AllUserInfo, Transaction, UserAccountInfo, UserInfo, UserNotification} from "@/app/Types";

export async function getParticularUserInfo(userid: string): Promise<Response> {
    try {
        const [userInfo]: [unknown, unknown] = await mysqlConnection.execute("Select * from User where userid = ?", [userid])
        const [UserAccountInfo]: [unknown, unknown] = await mysqlConnection.execute("Select * from UserAccountInfo where userid = ?", [userid])
        const [userTransactions]: [unknown, unknown] = await mysqlConnection.execute("Select t.*, bt.* from Transactions t join User u on t.userid = u.userid left join BankTransfer bt on t.BankTransferId = bt.BankTransferId where t.userid = ?", [userid])
        const [userNotification]: [unknown, unknown] = (await mysqlConnection.execute(`select un.*
                                                                                       from UserNotification un
                                                                                                join User u on un.userid = u.userid
                                                                                       where un.userid = ?`, [userid]))

        const [QueryResult2] = userInfo as Array<UserInfo>
        const [QueryResult3] = UserAccountInfo as Array<UserAccountInfo>
        const QueryResult4 = userTransactions as Array<Transaction>
        const [QueryResult5] = userNotification as Array<UserNotification>

        const allUserInfo: AllUserInfo = {
            UserInfo: QueryResult2,
            UserBalance: QueryResult3,
            UserTransactions: QueryResult4[0]?.userid ? QueryResult4.toReversed() : undefined,
            UserNotification: QueryResult5,
        }
        return Response.json({...allUserInfo}, {status: 200});

    } catch {
        return Response.json({message: "An error occured"}, {status: 400});
    }
}
