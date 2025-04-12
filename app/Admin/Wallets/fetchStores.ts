"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";

export async function fetchWalletAddresses() {
    try {
        return await mysqlConnection.execute("select * from WalletType")
    } catch {
        return {ok: false}
    }
}