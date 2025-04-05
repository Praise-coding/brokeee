"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";

export async function deleteSubscription(id: number){
    try{
        await mysqlConnection.execute("delete from Subscriptions where id = ?", [id])
        return {ok: true}
    }
    catch {
        return {ok: false}
    }
}