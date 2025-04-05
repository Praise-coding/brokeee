"use client"
import React, {ChangeEvent, useState} from 'react';
import Image, {StaticImageData} from "next/image";
import UploadIconSvg from "@/app/components/ui/UploadIconSvg";
import {uploadImage} from "@/app/User/Deposit/imageUploader";
import {Toaster} from "@/app/(auth)/formUi/Toast";
import Loading from "@/app/User/loading";
import {useSession} from "next-auth/react";
import {User} from "@/app/Types";
import {updateUserId} from "@/app/User/Upload-ID/updateUserId";

function Page() {
    const [image, setImage] = useState<string | StaticImageData>("/empty")
    const [rawImageFile, setRawImageFile] = useState<File>();
    const {data: sess} = useSession();
    const session = sess as User

    function selectImage(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            const image = e.target.files[0];
            if (image) {
                setRawImageFile(image)
                setImage(URL.createObjectURL(image))
            } else {
                setImage("/empty")
                setRawImageFile(undefined)
            }
        }
    }

    const [loading, setLoading] = useState<boolean>(false)

    async function sendImage() {
        if (!rawImageFile) return;
        setLoading(true)
        const fileToSupaBase = await uploadImage(rawImageFile)
        setLoading(false)
        if (!fileToSupaBase) {
            Toaster("error", "An error occurred")
            return;
        }
        const response = await updateUserId(fileToSupaBase, session?.["user"]?.["UserInfo"]?.["userid"])
        if (!response.ok) {
            Toaster("error", "An error occurred")
            return;
        }
        Toaster("info", "Your ID has been sent for review.")
    }

    return (
        <>
            {loading && <Loading/>}
            <div className={"h-screen"}>
                <div className="bg-[#1B2028] mt-[20px]   rounded-[15px] py-[20px] sm:py-[50px] px-[15px] sm:px-[31px]">
                    <label htmlFor="fileTaker"
                           className="w-full  cursor-pointer bg-[rgba(0,0,0,0.1)] flex items-center justify-center h-[174px] rounded-[8px] border-opacity-[50%] border-[#9E9E9E] border sm:border-[1.3px] ">
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

                </div>
                <div onClick={() => sendImage()}>
                    <button
                        className="bg-[#5570F1] mt-[20px] cursor-pointer font-poppins text-[14px] text-white w-full rounded-[12px] h-[47px]">
                        Submit
                    </button>
                </div>
            </div>
        </>

    );
}

export default Page;