"use client";
import Image from 'next/image';
import pic from "./images/Frame.png";

export default function Partners() {
    return (
        <div className="bg-[#0F0F0F] flex justify-center py-[40px]">
            <div className="max-w-[941px] px-[20px] grid gap-[32px] sm:gap-[40px] w-full">
                <div className="font-alexandria text-[#999999] leading-[20px] text-center">
                    Satisfied Partners
                </div>
                <div className="flex justify-center w-full">
                    <div className="grid grid-cols-6 sm:gap-0 gap-x-[20px] gap-y-[20px] sm:grid-cols-5 max-w-[330px] sm:max-w-full w-full items-center justify-between">
                        {
                            Array.from({ length: 5 }).map((_, key) => (
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
                    </div>
                </div>
            </div>
        </div>
    );
}
