"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";
import {FieldValues} from "react-hook-form";

export async function updateSubscription(id: number, data: FieldValues) {
    try {
        await mysqlConnection.execute("update Subscriptions set planType = ?, price = ?, infoText = ? where id = ?", [data?.["Plan"], data?.["Price"], data?.["InfoText"], id])
        return {ok: true}
    } catch {
        return {ok: false}
    }
}