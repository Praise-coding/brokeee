import {FieldValues, SubmitErrorHandler, SubmitHandler, UseFormGetValues} from "react-hook-form";
import {Toaster} from "@/app/(auth)/formUi/Toast";
import React, {BaseSyntheticEvent} from "react";
import {uploadImage} from "@/app/User/Deposit/imageUploader";

export const submitForm = async (
    getValues: UseFormGetValues<FieldValues>,
    image: string,
    handleSubmit: (onValid: SubmitHandler<FieldValues>, onInvalid?: SubmitErrorHandler<FieldValues>) => (e?: BaseSyntheticEvent) => Promise<void>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    file: File | undefined,
) => {
    const amountInput = getValues("Amount")
    const imageUrl = image != "/empty"
    if (amountInput <= 0) {
        Toaster("info", "Amount must be greater than 0");

    } else if (!imageUrl || !file) {
        Toaster("info", "Please upload an image receipt")
    } else {
        try {
            setLoading(true)
            await handleSubmit(async (data) => {
                const fileToSupaBase = await uploadImage(file)
                if (!fileToSupaBase) throw new Error("An error occurred")
                const wholeData = {
                    ...data,
                    image: fileToSupaBase,
                    date: new Date().toISOString().slice(0, 19).replace("T", " "),
                    type: "Deposit",
                }
                await fetch("/api/uploadTransactionDetail", {
                    headers: {
                        "content-type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(wholeData)

                })

                Toaster("info", "Request has been submitted")

            })()
        } catch (err) {
            Toaster("error", "An error occurred")
            return err
        } finally {
            setLoading(false)
        }
    }


}
