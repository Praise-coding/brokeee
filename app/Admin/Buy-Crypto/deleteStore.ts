"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";

export async function deleteStore(id: number) {
    try {
        await mysqlConnection.execute("delete from CryptoStores where id = ?", [id])
        return {ok: true}
    } catch {
        return {ok: false}
    }
}