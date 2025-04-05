import {NextResponse} from "next/server";

export async function POST() {
    return NextResponse.json({message: "hell yeah"}, {status: 200})
}