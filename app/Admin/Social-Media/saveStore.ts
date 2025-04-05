"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";
import {FieldValues} from "react-hook-form";

export async function saveSocialMedia(data: FieldValues, id: number) {
    try {
        await mysqlConnection.execute("update SocialMedia set mediaName = ?, mediaUrl = ? where id = ?", [data?.["mediaName"], data?.["mediaUrl"], id])

        return {ok: true}
    } catch {
        return {ok: false}
    }
}