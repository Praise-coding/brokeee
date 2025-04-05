"use server"

import {mysqlConnection} from "@/app/api/connectionOptions";
import {AllUserInfo} from "@/app/Types";

export async function GetAllUsers() {
    try {
        const [getAllUsers] = await mysqlConnection.execute("select * from User")
        const allUsers = getAllUsers as AllUserInfo[]

        return Response.json({data: allUsers}, {status: 200})
    } catch {
        return Response.json({message: "An error occurred"}, {status: 500})
    }
}