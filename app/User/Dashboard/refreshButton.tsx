"use client"
import {useRouter} from "next/navigation";

export default function RefreshButton() {
    const router = useRouter()
    return (
        <div onClick={() => router.refresh()}>
            <button
                className={"w-[105px] cursor-pointer font-poppins font-[600] text-[10px]  text-[#E4E4E4] h-[32px] border-[1px] rounded-[5px] border-[#31353F]"}>
                           <span className={"opacity-[0.6]"}>
                               Refresh
                           </span>
            </button>
        </div>
    )
}