"use client"
import { useRef } from 'react'
import AnimateCon from './AnimateCon'
import FAQs from './FAQs'

function CommonQuestions() {
    const ref = useRef(null)
    return (
        <div className='px-[20px] flex justify-center relative'>
            <AnimateCon refProp={ref} variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } }
            }}>
                <div className='flex justify-center absolute top-0 left-0 w-full'>
                    <div className='bg-[rgba(74,90,236,0.06)] blur-[139.9px] w-[606px] h-[425px] absolute top-[116px]'>

                    </div>
                </div>
            </AnimateCon>

            <div className='py-[40px] sm:py-[80px] max-w-[1200px] w-full'>
                <div>
                    <div className='flex justify-center'>
                        <div className="w-[100px] border-[1px] font-alexandria text-[#3A9DFF] text-[14px] leading-[17px] border-[grey] h-[41px] backdrop-blur-[20px] rounded-[24px] flex items-center justify-center ">
                            Statistics
                        </div>
                    </div>
                    <div className='text-center'>
                        <AnimateCon variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        >
                            <div className='font-alexandria capitalize text-[28px] sm:text-[48px] text-[#E5E5E5] mt-[16px] sm:mt-[20px] leading-[100%]'>
                                the future of blockchain technology
                            </div>
                        </AnimateCon>

                        <AnimateCon variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        >
                            <div className='text-[14px] sm:text-[18px] justify-self-center leading-[17px] sm:leading-[140%] mt-[16px] sm:mt-[20px] text-[#999999] font-alexandria sm:font-inter max-w-[644px]'>
                                Leading the way in blockchain innovation, we are redefining how the world connects, secures, and transacts, bringing a new era of decentralized technology.
                            </div>

                        </AnimateCon>

                    </div>
                </div>
                <div ref={ref} className='mt-[32px] sm:mt-[72px] max-w-[792px] w-full justify-self-center grid gap-[16px] sm:gap-[30px] grid-cols-1'>

                    {Array(5).fill(null).map((_, key) => {
                        return (
                            <FAQs key={key} />
                        )
                    })}

                </div>

            </div>
        </div >
    )
}

export default CommonQuestions