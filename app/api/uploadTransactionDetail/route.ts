import {mysqlConnection} from "@/app/api/connectionOptions";
import {auth} from "@/app/api/auth/lib/authOption";
import {AllUserInfo} from "@/app/Types";
import {SendEmail} from "@/app/api/EmailSenderModule/SendEmail";

export async function POST(request: Request) {
    const connection = mysqlConnection
    const sessionix = (await auth())?.user as unknown
    const session = sessionix as AllUserInfo
    const userValues = await request.json()


    if (userValues.type == "Deposit") {
        await connection.execute("insert into Transactions(userid, amount, transactionType, TransactionDate, TransactionReceipt, TransactionMethod) values (?,?,?,?,?,?)", [
            session?.UserInfo.userid, userValues.Amount, userValues.type, userValues.date, userValues.image, userValues.DepositMethod
        ])
    } else {

        const id = Math.floor(Math.random() * (99999999 - 11111111 + 1)) + 1111111111;


        if (userValues.withdrawalMethod != "Bank Transfer") {
            await connection.execute("insert into Transactions(userid, amount, transactionType, TransactionDate, TransactionMethod, TransactionWalletAddress) values (?,?,?,?,?,?)", [
                session?.UserInfo.userid, userValues.Amount, userValues.type, userValues.date, userValues.withdrawalMethod, userValues.walletAddress
            ])
        } else {
            await connection.execute("insert into banktransfer(BankTransferId, FullName, Address, BankName, AccountNumber, IBANSWIFTCode) values (?,?,?,?,?,?)", [
                id, userValues.FullName, userValues.Address, userValues.BankName, userValues.AccountNumber, userValues.IBANSWIFTCode
            ])

            await connection.execute("insert into Transactions(userid, amount, transactionType, TransactionDate, TransactionMethod, BankTransferId) values (?,?,?,?,?,?)", [
                session?.UserInfo.userid, userValues.Amount, userValues.type, userValues.date, userValues.withdrawalMethod, id
            ])

        }
    }
    await SendEmail(`Someone just made a transaction. \n
Email: ${session?.UserInfo?.Email}`, "okormorupraisecode@gmail.com", "New Transaction")
    return new Response(JSON.stringify({message: "successful"}), {status: 200})
}