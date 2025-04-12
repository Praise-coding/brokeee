import {NextResponse} from "next/server";
import {mysqlConnection} from "@/app/api/connectionOptions";

export async function GET() {
    await mysqlConnection.execute("update UserAccountInfo set Profit = ?", [0])
    return NextResponse.json({message: "Successful"}, {status: 200})
}