"use server"
import {auth} from "@/app/api/auth/lib/authOption";

export async function sessionData() {
    return await auth();
}
