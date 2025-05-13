"use client"
import InputAndInputName from "@/app/(auth)/formUi/inputAndInputName";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {SignupFormInput} from "@/app/Types";
import {useRouter} from "next/navigation";
import {useState} from "react";
import Loading from "@/app/(auth)/loading";
import {Toaster} from "@/app/(auth)/formUi/Toast";


export default function Page() {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const {register, setError, handleSubmit, getValues, formState: {errors}} = useForm<SignupFormInput>({
        defaultValues: {
            "First Name": "",
            "Last Name": "",
            "Phone Number": "",
            "Email": "",
            "Country": "Afghanistan",
            "Password": "",
        }
    })

    const submitForm = handleSubmit(async (data: SignupFormInput) => {
            if (getValues("Confirm Password") != getValues("Password")) {
                setError("Confirm Password", {
                    type: "required",
                    message: "Passwords are not the same.",
                }, {shouldFocus: true})
            } else {
                setLoading(true);
                try {
                    const request = await fetch("api/SignUp", {
                        method: "POST",
                        headers: {"content-type": "application/json", "x-cron-secret": String(process.env.CRON_SECRET)},
                        body: JSON.stringify({
                            ...data,
                            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
                        })
                    })
                    if (!request.ok) {
                        throw new Error(await request.text());
                    }
                    Toaster("success", "Account created successfully. You will be redirected to the login page")
                    router.push("/Login")
                } catch (err: unknown) {
                    const error = err instanceof Error ? err.message : "An unknown error occurred";
                    Toaster("error", error)
                }
                setLoading(false)
            }
        }
    )

    return (
        <>
            {loading && <Loading/>}
            <div className={"flex py-[30px] sm:py-[50px]  px-[20px] items-center justify-center h-full "}>

                <div className={"bg-white py-[36px] px-[20px] sm:px-[44px] w-[539px] rounded-[10px]"}
                     style={{boxShadow: "0px 4px 35px rgba(0, 0, 0, 0.08)"}}>
                    <div className={"font-medium text-black text-[40px] leading-[60px] font-poppins"}>
                        Sign Up
                    </div>
                    <div className={"mt-[31px]"}>
                        <form onSubmit={async (e) => {
                            e.preventDefault();
                            await submitForm()
                        }}
                              className={"grid grid-cols-1 gap-[35px]"}>
                            <div className={"flex gap-[19px]"}>
                                <InputAndInputName errors={errors} inputChange={register}
                                                   formInfo={"First Name"}
                                                   placeholder={"Enter First Name"}/>
                                <InputAndInputName errors={errors} inputChange={register}
                                                   formInfo={"Last Name"}
                                                   placeholder={"Enter Last Name"}/>
                            </div>

                            <InputAndInputName type={"number"} errors={errors} inputChange={register}
                                               formInfo={"Phone Number"}
                                               placeholder={"Enter your Phone Number"}/>

                            <div className={"flex gap-[18px] sm:gap-[19px]"}>
                                <InputAndInputName errors={errors}
                                                   inputChange={register}
                                                   type={"email"} formInfo={"Email"}
                                                   placeholder={"Enter your Email"}/>
                                <InputAndInputName errors={errors} inputChange={register}
                                                   formInfo={"Country"} select/>
                            </div>

                            <div className={"grid grid-cols-2 gap-[18px]"}>

                                <InputAndInputName minLength={8} errors={errors} inputChange={register}
                                                   type={"password"} formInfo={"Password"}
                                                   placeholder={"Enter a password"}/>

                                <InputAndInputName minLength={8} errors={errors} inputChange={register}
                                                   type={"password"} formInfo={"Confirm Password"}
                                                   placeholder={"Confirm your password"}/>
                            </div>

                            <div>
                                <button type={"submit"}
                                        className={"bg-[#31353F] cursor-pointer w-full h-[54px] flex items-center justify-center rounded-[10px]"}>
                                <span className={"font-poppins font-medium leading-[24px] text-white"}>
                                 Sign Up now
                                </span>
                                </button>
                            </div>
                            <div className={"font-poppins text-[13px] leading-[20px] text-[#8D8D8D] text-center"}>
                                Have an Account ? <Link href={"/Login"} className={"text-[#31353F]"}>Sign in</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}