import {Toaster} from "@/app/(auth)/formUi/Toast";
import React from "react";
import {FieldValues, UseFormHandleSubmit} from "react-hook-form";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export async function sendCode(setSubmitted: React.Dispatch<React.SetStateAction<boolean>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>, emailHandleSubmit: UseFormHandleSubmit<FieldValues, undefined>) {
    await (emailHandleSubmit(async (data) => {

            try {
                setLoading(true)
                const response = await fetch("/api/ResetPassword/sendVerificationUrl", {
                    method: "POST",
                    body: JSON.stringify({"createdAt": new Date().toISOString(), email: data?.email})
                })
                if (response.ok) {
                    setSubmitted(true)
                } else {
                    Toaster("error", JSON.parse(await response.text())?.message)
                }

            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        })
    )()
}

export async function updatePassword(setSubmitted: React.Dispatch<React.SetStateAction<boolean>>, router: AppRouterInstance, emailParam: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>, passwordHandleSubmit: UseFormHandleSubmit<FieldValues, undefined>,) {
    await (passwordHandleSubmit(async (data) => {

        try {
            setLoading(true)
            const response = await fetch("/api/ResetPassword/createNewPassword", {
                method: "POST",
                body: JSON.stringify({password: data?.password, email: emailParam})
            })
            if (response.ok) {
                setSubmitted(true)
                router.push("/Login")
            }
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }))()
}