"use server"

import {SignupFormInput} from "@/app/Types";
import {auth, signIn} from "@/app/api/auth/lib/authOption";

type server_message = {
    server_message: string
}

interface AuthError extends Error {
    cause: server_message
}

export const SignIn = async (data: SignupFormInput) => {
    try {
        (await signIn("credentials", {
            ...data,
            redirect: false, // ✅ Prevent auto redirect to handle error manually
        }));

        return {user: (await auth())
    }

    } catch (err: unknown) {
        const error = err as AuthError;
        return {error: error.cause.server_message || "An error occurred"}
    }
}


