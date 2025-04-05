"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";

export async function fetchAddresses() {
    try {
        return await mysqlConnection.execute("select * from DepositAddresses")
    } catch {
        return {ok: false}
    }
}