"use client"
import React, {useState} from 'react'
import InputTemp from "@/app/components/ui/InputTemp";
import SelectTemp from "@/app/components/ui/SelectInputTemp";
import {useForm} from "react-hook-form";
import Loading from "@/app/(auth)/loading";
import {Toaster} from "@/app/(auth)/formUi/Toast";
import {useRouter} from "next/navigation";
import {addDeposit} from "@/app/Admin/Deposit/addDeposit";

function AddDepositMethod() {
    const {register, handleSubmit, formState: {errors}} = useForm({})
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const [open, setOpen] = useState(false);

    async function addMethod() {
        await handleSubmit(async (data) => {
            setLoading(true)
            const response = await addDeposit(data)
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
                        await addMethod()
                    }} className="grid gap-[20px] sm:gap-[20px]">
                        <SelectTemp
                            defaultValue={"Bitcoin"}
                            selectionType={"Crypto"}
                            options={["Bitcoin", "Ethereum", "Tether"]}
                            inputName={'Crypto'}
                            inputChange={register}/>
                        <InputTemp
                            errors={errors}
                            inputName={'Address'}
                            placeholder={"Enter wallet address"}
                            inputChange={register}/>
                        <div>
                            <button
                                className="bg-[#5570F1] cursor-pointer font-poppins text-[14px] text-white w-full rounded-[12px] h-[47px]">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div style={{marginTop: open ? "20px" : undefined}}>
                <button onClick={() => setOpen((prevState) => !prevState)}
                        className="bg-[#5570F1] cursor-pointer font-poppins text-[14px] text-white w-full rounded-[12px] h-[47px]">
                    Add Deposit Method
                </button>
            </div>
        </div>
    );
}

export default AddDepositMethod;