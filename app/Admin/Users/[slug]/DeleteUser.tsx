"use client"
import React, {useState} from 'react';
import {UserDelete} from "@/app/Admin/Users/[slug]/UserDelete";
import Loading from "@/app/User/loading";
import {Toaster} from "@/app/(auth)/formUi/Toast";
import {useRouter} from "next/navigation";

const DeleteUser = ({id}: { id: number }) => {
    const [state, setState] = useState(false)
    const router = useRouter()
    const [areYouSure, setAreYouSure] = useState(false)
    const clickMe = async () => {
        setAreYouSure(false)
        setState(true)
        const response = await UserDelete(id)

        setState(false)
        if (!response.ok) {
            Toaster("error", "An error occurred")
            return;
        }
        router.push("/Admin/Users")
        Toaster("success", "User Deleted Successfully")
    }


    return (
        <>
            {state && <Loading/>}
            <div
                className={`${areYouSure ? "opacity-[100%]" : "z-[-1] opacity-[0%]"} transition-all fixed top-0 flex items-center justify-center top-0 left-[50px] w-full h-screen`}>
                <div className={"w-fit bg-[#1B2028]"}>
                    <div style={{background: "rgba(0,0,0,0.65)"}}
                         className={"bg-[#1B2028] border rounded-[20px] p-[50px]"}>
                        <div className={"text-[] text-white font-poppins"}>
                            Are you sure you want to delete this user?
                        </div>
                        <div className={"mt-[10px] flex gap-[10px] justify-center"}>
                            <button onClick={() => clickMe()} style={{background: ""}}
                                    className={"bg-[blue] font-poppins cursor-pointer w-[100px] py-[10px] rounded-[10px] text-white"}>
                                Yes
                            </button>
                            <button onClick={() => setAreYouSure(false)}
                                    className={"bg-[blue] font-poppins cursor-pointer w-[100px] py-[10px] rounded-[10px] text-white"}>
                                No
                            </button>
                        </div>

                    </div>
                </div>

            </div>
            <button
                onClick={() => setAreYouSure(true)}
                className={"bg-[red]  block cursor-pointer   items-center justify-center rounded-[8px] w-full mt-[20px] h-[50px] "}>
                            <span className={"font-poppins text-white leading-[24px]"}>
                                    Delete User
                            </span>
            </button>
        </>


    );
};

export default DeleteUser;