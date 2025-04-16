"use client";
import Image from 'next/image';
import pic from "./images/Frame.png";
import AnimateCon from "@/app/Homepage/AnimateCon";

export default function Partners() {
    return (
        <AnimateCon
            variants={{
                hidden: {opacity: 0},
                visible: {opacity: 1, transition: {duration: 0.7}}
            }}
            className="bg-[#0F0F0F] overflow-hidden flex justify-center ">
            <div className="max-w-[941px] py-[40px] px-[20px] grid gap-[32px] sm:gap-[40px] w-full">
                <div className="font-alexandria text-[#999999] leading-[20px] text-center">
                    Satisfied Partners
                </div>
                <div className="flex justify-center w-full">
                    <AnimateCon
                        className="grid grid-cols-6 sm:gap-0 gap-x-[20px] w-[200px] gap-y-[20px] sm:grid-cols-5 items-center justify-center"

                        variants={{
                            hidden: {opacity: 0, width: "100px"},
                            visible: {opacity: 1, width: "100%", transition: {duration: 0.8, delay: 0.7}}
                        }}
                    >
                        {
                            Array.from({length: 5}).map((_, key) => (
                                <div
                                    key={key}
                                    className={`${key > 2 ? " col-span-3 flex justify-center sm:col-span-1" : "col-span-2 sm:col-span-1"}`}
                                >
                                    <Image
                                        src={pic}
                                        alt=""
                                        className="max-w-[97px] sm:max-w-[129px]"
                                    />
                                </div>
                            ))
                        }
                    </AnimateCon>
                </div>
            </div>
        </AnimateCon>
    );
}
