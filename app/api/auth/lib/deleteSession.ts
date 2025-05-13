"use server"

import {mysqlConnection} from "@/app/api/connectionOptions";

export async function DeleteSession(sessionId: string) {
    try {
        await mysqlConnection.execute("delete from Session where sessionId = $1", [sessionId])
        return true
    } catch (err) {
        throw err
    }


}