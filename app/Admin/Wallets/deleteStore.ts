"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";

export async function deleteSocialMedia(id: number) {
    try {
        await mysqlConnection.execute("delete from WalletType where id = ?", [id])
        return {ok: true}
    } catch {
        return {ok: false}
    }
}