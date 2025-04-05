"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";

export async function deleteAddress(id: number) {
    try {
        await mysqlConnection.execute("delete from DepositAddresses where id = ?", [id])
        return {ok: true}
    } catch {
        return {ok: false}
    }
}