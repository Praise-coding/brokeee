"use server"

import {mysqlConnection} from "@/app/api/connectionOptions";

export async function UserDelete(id: number): Promise<Record<string, boolean>> {
    try {
        await mysqlConnection.execute("delete from User where userid = ?", [id])
        return {ok: true}
    } catch {
        return {ok: false}
    }
}