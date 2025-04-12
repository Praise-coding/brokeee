"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";
import {FieldValues} from "react-hook-form";

export async function addSocial(data: FieldValues) {
    try {
        await mysqlConnection.execute("insert into SocialMedia(mediaName, mediaUrl) values (?, ?)", [data?.["mediaName"], data?.["mediaUrl"]])
        return {ok: true}
    } catch {
        return {ok: false}
    }
}