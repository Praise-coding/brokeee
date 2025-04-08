import Image from "next/image";
import pic from "./images/Right (1).png";
export default function LandingPage() {
    return (
        <>
            <div className="relative py-[40px] sm:py-[88px]">
                <div className="absolute z-[0] bg-[rgba(74,90,236,0.16)] blur-[139.4px] w-[600px] h-[600px] left-[-302px] top-0">

                </div>
                <div className="px-[20px] relative z-[20] flex justify-center w-full">
                    <div className=" max-w-[1200px] text-center md:text-left md:flex items-center justify-between w-full">
                        <div className="md:w-[661px]">
                            <div className="flex md:justify-start justify-center">
                                <div className="w-[137px] border-[1px] border-[grey] gap-[8px] h-[37px] backdrop-blur-[20px] rounded-[24px] flex items-center justify-center ">
                                    <div className="w-[9px] h-[9px] rounded-full bg-[#3A9DFF]  ">

                                    </div>
                                    <div className="font-alexandria text-[#3A9DFF] text-[14px] leading-[17px]">
                                        Decentralized
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[16px] sm:mt-[24px] text-[#E5E5E5] font-alexandria text-[40px] font-[500] sm:text-[64px] sm:font-[700] leading-[110%]">
                                Revolutionizing Web3 Finance
                            </div>
                            <div className="mt-[16px] sm:mt-[24px] text-[#999999] sm:text-[20px] max-w-[583px] leading-[20px] sm:leading-[140%] font-alexandria sm:font-inter font-[400]">
                                Secure, scalable, and decentralized solutions for your digital assets experience the future of financial freedom.
                            </div>
                            <div className="mt-[30px] sm:mt-[40px] md:justify-start justify-center grid sm:flex gap-[20px]">
                                <div className="flex justify-center">
                                <button className="w-[140px] sm:w-[151px] sm:text-[18px] leading-[22px] font-alexandria h-[50px] bg-[#3A9DFF] rounded-[40px] flex items-center justify-center">
                                    Get Started
                                </button>
                                </div>
                               
                                <button className="sm:w-[190px] w-[178px]  text-[#E5E5E5] sm:text-[18px] leading-[22px] font-alexandria h-[50px] border-[1px] border-[grey] rounded-[40px] flex items-center justify-center">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 5.64001V19.64L19 12.64L8 5.64001Z" fill="#E5E5E5" />
                                    </svg>
                                    <span className="ml-[6px]">
                                        Watch Video
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="relative px-[30px] sm:px-[0px] md:mt-0 mt-[32px]">
                            <Image src={pic} alt="" className="relative w-full" />

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}