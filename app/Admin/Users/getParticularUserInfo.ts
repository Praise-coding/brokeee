"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";
import {
    AllUserInfo,
    Transaction,
    UserAccountInfo,
    UserInfo,
    UserNotification,
    UserSocialMedias,
    Wallets
} from "@/app/Types";

export async function getParticularUserInfo(userid: string): Promise<Response> {
    try {
        const [userInfo]: [unknown, unknown] = await mysqlConnection.execute("Select * from User where userid = ?", [userid])
        const [UserAccountInfo]: [unknown, unknown] = await mysqlConnection.execute("Select * from UserAccountInfo where userid = ?", [userid])
        const [userTransactions]: [unknown, unknown] = await mysqlConnection.execute("Select t.*, bt.* from Transactions t join User u on t.userid = u.userid left join BankTransfer bt on t.BankTransferId = bt.BankTransferId where t.userid = ?", [userid])
        const [userNotification]: [unknown, unknown] = (await mysqlConnection.execute(`select un.*
                                                                                       from UserNotification un
                                                                                                join User u on un.userid = u.userid
                                                                                       where un.userid = ?`, [userid]))

        const [userSocialMedia]: [unknown, unknown] = (await mysqlConnection.execute(`select un.*
                                                                                      from UserSocialMedia un
                                                                                               join User u on un.userid = u.userid
                                                                                      where un.userid = ?`, [userid]))
        const [userWallets]: [unknown, unknown] = (await mysqlConnection.execute(`select un.*
                                                                                      from Wallets un
                                                                                               join User u on un.userid = u.userid
                                                                                      where un.userid = ?`, [userid]))
        const [QueryResult2] = userInfo as Array<UserInfo>
        const [QueryResult3] = UserAccountInfo as Array<UserAccountInfo>
        const QueryResult4 = userTransactions as Array<Transaction>
        const [QueryResult5] = userNotification as Array<UserNotification>
        const QueryResult6 = userSocialMedia as Array<UserSocialMedias>
        const QueryResult7 = userWallets as Array<Wallets>

        const allUserInfo: AllUserInfo = {
            UserInfo: QueryResult2,
            UserBalance: QueryResult3,
            UserTransactions: QueryResult4[0]?.userid ? QueryResult4.toReversed() : undefined,
            UserNotification: QueryResult5,
            UserSocialMedias:  QueryResult6[0]?.userid ? QueryResult6.toReversed() : undefined,
            Wallets:  QueryResult7[0]?.userid ? QueryResult7.toReversed() : undefined
        }
        return Response.json({...allUserInfo}, {status: 200});

    } catch {
        return Response.json({message: "An error occured"}, {status: 400});
    }
}
