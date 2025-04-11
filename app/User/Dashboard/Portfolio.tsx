import React from 'react'
import {fetchCryptoPrice} from "@/app/User/Dashboard/fetchCryptoPrice";
import PortfolioAnimation from "@/app/User/Dashboard/PortfolioAnimation";
import Link from "next/link";

async function Portfolio() {
    const fetchCryps = await fetchCryptoPrice()

    return (
        <>
            <div
                className={"bg-[#1B2028] sm:mt-0 mt-[24px] font-poppins  md:w-[360px] rounded-[8px] sm:py-[] sm:px-[] px-[15px] py-[20px] sm:p-[30px]"}>
                <div className={"sm:flex hidden justify-between items-center"}>
                    <div
                        className="font-[600] font-poppins text-[#E4E4E4] text-[18px] sm:text-[21px] leading-[32px] tracking-[0.03em]">
                        Coin Prices
                    </div>
                    <Link href={"https://coinmarketcap.com/"} target={"_blank"}>
                        <button
                            className={"w-[80px] hover:bg-white hover:text-black transition-all font-poppins font-[600] text-[10px]  text-[#E4E4E4] h-[32px] border-[1px] rounded-[5px] border-[#31353F]"}>
                           <span className={"opacity-[0.6]"}>
                               View More
                           </span>
                        </button>
                    </Link>
                </div>
                <PortfolioAnimation fetchCryps={fetchCryps}/>
            </div>

        </>

    )
}

export default Portfolio
