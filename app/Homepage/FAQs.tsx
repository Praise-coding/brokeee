"use client"
import { motion, useAnimation } from 'framer-motion'

import React, { useRef, useState } from 'react'
import AnimateCon from './AnimateCon';

function FAQs() {
    const ref = useRef<HTMLDivElement>(null);
    const [state, setState] = useState(false)
    const control = useAnimation()
    async function closeOpen() {
        console.log(48949)
        if (!state) {
            const scrollHeight = ref.current?.scrollHeight;
            console.log(scrollHeight)
            if (scrollHeight) {
                await control.start({
                    height: `${scrollHeight}px`,
                    border: "1px solid #2E2E2E",
                    transition: { duration: 0.2, ease: "easeInOut" },
                });
                setState(true);
                return;
            }
        }

        await control.start({
            height: "0px",
            border: "none",
            transition: { duration: 0.2, ease: "easeInOut" },
        });
        setState(false);
    }

    return (
        <AnimateCon variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 , transition:{duration: 0.5}},
        }} >
            <div onClick={closeOpen} className=' relative z-[30] border cursor-pointer flex items-center justify-between border-[#2E2E2E] py-[16px] px-[20px]'>
                <div className='font-alexandria text-[#E5E5E5]'>
                    What is NexoFi, and how does it work?
                </div>
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3.3335V16.6668" stroke="#E5E5E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.3335 10H16.6668" stroke="#E5E5E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <motion.div initial={{ height: "0px" }} animate={control} className={`overflow-hidden transition-all font-alexandria text-[#E5E5E5]`}>
                <div ref={ref} className='px-[20px] py-[16px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem deserunt tempore iste perferendis. Dolor itaque quae voluptates distinctio quod sunt, sequi aliquid facilis laboriosam nam omnis, eaque numquam molestiae!
                </div>
            </motion.div>
        </AnimateCon>
    )
}

export default FAQs