import {Toaster} from "@/app/(auth)/formUi/Toast"
import {FieldValues, SubmitErrorHandler, SubmitHandler} from "react-hook-form";
import {BaseSyntheticEvent, Dispatch, SetStateAction} from "react";
import {uploadSocialMediaInfo} from "@/app/User/Social-Media/uploadSocialMediaInfo";

export const submitForm = async (userName: string, userid : number,
                                 setLoading: Dispatch<SetStateAction<boolean>>, handleSubmit: (onValid: SubmitHandler<FieldValues>, onInvalid?: SubmitErrorHandler<FieldValues>) => (e?: BaseSyntheticEvent) => Promise<void>) => {

    try {
        setLoading(true)
        await handleSubmit(async (data) => {
            const response = await uploadSocialMediaInfo(data, userName, userid)
            if (!response) {
                Toaster("error", "An error occurred")
                return;
            }
            Toaster("info", "Request has been submitted")
        })()
    } catch (err) {
        Toaster("error", "An error occurred")
        return err
    } finally {
        setLoading(false)
    }


}
