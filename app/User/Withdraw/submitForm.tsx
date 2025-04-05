import {Toaster} from "@/app/(auth)/formUi/Toast"
import {FieldValues, SubmitErrorHandler, SubmitHandler, UseFormGetValues} from "react-hook-form";
import {BaseSyntheticEvent, Dispatch, SetStateAction} from "react";

export const submitForm = async (balance: number, getValues: UseFormGetValues<FieldValues>,
                                 setLoading: Dispatch<SetStateAction<boolean>>, handleSubmit: (onValid: SubmitHandler<FieldValues>, onInvalid?: SubmitErrorHandler<FieldValues>) => (e?: BaseSyntheticEvent) => Promise<void>) => {

    try {
        setLoading(true)
        await handleSubmit(async (data) => {
            if (balance == 0 || balance < getValues("Amount")) {
                Toaster("error", "Insufficient Balance")
                return;
            }
            const wholeData = {
                ...data,
                date: new Date().toISOString().slice(0, 19).replace("T", " "),
                type: "Withdrawal",

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
