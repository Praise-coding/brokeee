"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";

export async function fetchSocialMedia() {
    try {
        return await mysqlConnection.execute("select * from SocialMedia")
    } catch {
        return {ok: false}
    }
}