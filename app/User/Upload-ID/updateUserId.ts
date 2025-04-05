"use server"

import {mysqlConnection} from "@/app/api/connectionOptions";

export async function updateUserId(image: string, id: number) {
    try {
        await mysqlConnection.execute("update User set IdentityCard = ? where userid = ?", [image, id])
        return {ok: true}
    } catch {
        return {ok: false}
    }
}