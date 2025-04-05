"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";

export async function fetchSubscriptions(){
    try {
        return await mysqlConnection.execute("select * from Subscriptions")
    } catch {
        return {ok: false}
    }
}