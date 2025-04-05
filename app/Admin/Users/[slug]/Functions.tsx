import {Toaster} from "@/app/(auth)/formUi/Toast";
import {FieldValues, UseFormHandleSubmit, UseFormSetError} from "react-hook-form";
import React from "react";
import {uploadImage} from "@/app/User/Deposit/imageUploader";
import {updatePersonalInfo} from "@/app/Admin/Users/[slug]/updatePersonalInfo";
import {updateBalance} from "@/app/Admin/Users/[slug]/updateBalanceInfo";
import {changePassword} from "@/app/Admin/Users/[slug]/changePassword";
import {EditNotification} from "@/app/Admin/Users/[slug]/editNotification";


export async function changePersonalInfoFunction(setLoading: (value: React.SetStateAction<boolean>) => void, rawImage: File | undefined, handleSubmit: UseFormHandleSubmit<FieldValues, undefined>, ProfilePicture: string | undefined, userid: number) {
    try {
        await handleSubmit(async (data) => {
            setLoading(true);
            const imageUploader = rawImage ? await uploadImage(rawImage) : null;
            const response = await updatePersonalInfo(data, imageUploader || ProfilePicture || null, userid)


            if (!response.ok) {
                Toaster("error", "An error occurred")
                throw new Error(response.message || "Failed to update profile.");
            }
            Toaster("success", "Updated successfully")
        })()


    } catch {
        Toaster("error", "An error occurred")
    } finally {
        setLoading(false)
    }
}


export async function changePasswordFunction(setLoading: (value: React.SetStateAction<boolean>) => void, handleSubmitHandler: UseFormHandleSubmit<FieldValues, undefined>, setError: UseFormSetError<FieldValues>, userid: number) {
    try {

        await handleSubmitHandler(async (data) => {
                if (data["Confirm Password"] != data["New Password"]) {
                    setError("Confirm Password", {
                        type: "required",
                        message: "Passwords do not match"
                    })
                    return;
                }
                setLoading(true);
                const request = await changePassword(data["New Password"], userid)

                if (!request.ok) {
                    throw new Error(request?.message)
                }

                Toaster("success", "Updated successfully")

            }
        )()


    } catch {
        Toaster("error", "An error occured")
    } finally {
        setLoading(false)
    }
}

export async function updateBalanceInfoFunction(setLoading: (value: React.SetStateAction<boolean>) => void, balanceHandler: UseFormHandleSubmit<FieldValues>, userid: number) {
    try {
        await balanceHandler(async (data) => {
            setLoading(true);

            try {
                const response = await updateBalance(data, userid)

                if (!response.ok) {
                    Toaster("error", "An error occurred")
                    return;
                }
                Toaster("success", "Updated successfully")
            } catch {
                console.error("Error in fetch:");
            } finally {
                setLoading(false);
            }
        })()
    } catch {
        Toaster("error", "An error occurred")
    } finally {
        setLoading(false)
    }
}


export async function editNotificationInfoFunction(setLoading: (value: React.SetStateAction<boolean>) => void, notificationHandler: UseFormHandleSubmit<FieldValues>, userid: number, activateNoti: boolean) {

    try {
        await notificationHandler(async (data) => {
            setLoading(true);
            try {
                const response = await EditNotification(data, userid, activateNoti
                )

                if (!response.ok) {
                    throw new Error(response?.message || "Failed to update profile.");
                }

            } catch {
                console.error("Error in fetch");
            } finally {
                setLoading(false);
            }
        })()
        Toaster("success", "Updated successfully")

    } catch {
        Toaster("error", "An error occurred")
    } finally {
        setLoading(false)
    }
}