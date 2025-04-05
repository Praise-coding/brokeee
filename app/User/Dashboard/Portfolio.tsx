import React from 'react'
import {CurrentCryptoPriceCards} from "@/app/components/ui/CurrentCryptoPriceCards";
import {fetchCryptoPriceForPorfolio} from "@/app/User/Dashboard/fetchCryptoPriceForPorfolio";

async function Portfolio() {
    const fetchCryps = await fetchCryptoPriceForPorfolio()

    return (
        <>
            <div
                className={"bg-[#1B2028] font-poppins  md:w-[360px] rounded-[15px] sm:py-[] sm:px-[] px-[15px] py-[20px] sm:p-[30px]"}>
                <div className={"sm:flex hidden justify-between items-center"}>
                    <div
                        className="font-[600] font-poppins text-[#E4E4E4] text-[18px] sm:text-[21px] leading-[32px] tracking-[0.03em]">
                        My Portfolio
                    </div>
                    <div>
                        <button
                            className={"w-[80px] font-poppins font-[600] text-[10px]  text-[#E4E4E4] h-[32px] border-[1px] rounded-[5px] border-[#31353F]"}>
                           <span className={"opacity-[0.6]"}>
                               View More
                           </span>
                        </button>
                    </div>
                </div>
                <div className={"grid grid-cols-1 gap-[24px]  sm:mt-[24px]"}>
                    {Object.entries(fetchCryps).map(([title, price], key) => {
                        const cryptoPrice = price as Record<string, number>
                        return (
                            <CurrentCryptoPriceCards price={cryptoPrice?.usd} title={title} key={key}/>
                        )
                    })}
                </div>
            </div>

        </>

    )
}

export default Portfolio
