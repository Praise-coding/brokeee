"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";
import {UserAccountInfo} from "@/app/Types";

export async function updateBalance(data: unknown, userid: number) {
    const userData = data as UserAccountInfo
    try {
        await mysqlConnection.execute("update UserAccountInfo set Deposited = ?, Profit = ?, Balance = ? where userid = ?", [userData?.Deposited, userData?.Profit, userData?.Balance, userid])
        return {message: "lesgooo", ok: true}
    } catch {
        return {message: "an error occurred", ok: false}
    }
}