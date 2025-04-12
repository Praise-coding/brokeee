"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";
import {auth} from "@/app/api/auth/lib/authOption";

export async function fetchWalletsForUser() {
    const user = await auth()
    try {
        return await mysqlConnection.execute("select * from Wallets where userid = ?", [user?.["user"]?.["UserInfo"]?.["userid"]])
    } catch {
        return false
    }
}