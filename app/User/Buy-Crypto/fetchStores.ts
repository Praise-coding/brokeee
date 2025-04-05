"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";

export async function fetchStores() {
    try {
        return await mysqlConnection.execute("select * from CryptoStores")
    } catch {
        return {ok: false}
    }
}