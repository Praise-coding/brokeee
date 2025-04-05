"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";

export async function transactionStatus(transactionId: number, status: string) {
    try {
        await mysqlConnection.execute("update Transactions set TransactionStatus = ? where TransactionId = ?", [status, transactionId])
        return {message: "successful", ok: true}
    } catch {
        return {message: "an error occurred", ok: false}
    }
}