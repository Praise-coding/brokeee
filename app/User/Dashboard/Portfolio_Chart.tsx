import React from 'react'
import Portfolio from "@/app/User/Dashboard/Portfolio";
import TradingViewWidget from "@/app/User/Dashboard/TradingViewChart";

function PortfolioChart() {
    return (
        <div className={"md:flex mt-[18px]"}>
            <div
                className={"flex-1 w-full sm:mt-[0px] sm:h-[388px] h-[400px] mt-[18px] sm:mr-[24px] rounded-[8px] overflow-hidden"}>
                <TradingViewWidget />
            </div>
            <div>
                <Portfolio />
            </div>
        </div>
    )
}

export default PortfolioChart
