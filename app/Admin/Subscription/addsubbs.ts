"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";
import {FieldValues} from "react-hook-form";

export async function addsubbs(data: FieldValues) {
    try {
        await mysqlConnection.execute("insert into Subscriptions(planType, price, infoText) values (?, ?, ?)", [data?.["Plan"], data?.["Price"], data?.["InfoText"]])
        return {ok: true}
    } catch {
        return {ok: false}
    }
}