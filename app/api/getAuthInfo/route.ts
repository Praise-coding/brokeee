import {auth} from "@/app/api/auth/lib/authOption";
import {NextResponse} from "next/server";

export async function GET() {
    const userData = await auth()
    if (!userData) {
        return NextResponse.json({message: "User not found", status: 400});
    }
    return NextResponse.json({...userData, status: 200});
}