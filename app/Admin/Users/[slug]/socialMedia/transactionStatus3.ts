"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";

export async function transactionStatus(transactionId: number, status: string) {
    try {
        await mysqlConnection.execute("update UserSocialMedia set Status = ? where id = ?", [status, transactionId])
        return {message: "successful", ok: true}
    } catch {
        return {message: "an error occurred", ok: false}
    }
}