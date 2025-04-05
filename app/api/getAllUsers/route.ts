import {NextResponse} from "next/server";
import {mysqlConnection} from "@/app/api/connectionOptions";
import {AllUserInfo} from "@/app/Types";

export async function GET() {
    try {
        const [getAllUsers] = await mysqlConnection.execute("select * from User")
        const allUsers = getAllUsers as AllUserInfo[]

        return NextResponse.json({data: allUsers}, {status: 200})
    } catch {
        return NextResponse.json({error: "an error occured"}, {status: 500})
    }
}