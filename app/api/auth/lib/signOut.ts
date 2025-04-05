"use server"

import {signOut} from "@/app/api/auth/lib/authOption";

export const SignOut = async () => {
    await signOut()
}

