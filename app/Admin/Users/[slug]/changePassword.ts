"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";
import {hashPassword} from "@/app/api/encrypter";

export async function changePassword(data: string, userid: number) {
    const newPassword = await hashPassword(data)
    try {
        await mysqlConnection.execute("update User set userpassword = ? where userid = ? ", [newPassword, userid])
        return {message: "Successful", ok: true}
    } catch (e) {
        const error = e as Error
        return {message: error.message, ok: false}
    }
}