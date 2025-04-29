"use client";
import AnimateCon from "@/app/Homepage/AnimateCon";

export default function Partners() {
    return (
        <AnimateCon
            variants={{
                hidden: {opacity: 0},
                visible: {opacity: 1, transition: {duration: 0.7}}
            }}
            className="bg-[#0F0F0F] overflow-hidden flex justify-center ">
            <div className="max-w-[1050px] py-[40px] px-[20px] grid gap-[32px] sm:gap-[40px] w-full">
                <div className="font-alexandria text-[#999999] leading-[20px] text-center">
                    Satisfied Partners
                </div>
                <div className="flex justify-center w-full">
                    <AnimateCon
                        className="grid grid-cols-2 sm:gap-0 gap-[25px] w-[200px]  sm:grid-cols-5 items-center justify-center"

                        variants={{
                            hidden: {opacity: 0, width: "100px"},
                            visible: {opacity: 1, width: "100%", transition: {duration: 0.8, delay: 0.2}}
                        }}
                    >
                        {
                            ["Binance", "BitGet", "CoinBase", "KuCoin", "UpBit"].map((store, key) => (
                                <div
                                    key={key}
                                    className={`font-poppins sm:gap-[8px] gap-[10px] ${store == "UpBit" ? "sm:col-span-1 justify-center col-span-2" : ""} flex items-center text-[20px] sm:text-[22px] text-[#999999] font-[500]   flex justify-center`}
                                >
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M7.18472 3.03722C6.0796 3.81798 5.08028 4.74111 4.21277 5.78026C7.7578 5.44772 12.2616 5.99072 17.4905 8.63239C23.0743 11.4532 27.5706 11.5486 30.6998 10.9387C30.4159 10.0701 30.0584 9.23531 29.635 8.44171C26.0529 8.82345 21.4606 8.31816 16.1088 5.61447C12.7103 3.89756 9.71454 3.1903 7.18472 3.03722ZM27.5425 5.43236C24.7137 2.23888 20.6028 0.229126 16.0272 0.229126C14.6835 0.229126 13.3798 0.402478 12.1369 0.728232C13.8202 1.19231 15.6084 1.87126 17.4905 2.82211C21.4089 4.80163 24.7918 5.439 27.5425 5.43236ZM31.3688 13.9876C27.5885 14.7419 22.3681 14.587 16.1088 11.4247C10.257 8.4684 5.59942 8.50563 2.4582 9.21096C2.29607 9.24733 2.13774 9.28557 1.98324 9.32538C1.57198 10.2291 1.2437 11.1794 1.00815 12.1663C1.25973 12.0984 1.51969 12.0338 1.78791 11.9736C5.59875 11.1179 10.9831 11.1551 17.4905 14.4426C23.3424 17.399 27.9999 17.3618 31.1412 16.6564C31.2488 16.6323 31.3549 16.6073 31.4592 16.5816C31.4706 16.3355 31.4763 16.0878 31.4763 15.8389C31.4763 15.2125 31.4398 14.5948 31.3688 13.9876ZM30.9547 19.8758C27.211 20.5371 22.1427 20.2833 16.1088 17.235C10.257 14.2787 5.59942 14.3159 2.4582 15.0212C1.76095 15.1777 1.1337 15.3684 0.580388 15.5697C0.57888 15.6592 0.578125 15.749 0.578125 15.8389C0.578125 24.4599 7.49491 31.4486 16.0272 31.4486C23.1779 31.4486 29.1939 26.5401 30.9547 19.8758Z"
                                              fill="#999999"/>
                                    </svg>

                                    <div>
                                        {store}
                                    </div>

                                </div>
                            ))
                        }
                    </AnimateCon>
                </div>
            </div>
        </AnimateCon>
    );
}
