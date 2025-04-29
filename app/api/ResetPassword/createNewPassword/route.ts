import {NextResponse} from "next/server";
import {mysqlConnection} from "@/app/api/connectionOptions";
import {hashPassword} from "@/app/api/encrypter";

export async function POST(request: Request) {
    const userRequest = await request.json()
    const newPassword = await hashPassword(userRequest.password)

    try {
        await mysqlConnection.execute("update User set userPassword = ? where email = ? ", [
            newPassword,
            userRequest.email
        ])
        await mysqlConnection.execute("delete from ResetPassword where email = ?", [userRequest?.email])
        return NextResponse.json({message: "successful"}, {status: 200})
    } catch (e) {
        console.error(e)
        return NextResponse.json({message: "An"}, {status: 400})
    }
}