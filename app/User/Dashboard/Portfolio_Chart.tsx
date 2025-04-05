import React from 'react'
import Portfolio from "@/app/User/Dashboard/Portfolio";
import TradingViewWidget from "@/app/User/Dashboard/TradingViewChart";

function PortfolioChart() {
    return (
        <div className={"md:flex mt-[18px]"}>
            <div>
                <Portfolio/>
            </div>
            <div
                className={"flex-1 w-full sm:mt-[0px] sm:h-auto h-[400px] mt-[18px] sm:ml-[24px] rounded-[15px] overflow-hidden"}>
                <TradingViewWidget/>
            </div>
        </div>
    )
}

export default PortfolioChart
