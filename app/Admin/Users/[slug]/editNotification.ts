"use server"
import {mysqlConnection} from "@/app/api/connectionOptions";

type data = {
    'Pop Up Message': string,
    Notification: string
}

export async function EditNotification(data: unknown, userId: number, activateNoti: boolean) {
    const userData = data as data
    try {
        await mysqlConnection.execute("update UserNotification set popupmessage = ?, notification = ?, showNotifications = ?  where userid = ?", [userData['Pop Up Message'], userData['Notification'], activateNoti ? 1 : 0, userId]);
        return {message: "successful", ok: true}
    } catch {
        return {message: "An error occurred", ok: false}
    }
}