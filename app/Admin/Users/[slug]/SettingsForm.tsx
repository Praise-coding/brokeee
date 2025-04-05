"use client"
import React, {ChangeEvent, useEffect, useState} from 'react'
import InputTemp from "@/app/components/ui/InputTemp";
import {FieldValues, useForm} from "react-hook-form";
import SelectTemp from "@/app/components/ui/SelectInputTemp";
import {COUNTRIES} from "@/app/(auth)/SignUp/countriesArray";
import Loading from "@/app/(auth)/loading";
import {UserAccountInfo, UserInfo, UserNotification} from "@/app/Types";
import Image from "next/image";
import {
    changePasswordFunction,
    changePersonalInfoFunction,
    editNotificationInfoFunction,
    updateBalanceInfoFunction
} from "@/app/Admin/Users/[slug]/Functions";
import Link from "next/link";

function SettingsForm({UserInfo, UserBalance, UserNotification}: {
    UserInfo: UserInfo,
    UserBalance: UserAccountInfo,
    UserNotification: UserNotification
}) {
    const data = UserInfo
    const balanceInfo = UserBalance
    const userNotification = UserNotification
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
            "Role": data?.role || "",
            "Account Status": data?.AccountStatus
        }
    });


    const {
        handleSubmit: balanceHandler,
        register: balanceRegisterHandler,
        formState: {errors: balanceErrorHandler},
    } = useForm<FieldValues>({
        defaultValues: {
            "Deposited": balanceInfo?.Deposited,
            "Profit": balanceInfo?.Profit,
        }
    });

    const {
        handleSubmit: editNotificationHandler,
        register: editNotificationRegisterHandler,
        formState: {errors: editNotificationErrorHandler},
    } = useForm<FieldValues>({
        defaultValues: {
            "Notification": userNotification?.notification,
            "Pop Up Message": userNotification?.popUpMessage,
        }
    });

    const {
        handleSubmit: handleSubmitHandler,
        register: registerUser,
        setError,
        formState: {errors: errorsHandler},
    } = useForm();

    const [newPf, setNewPf] = useState("/empty")
    const [rawImage, setRawImage] = useState<File | undefined>()

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

    const [activateNotification, setActivateNotification] = useState<boolean>(false)
    useEffect(() => {
        setActivateNotification(!(userNotification?.showNotifications == 0))
    }, [userNotification]);

    return (
        <>
            {loading ? <Loading/> : ""}
            <form
                onSubmit={async (event) => {
                    event.preventDefault()
                    await changePersonalInfoFunction(setLoading, rawImage, handleSubmit, data?.ProfilePicture, data?.userid)
                }}
                className="bg-[#1B2028] sm:mt-[] mt-[15px]  rounded-[15px] px-[15px] sm:px-[24px] py-[30px] sm:py-[46px]">
                <div className={" font-[600]  text-[30px] text-[#E4E4E4] font-poppins"}>
                    Personal Info
                </div>
                <div
                    className="grid mt-[30px] sm:gap-[30px]">
                    <div className={"grid gap-x-[26px] grid-cols-1 sm:grid-cols-2 sm:gap-y-[30px] gap-y-[20px]"}>
                        {["First Name", "Last Name", "Email", "Phone number"].map((data, key) => {
                            return (
                                <div key={key} className={`block  w-full`}>
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
                                Role
                            </div>
                            <div className={"mt-[8px] sm:mt-[12px]"}>

                                <SelectTemp defaultValue={data?.role} selectionType={"role"}
                                            inputName={"Role"}
                                            inputChange={register}
                                            options={["admin", "user"]}/>
                            </div>
                        </div>
                        <div className={"block"}>
                            <div className={"opacity-80 sm:block  " +
                                "text-[14px] text-[#ffffff] sm:text-base font-poppins " +
                                "font-light leading-[24px] "}>
                                Account Status
                            </div>
                            <div className={"mt-[8px] sm:mt-[12px]"}>

                                <SelectTemp defaultValue={data?.role} selectionType={"AccountStatus"}
                                            inputName={"Account Status"}
                                            inputChange={register}
                                            options={["unverified", "verified"]}/>
                            </div>
                        </div>
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
                                    <input type={"file"} onChange={(e) => imageTaker(e)} id={"fileTaker"}
                                           className={"hidden"}/>
                                    <div className={"w-[35px] h-[35px] rounded-full bg-[grey]"}>
                                        {
                                            function () {
                                                const image = newPf != "/empty" ? newPf : (data?.ProfilePicture ? data?.ProfilePicture : undefined)

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
                        <div className={"block sm:col-span-2"}>
                            <div className={"opacity-80 sm:block  " +
                                "text-[14px] text-[#ffffff] sm:text-base font-poppins " +
                                "font-light leading-[24px] "}>
                                User Verification
                            </div>
                            <div className={"mt-[8px] sm:mt-[12px]"}>
                                <Link onClick={(e) => {
                                    if (!data?.["IdentityCard"]) {
                                        e.preventDefault();
                                    }


                                }} target={"_blank"} href={(data?.["IdentityCard"]) || ""}
                                      className="w-full cursor-pointer text-[#ABAFB1] flex items-center bg-[rgba(0,0,0,0.1)] font-poppins h-[50px] sm:h-[52px] rounded-[8px] px-[16px]  border-[rgba(255,255,255,0.7)] border text-[14px] sm:text-[16px] md:border-[1.3px] "
                                >
                                    <div className={"w-[35px] h-[35px] rounded-full bg-[grey]"}>
                                        {
                                            function () {
                                                const image = (data?.["IdentityCard"] ? data?.["IdentityCard"] : undefined)

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
                                        {data?.["IdentityCard"] ? "View User ID" : "User Has Not Submitted Their ID"}
                                    </div>
                                </Link>

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

                    await updateBalanceInfoFunction(setLoading, balanceHandler, data?.userid)
                }
                }
                className="bg-[#1B2028] sm:mt-[] mt-[15px]  rounded-[15px] px-[15px] sm:px-[24px] py-[30px] sm:py-[46px]">
                <div className={" font-[600] text-[30px] text-[#E4E4E4] font-poppins"}>
                    Balance Info
                </div>
                <div
                    className="grid mt-[30px] sm:gap-[30px]">
                    <div className={"grid gap-x-[20px] sm:gap-x-[26px] sm:grid-cols-2 sm:gap-y-[30px] gap-y-[20px]"}>
                        {["Deposited", "Profit"].map((data, key) => {
                            return (
                                <div key={key}
                                     className={"block  w-full"}>
                                    <div className={"opacity-80 sm:block  " +
                                        "text-[14px] text-[#ffffff] sm:text-base font-poppins " +
                                        "font-light leading-[24px] "}>
                                        {data}
                                    </div>
                                    <div className={"mt-[8px] sm:mt-[12px]"}>
                                        <InputTemp
                                            type={"number"}
                                            inputName={data}
                                            errors={balanceErrorHandler}
                                            inputChange={balanceRegisterHandler}
                                            placeholder={data}/>
                                    </div>
                                </div>
                            )
                        })

                        }
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
                    await changePasswordFunction(setLoading, handleSubmitHandler, setError, data?.userid)
                }}
                className="bg-[#1B2028] sm:mt-[] mt-[15px]  rounded-[15px] px-[15px] sm:px-[24px] py-[30px] sm:py-[46px]">
                <div className={" font-[600]  text-[30px] text-[#E4E4E4] font-poppins"}>
                    Change Password
                </div>
                <div
                    className="grid  sm:gap-[30px]">
                    <div
                        className={"grid grid-cols-1 mt-[30px] sm:grid-cols-2 gap-x-[26px] sm:gap-y-[30px] gap-y-[20px]"}>
                        {["New Password", "Confirm Password"].map((data, key) => {
                            return (
                                <label key={key} className={`block`}>
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

            <form
                onSubmit={async (event) => {
                    event.preventDefault()
                    await editNotificationInfoFunction(setLoading, editNotificationHandler, data?.userid, activateNotification)

                }}
                className="bg-[#1B2028] sm:mt-[] mt-[15px]  rounded-[15px] px-[15px] sm:px-[24px] py-[30px] sm:py-[46px]">
                <div className={"flex items-center justify-between"}>
                    <div className={" font-[600]  text-[30px] text-[#E4E4E4] font-poppins"}>
                        Notifications
                    </div>

                    <div onClick={() => setActivateNotification((prevState) => !prevState)}
                         style={{boxShadow: "inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1)"}}
                         className={`flex ${activateNotification ? "bg-[#4182F9]" : "bg-black"} transition-all cursor-pointer items-center ${!activateNotification ? "justify-start" : "justify-end"} rounded-[50px] transition-all w-[50px] h-[23px] p-[3px]`}>
                        <div style={{background: "linear-gradient(180deg, #FFFFFF 0%, #E8EAEA 100%)"}}
                             className={"w-[18px] h-[18px] z-[20]  rounded-full"}>

                        </div>
                    </div>
                </div>
                <div


                    className="grid  sm:gap-[30px]">
                    <div
                        className={"grid grid-cols-1 mt-[30px] sm:grid-cols-2 gap-x-[26px] sm:gap-y-[30px] gap-y-[20px]"}>
                        {["Notification", "Pop Up Message"].map((data, key) => {
                            return (
                                <div key={key} className={`block`}>
                                    <div className={"justify-between items-center flex"}>
                                        <div className={`opacity-80  sm:block  ` +
                                            "text-[14px] text-[#ffffff] sm:text-base font-poppins " +
                                            "font-light leading-[24px] "}>
                                            {data}
                                        </div>
                                    </div>

                                    <div className={"mt-[8px] sm:mt-[12px]"}>
                                        <InputTemp optional inputName={data}
                                                   errors={editNotificationErrorHandler}
                                                   inputChange={editNotificationRegisterHandler}
                                                   placeholder={data}/>
                                    </div>
                                </div>
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
