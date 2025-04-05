"use client"
import React, {useEffect, useState} from 'react';
import {socialMedia} from "@/app/Types";
import InputTemp from "@/app/components/ui/InputTemp";
import {useForm} from "react-hook-form";
import {Toaster} from "@/app/(auth)/formUi/Toast";
import {useRouter} from "next/navigation";
import Loading from "@/app/User/loading";
import {saveSocialMedia} from "@/app/Admin/Social-Media/saveStore";
import {deleteSocialMedia} from "@/app/Admin/Social-Media/deleteStore";

function DisplaySocialMedia({data}: { data: socialMedia }) {
    const {handleSubmit, setValue, register, formState: {errors}} = useForm()
    const [open, setOpen] = useState(false)
    useEffect(() => {
        setValue("mediaName", data?.["mediaName"])
        setValue("mediaUrl", data?.["mediaUrl"])
    }, [data, setValue]);

    async function deleteLink() {
        setLoading(true)
        const response = await deleteSocialMedia(data?.["id"])
        if (!response.ok) {
            setLoading(false)
            Toaster("error", "An error occurred")
            return;
        }
        router.refresh()
        setLoading(false)
        Toaster("success", "Updated successfully")
    }

    const [loading, setLoading] = useState(false);
    const router = useRouter()

    async function saveLink() {
        await handleSubmit(async (userdata) => {
            setLoading(true)
            const response = await saveSocialMedia(userdata, data?.["id"])
            if (!response.ok) {
                setLoading(false)
                Toaster("error", "An error occurred")
                return;
            }
            router.refresh()
            setLoading(false)
            Toaster("success", "Deleted successfully")
        })()
    }

    return (
        <>
            {loading && <Loading/>}
            <div>
                <div onClick={() => setOpen((prevState) => !prevState)}
                     style={{color: "rgba(255,255,255,0.76)"}}
                     className={"bg-[#1B2028] cursor-pointer w-full text-white font-poppins text-[18px] sm:text-[20px] py-[20px] text-center rounded-[10px]"}>
                    {data?.["mediaName"]}
                </div>
                <div style={{height: open ? "fit-content" : "0px"}}
                     className={`bg-[#1B2028] rounded-[10px] overflow-hidden block ${open ? "p-[20px] mt-[10px]" : ""}`}>
                    <form onSubmit={async (e) => {
                        e.preventDefault()
                        await saveLink()
                    }} className="grid gap-[20px] sm:gap-[20px]">
                        <InputTemp placeholder={"Enter media Name"} inputName={"mediaName"} inputChange={register}
                                   errors={errors}/>
                        <InputTemp placeholder={"Enter media Url"} inputName={"mediaUrl"}
                                   inputChange={register}
                                   errors={errors}/>
                        <div>
                            <button
                                className="bg-[#5570F1] cursor-pointer font-poppins text-[14px] text-white w-full rounded-[12px] h-[47px]">
                                Save
                            </button>
                        </div>
                        <div>
                            <button type={"button"} onClick={() => deleteLink()}
                                    style={{background: "rgba(255,38,38,0.94)"}}
                                    className=" cursor-pointer font-poppins text-[14px] text-white w-full rounded-[12px] h-[47px]">
                                Delete
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default DisplaySocialMedia;