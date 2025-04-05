"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";

type data = {
    AllowWithdrawal: boolean,
    AllowDeposit: boolean,
    isBanned: boolean,
    ActivateWithdrawalNotice: boolean
}

export async function setToggleOptions(data: data, userid: number) {
    try {
        await mysqlConnection.execute("update User set isBlocked = ? where userid = ?", [data["isBanned"] ? 1 : 0, userid])
        await mysqlConnection.execute("update UserAccountInfo set AllowDeposit = ? where userid = ?", [data["AllowDeposit"] ? 1 : 0, userid])
        await mysqlConnection.execute("update UserAccountInfo set AllowWithdrawal = ? where userid = ?", [data["AllowWithdrawal"] ? 1 : 0, userid])
        await mysqlConnection.execute("update UserAccountInfo set WithdrawalNotice = ? where userid = ?", [data["ActivateWithdrawalNotice"] ? 1 : 0, userid])

        return {message: "Successful", ok: true}
    } catch {
        return {message: "An error occurred", ok: false}
    }
}