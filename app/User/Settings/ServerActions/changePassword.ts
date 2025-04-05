import {FieldValues, UseFormGetValues, UseFormHandleSubmit, UseFormSetError} from "react-hook-form";
import React from "react";

export async function changePassword(
    handleSubmitHandler: UseFormHandleSubmit<FieldValues>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    getValues: UseFormGetValues<FieldValues>,
    setError: UseFormSetError<FieldValues>,
): Promise<boolean> {
    try {
        let success = false
        await handleSubmitHandler(async (data) => {
                if (getValues("Confirm Password") != getValues("New Password")) {
                    setError("Confirm Password", {
                        type: "required",
                        message: "Passwords do not match"
                    })
                    return;
                }
                setLoading(true);
                const request = await fetch("/api/updateUserInfo", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify({
                        ...data
                    }),
                })
                const response = await request.json()
                if (!request.ok) {
                    throw new Error(response.message)
                }
                success = true
            }
        )()
        return success
    } catch (e: unknown) {
        throw e
    }
}
