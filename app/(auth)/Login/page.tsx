"use client"
import InputAndInputName from "@/app/(auth)/formUi/inputAndInputName";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {SignupFormInput} from "@/app/Types";
import {SignIn} from "@/app/api/auth/lib/signIn";
import {Toaster} from "@/app/(auth)/formUi/Toast";
import {useRouter} from "next/navigation";
import Loading from "@/app/(auth)/loading";
import {useState} from "react";

export default function Page() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm<SignupFormInput>({
        defaultValues: {
            "Email": "",
            "Password": "",
        }
    })


    async function submitForm(data: SignupFormInput) {
        setLoading(true)
        const response = (await SignIn(data))
        if (response?.error) {
            Toaster("error", response?.error)
            setLoading(false)
        } else {
            router.push("User/Dashboard")
        }
    }

    return (
        <>
            {loading && <Loading/>}

            <div className={"flex py-[30px] sm:py-[50px] px-[20px] items-center justify-center h-full "}>
                <div className={"bg-white py-[36px] px-[20px] sm:px-[44px] w-[539px] rounded-[10px]"}
                     style={{boxShadow: "0px 4px 35px rgba(0, 0, 0, 0.08)"}}>
                    <div className={"font-medium text-black text-[40px] leading-[60px] font-poppins"}>
                        Login
                    </div>
                    <div className={"mt-[31px]"}>
                        <form onSubmit={handleSubmit((data) => submitForm(data))}
                              className={"grid grid-cols-1 gap-[35px]"}>

                            <InputAndInputName errors={errors} inputChange={register}
                                               type={"email"}
                                               formInfo={"Email"}
                                               placeholder={"Enter your Email"}/>


                            <InputAndInputName errors={errors} inputChange={register}
                                               type={"password"}
                                               formInfo={"Password"}
                                               placeholder={"Enter a password"}/>
                            <div>
                                <button
                                    className={"bg-[#31353F] cursor-pointer w-full h-[54px] flex items-center justify-center rounded-[10px]"}>
                                <span className={"font-poppins font-medium leading-[24px] text-white"}>
                                 Login
                                </span>

                                </button>
                            </div>
                            <div
                                className={"font-poppins text-[13px] leading-[20px] text-[#8D8D8D] text-center"}>
                                Don&#39;t have an Account ? <Link href={"/SignUp"} className={"text-[#31353F]"}>Sign
                                Up</Link>
                                <br/>
                                <Link href={"/ResetPassword"} className={"text-[#31353F] block mt-[20px]"}>Forgot
                                    Password
                                    ?</Link>

                            </div>

                        </form>
                    </div>
                </div>
            </div>


        </>

    )
}