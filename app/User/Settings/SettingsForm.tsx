"use client"
import React, {ChangeEvent, useState} from 'react'
import InputTemp from "@/app/components/ui/InputTemp";
import {FieldValues, useForm} from "react-hook-form";
import SelectTemp from "@/app/components/ui/SelectInputTemp";
import {COUNTRIES} from "@/app/(auth)/SignUp/countriesArray";
import Loading from "@/app/(auth)/loading";
import {User} from "@/app/Types";
import Image from "next/image";
import {changePersonalInfo} from "@/app/User/Settings/ServerActions/changePersonalInfo";
import {Toaster} from "@/app/(auth)/formUi/Toast";
import {useSession} from "next-auth/react";
import {changePassword} from "@/app/User/Settings/ServerActions/changePassword";

function SettingsForm({userData}: { userData: User }) {
    const data = userData?.user?.UserInfo
    const [loading, setLoading] = useState(false)
    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useForm<FieldValues>({
        defaultValues: {
            "First Name": data?.FirstName || "",
            "Last Name": data?.LastName || "",
            "Email": data?.Email || "",
            "Phone number": data?.PhoneNumber || "",
            "Country": data?.Country || "",
        }
    });

    const {
        handleSubmit: handleSubmitHandler,
        register: registerUser,
        getValues, setError,
        formState: {errors: errorsHandler},
    } = useForm();
    const [newPf, setNewPf] = useState("/empty")
    const [rawImage, setRawImage] = useState<File | undefined>()
    const {update} = useSession()

    function imageTaker(e: ChangeEvent<HTMLInputElement>) {
        const file = e?.target?.files
        if (file && file.length > 0) {
            setNewPf(URL.createObjectURL(file[0]))
            setRawImage(file[0])
        } else {
            setNewPf("/empty")
            setRawImage(undefined)
        }
    }

    async function changePersonalInfoFunction() {
        try {
            const response = await changePersonalInfo(rawImage, handleSubmit, data?.ProfilePicture, setLoading)

            if (response) {
                Toaster("success", "Updated successfully")
            }
        } catch (e: unknown) {
            const error = e as Error
            Toaster("error", error.message)
        } finally {
            await update()
            setLoading(false)
        }
    }

    async function changePasswordFunction() {

        try {
            const response = await changePassword(handleSubmitHandler, setLoading, getValues, setError,)

            if (response) {
                Toaster("success", "Updated successfully")
            }
        } catch (e: unknown) {
            const error = e as Error
            Toaster("error", error.message)
        } finally {
            await update()
            setLoading(false)
        }
    }


    return (
        <>
            {loading ? <Loading/> : ""}
            <form
                onSubmit={async (event) => {
                    event.preventDefault()
                    await changePersonalInfoFunction()
                }}
                className="bg-[#1B2028] sm:mt-[] mt-[15px]  rounded-[15px] px-[15px] sm:px-[24px] py-[30px] sm:py-[46px]">
                <div
                    className="grid sm:gap-[30px]">
                    <div className={"grid gap-x-[26px] grid-cols-1 sm:grid-cols-2 sm:gap-y-[30px] gap-y-[20px]"}>
                        {["First Name", "Last Name", "Email", "Phone number"].map((data, key) => {
                            return (
                                <div key={key} className={"block  w-full"}>
                                    <div className={"opacity-80 sm:block  " +
                                        "text-[14px] text-[#ffffff] sm:text-base font-poppins " +
                                        "font-light leading-[24px] "}>
                                        {data}
                                    </div>
                                    <div className={"mt-[8px] sm:mt-[12px]"}>
                                        <InputTemp
                                            type={data == "Phone number" ? "number" : data == "Email" ? "email" : undefined}
                                            inputName={data}
                                            errors={errors} inputChange={register}
                                            placeholder={data}/>
                                    </div>
                                </div>
                            )
                        })

                        }
                        <div className={"block"}>
                            <div className={"opacity-80 sm:block  " +
                                "text-[14px] text-[#ffffff] sm:text-base font-poppins " +
                                "font-light leading-[24px] "}>
                                Country
                            </div>
                            <div className={"mt-[8px] sm:mt-[12px]"}>

                                <SelectTemp defaultValue={data?.Country} selectionType={"country"}
                                            inputName={"Country"}
                                            inputChange={register}
                                            options={COUNTRIES}/>

                            </div>
                        </div>
                        <div className={"block"}>
                            <div className={"opacity-80 sm:block  " +
                                "text-[14px] text-[#ffffff] sm:text-base font-poppins " +
                                "font-light leading-[24px] "}>
                                Profile Picture
                            </div>
                            <div className={"mt-[8px] sm:mt-[12px]"}>

                                <label htmlFor={"fileTaker"}
                                       className="w-full cursor-pointer text-[#ABAFB1] flex items-center bg-[rgba(0,0,0,0.1)] font-poppins h-[50px] sm:h-[52px] rounded-[8px] px-[16px]  border-[rgba(255,255,255,0.7)] border text-[14px] sm:text-[16px] md:border-[1.3px] "
                                >
                                    <input type={"file"} accept=".jpg, .jpeg, .png" onChange={(e) => imageTaker(e)}
                                           id={"fileTaker"}
                                           className={"hidden"}/>
                                    <div className={"w-[35px] h-[35px] rounded-full bg-[grey]"}>
                                        {
                                            function () {
                                                const image = newPf != "/empty" ? newPf : (data.ProfilePicture ? data.ProfilePicture : undefined)
                                                return (
                                                    image ? <Image width={50} height={50}
                                                                   src={image}
                                                                   alt=""
                                                                   className={"rounded-full w-[35px] h-[35px]"}/> : ""
                                                )
                                            }()
                                        }
                                    </div>
                                    <div className={"ml-[10px]"}>
                                        Change Profile Picture
                                    </div>
                                </label>

                            </div>
                        </div>

                    </div>
                </div>
                <button
                    className={"bg-[#4182F9] cursor-pointer block -[14px]  items-center justify-center rounded-[8px] w-full   mt-[28px] h-[44px] "}>
                            <span className={"font-poppins text-white leading-[24px]"}>
                                    Save
                            </span>
                </button>
            </form>
            <form
                onSubmit={async (event) => {
                    event.preventDefault()
                    await changePasswordFunction()
                }}
                className="bg-[#1B2028] sm:mt-[] mt-[15px]  rounded-[15px] px-[15px] sm:px-[24px] py-[30px] sm:py-[46px]">
                <div className={" font-[600]  text-[30px] text-[#E4E4E4] font-poppins"}>
                    Change Password
                </div>
                <div
                    className="grid  sm:gap-[30px]">
                    <div
                        className={"grid grid-cols-1 mt-[30px] sm:grid-cols-2 gap-x-[26px] sm:gap-y-[30px] gap-y-[20px]"}>
                        {["Old Password", "New Password", "Confirm Password"].map((data, key) => {
                            return (
                                <label key={key} className={`block ${data == "Confirm Password" ? "col-span-2" : ""}`}>
                                    <div className={`opacity-80  sm:block  ` +
                                        "text-[14px] text-[#ffffff] sm:text-base font-poppins " +
                                        "font-light leading-[24px] "}>
                                        {data}
                                    </div>
                                    <div className={"mt-[8px] sm:mt-[12px]"}>
                                        <InputTemp minLength={8} type={"password"} inputName={data}
                                                   errors={errorsHandler}
                                                   inputChange={registerUser}
                                                   placeholder={data}/>
                                    </div>
                                </label>
                            )
                        })

                        }
                    </div>
                </div>
                <button
                    className={"bg-[#4182F9] block cursor-pointer  -[14px]  items-center justify-center rounded-[8px] w-full sm:mt-[20px] mt-[28px] h-[50px] "}>
                            <span className={"font-poppins text-white leading-[24px]"}>
                                    Save
                            </span>
                </button>
            </form>

        </>
    )
}

export default SettingsForm
