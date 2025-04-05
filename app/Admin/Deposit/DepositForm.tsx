"use client"
import React, {useEffect, useState} from 'react'
import InputTemp from "@/app/components/ui/InputTemp";
import SelectTemp from "@/app/components/ui/SelectInputTemp";
import {useForm} from "react-hook-form";
import Loading from "@/app/(auth)/loading";
import {allWalletAddress} from "@/app/Types";
import {deleteAddress} from "@/app/Admin/Deposit/deleteAddress";
import {Toaster} from "@/app/(auth)/formUi/Toast";
import {useRouter} from "next/navigation";
import {saveAddress} from "@/app/Admin/Deposit/saveAddress";


function DepositForm({data: dataa}: { data: allWalletAddress }) {

    const {register, handleSubmit, setValue, formState: {errors}} = useForm({})
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    useEffect(() => {
        setValue("Address", dataa?.["address"])
        setValue("Crypto", dataa?.["name"])
    }, [dataa, setValue]);

    async function deleteItem() {
        setLoading(true)

        const response = await deleteAddress(dataa["id"])
        setLoading(false)

        if (!response?.ok) {
            Toaster("error", "An error occurred")
            return;
        }
        router.refresh()
        Toaster("success", "Updated Successfully.")

    }

    async function saveItem() {
        await handleSubmit(async (data) => {
            setLoading(true)
            const response = await saveAddress(dataa["id"], data)
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

    return (
        <>
            {loading && <Loading/>}
            <form onSubmit={async (e) => {
                e.preventDefault()
                await saveItem()
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
                <div>
                    <button type={"button"} onClick={() => deleteItem()}
                            style={{backgroundColor: "rgba(255,22,22,0.8)"}}
                            className="cursor-pointer font-poppins text-[14px] text-white w-full rounded-[12px] h-[47px]">
                        Delete
                    </button>
                </div>
            </form>


        </>
    )
}

export default DepositForm
