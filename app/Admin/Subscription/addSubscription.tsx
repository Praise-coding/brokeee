"use client"
import React, {useState} from 'react'
import InputTemp from "@/app/components/ui/InputTemp";
import {useForm} from "react-hook-form";
import Loading from "@/app/(auth)/loading";
import {Toaster} from "@/app/(auth)/formUi/Toast";
import {useRouter} from "next/navigation";
import {addsubbs} from "@/app/Admin/Subscription/addsubbs";

function AddSubscription() {
    const {register, handleSubmit, formState: {errors}} = useForm({})
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const [open, setOpen] = useState(false);

    async function addSubscription() {
        await handleSubmit(async (data) => {
            setLoading(true)
            const response = await addsubbs(data)
            if (!response.ok) {
                setLoading(false)
                Toaster("error", "An error occurred")
                return;
            }
            router.refresh()
            setLoading(false)
            Toaster("success", "Updated successfully")
        })()

    }

    return (
        <div>

            <div
                className={`bg-[#1B2028]  transition-all  overflow-hidden ${open ? "h-fit sm:h-fit  sm:mt-[22px] mt-[12px] py-[20px] sm:py-[50px] px-[15px] sm:px-[31px]" : "h-[0px]"}  rounded-[15px] `}>
                <div>
                    {loading && <Loading/>}
                    <form onSubmit={async (e) => {
                        e.preventDefault()
                        await addSubscription()
                    }} className="grid gap-[20px] sm:gap-[20px]">
                        <InputTemp placeholder={"Enter Plan Name"} inputName={"Plan"} inputChange={register}
                                   errors={errors}/>
                        <InputTemp placeholder={"Enter Plan Amount"} type={"number"} inputName={"Price"}
                                   inputChange={register}
                                   errors={errors}/>
                        <InputTemp placeholder={"Enter Some Description"} inputName={"InfoText"}
                                   inputChange={register}
                                   errors={errors}/>
                        <div>
                            <button
                                className="bg-[#5570F1] cursor-pointer font-poppins text-[14px] text-white w-full rounded-[12px] h-[47px]">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div style={{marginTop: "20px"}}>
                <button onClick={() => setOpen((prevState) => !prevState)}
                        className="bg-[#5570F1] cursor-pointer font-poppins text-[14px] text-white w-full rounded-[12px] h-[47px]">
                    Add Subscription
                </button>
            </div>
        </div>
    );
}

export default AddSubscription;