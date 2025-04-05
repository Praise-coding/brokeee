import {uploadImage} from "@/app/User/Deposit/imageUploader";
import {FieldValues, UseFormHandleSubmit} from "react-hook-form";
import React from "react";

export async function changePersonalInfo(
    rawImage: File | undefined,
    handleSubmit: UseFormHandleSubmit<FieldValues>,
    previousPfp: string | undefined,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
): Promise<boolean> {
    let success = false
    try {
        await handleSubmit(async (data) => {
            setLoading(true);
            const imageUploader = rawImage ? await uploadImage(rawImage) : null;

            const response = await fetch("/api/updateUserInfo", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    ...data,
                    image: imageUploader || previousPfp || null,
                    type: "personalInfo",
                }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to update profile.");
            }
            success = true
        })()

        return success

    } catch (outerError) {
        throw outerError
    }
}