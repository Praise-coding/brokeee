"use client"
import InputTemp from "@/app/components/ui/InputTemp";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {Toaster} from "@/app/(auth)/formUi/Toast";
import {useRouter} from "next/navigation";
import {updateSubscription} from "@/app/Admin/Subscription/updateSubscription";
import Loading from "@/app/User/loading";
import {deleteSubscription} from "@/app/Admin/Subscription/deleteSubscription";

function SubscriptionCard({plan, price, id, infoText}: {
    plan: string,
    price: number,
    id: number,
    infoText: string
}) {
    const {handleSubmit, setValue, register, formState: {errors}} = useForm()
    const [open, setOpen] = useState<boolean>(false)
    useEffect(() => {
        setValue("Plan", plan)
        setValue("Price", price)
        setValue("InfoText", infoText)
    }, [plan, price, setValue, infoText])

    const [loading, setLoading] = useState(false)
    const router = useRouter()

    async function saveEdit() {
        await handleSubmit(async (data) => {
            setLoading(true)
            const response = await updateSubscription(id, data)
            if (!response?.ok) {
                setLoading(false)
                Toaster("error", "An error occurred")
                return;
            }
            router.refresh()
            setLoading(false)
            Toaster("success", "Updated Successfully")

        })()
    }


    async function deleteSub() {
        setLoading(true)
        const response = await deleteSubscription(id)
        setLoading(false)
        if(!response?.ok) {
            Toaster("error", "An error occurred")
            return;
        }
        router.refresh()
        Toaster("success", "Updated Successfully")
    }


    return (
        <>
            {loading && <Loading/>}
            <div className={
                "bg-[#1B2028] h-fit relative rounded-[8px] py-[35px] px-[27px] w-full text-white"}
            >
                <div>
                    <div className={"font-montserrat hh font-[700]  leading-[24px] tracking-[0.1px] text-white"}>
                        {plan} PLAN
                    </div>
                    <div className={" items-center font-montserrat mt-[17px] text-white gap-[17px]"}>
                        <div className={"justify-c  text-[40px] font-[700] leading-[57px] tracking-[0.2px] "}>
                            ${price}
                        </div>

                        <div className={"mt-[5px]"}>
                            <div className={"font-[700] leading-[24px] tracking-[0.1px]"}>
                                Minimum Amount
                            </div>
                            <div className={"font-[500] text-[12px] leading-[16px] tracking-[0.2px] "}>

                                5 Days Business Period
                            </div>
                        </div>
                    </div>
                    <div className={"my-[17px]"}>
                        <svg width="47" height="4" viewBox="0 0 47 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="47" height="4" fill="#31A0FE"/>
                        </svg>
                    </div>
                    <div className={"font-montserrat font-[500] text-[12px] leading-[16px] tracking-[0.2px]"}>
                        {/*Slate helps you see how many more days you need...*/}
                        {infoText}
                    </div>
                    <form onSubmit={async (e) => {
                        e.preventDefault()
                        await saveEdit()
                    }} style={{height: open ? "100%" : "0px"}}
                          className={"grid transition-all overflow-hidden gap-[10px] mt-[15px]"}>
                        <InputTemp height placeholder={"Enter Plan Name"} inputName={"Plan"} inputChange={register}
                                   errors={errors}/>
                        <InputTemp height placeholder={"Enter Plan Amount"} inputName={"Price"} inputChange={register}
                                   errors={errors}/>
                        <InputTemp height placeholder={"Enter Some Description"} inputName={"InfoText"}
                                   inputChange={register}
                                   errors={errors}/>
                        <button
                            style={{background: "rgba(0,65,200,0.91)"}}

                            className={"cursor-pointer text-white font-montserrat text-[14px] font-[700] leading-[28px] tracking-[0.2px] text-[#2D2D2D] rounded-[6px] w-full h-[44px] flex items-center justify-center"}>
                            Save Info
                        </button>
                        <button
                            onClick={()=> deleteSub()}
                            type={"button"}
                            style={{background: "rgba(174,0,0,0.91)"}}
                            className={" cursor-pointer font-montserrat text-white text-[14px] font-[700] leading-[28px] tracking-[0.2px] text-[#2D2D2D] rounded-[6px] w-full h-[44px] flex items-center justify-center"}>
                            Delete Info
                        </button>
                    </form>
                    <button
                        type={"button"}

                        onClick={() => setOpen((prev) => !prev)}
                            className={"bg-white cursor-pointer mt-[17px] font-montserrat text-[14px] font-[700] leading-[28px] tracking-[0.2px] text-[#2D2D2D] rounded-[6px] w-full h-[44px] flex items-center justify-center"}>
                        {open ? "Close" : "Edit"} Info
                    </button>
                </div>

                <div className={"absolute opacity-40 right-0 top-0"}>
                    <svg width="108" height="109" viewBox="0 0 108 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="56" y="55" width="54" height="54" rx="27" fill="#FDA14C" fillOpacity="0.5"/>
                        <rect x="1" y="55" width="54" height="54" rx="27" fill="#FDA14C" fillOpacity="0.5"/>
                        <rect x="56" width="54" height="54" rx="27" fill="#FDA14C" fillOpacity="0.5"/>
                        <rect x="1" width="54" height="54" rx="27" fill="#DB0481" fillOpacity="0.5"/>
                    </svg>

                </div>
            </div>
        </>

    )
}

export default SubscriptionCard