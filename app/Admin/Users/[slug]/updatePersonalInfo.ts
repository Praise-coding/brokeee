"use server"

import {mysqlConnection} from "@/app/api/connectionOptions";

type data = {
    "First Name": string,
    "Last Name": string,
    "Email": string,
    "Phone number": string,
    "Country": string,
    "Role": string,
    "Account Status": string
}

export async function updatePersonalInfo(data: unknown, profilePic: string | null,
                                         userid: number
) {
    const userData = data as data

    try {
        await mysqlConnection.execute("update User set FirstName = ?, LastName = ?, PhoneNumber = ?, Country = ?, Email = ?, ProfilePicture = ?, Role = ?, AccountStatus = ? where userid = ? ", [userData["First Name"], userData["Last Name"], userData["Phone number"], userData["Country"], userData["Email"], profilePic, userData["Role"], userData["Account Status"], userid])
        return {message: "Successful", ok: true}
    } catch {
        return {message: "An error occurred", ok: false}
    }
}