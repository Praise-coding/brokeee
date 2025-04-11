"use client"
import React, {ChangeEvent, useState} from 'react'
import UploadIconSvg from "@/app/components/ui/UploadIconSvg";
import InputTemp from "@/app/components/ui/InputTemp";
import SelectTemp from "@/app/components/ui/SelectInputTemp";
import {useForm} from "react-hook-form";
import Image from "next/image";
import Loading from "@/app/(auth)/loading";
import {submitForm} from "@/app/User/Deposit/SubmitForm";
import {useSession} from "next-auth/react";
import {Toaster} from "@/app/(auth)/formUi/Toast";


function DepositForm() {

    const {register, handleSubmit, getValues, formState: {errors}} = useForm({})
    const options = ["Bitcoin", "Ethereum", "Tether"];
    const [image, setImage] = useState<string>("/empty");
    const [rawImageFile, setRawImageFile] = useState<File>();
    const [loading, setLoading] = useState(false)
    const {data} = useSession()

    function selectImage(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            const image = e.target.files[0];
            if (image) {
                setRawImageFile(image)
                setImage(URL.createObjectURL(image))
            } else {
                setImage("/empty")

            }

        }

    }


    const formSubmitter = async () => {
        if (data?.["user"]?.["UserBalance"]?.["AllowWithdrawal"] == 0 || data?.["user"]?.["UserBalance"]?.["AllowDeposit"] == 0) {
            Toaster("error", "You cannot make this transaction")
            return;
        }

        await submitForm(getValues, image, handleSubmit, setLoading, rawImageFile)
    }
    return (
        <>
            {loading && <Loading/>}
            <form onSubmit={async (e) => {
                e.preventDefault()
                await formSubmitter()
            }} className="grid gap-[20px] sm:gap-[20px]">
                <InputTemp
                    type={"number"}
                    errors={errors}
                    inputName={'Amount'}
                    placeholder={"Amount In Dollars ($)"}
                    inputChange={register}/>
                <SelectTemp defaultValue={"Bitcoin"} selectionType={"deposit"} inputName={"DepositMethod"}
                            options={options}
                            inputChange={register}/>
                <label htmlFor="fileTaker"
                       className="w-full bg-[rgba(0,0,0,0.1)] cursor-pointer flex items-center justify-center h-[174px] rounded-md border-opacity-[50%] border-[#9E9E9E] border sm:border-[1.3px] ">
                    <div className={"relative"}>
                        <input accept=".jpg, .jpeg, .png" onChange={(image) => selectImage(image)} type="file"
                               id="fileTaker"
                               className="opacity-0 z-[-10] hidden"/>
                        {image != "/empty" ?
                            <div className={"px-[20px] h-full w-full relative "}>
                                <Image width={400} height={400} src={image} className={"w-full  block h-[150px] "}
                                       alt={""}/>
                            </div>

                            : <>
                                <div className="flex justify-center">
                                    <UploadIconSvg/>
                                </div>
                                <div>
                                    <p className="text-[#ABAFB1] font-poppins opacity-85 mt-[12px] sm:text-base text-[14px] text-center">
                                        Upload Payment Receipt
                                    </p>
                                </div>
                            </>
                        }

                    </div>
                </label>
                <div>
                    <button
                        className="bg-[#5570F1] cursor-pointer font-poppins text-[14px] text-white w-full rounded-[8px] h-[47px]">
                        Submit
                    </button>
                </div>
            </form>


        </>
    )
}

export default DepositForm
