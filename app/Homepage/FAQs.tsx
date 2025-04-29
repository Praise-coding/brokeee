"use client"
import {motion, useAnimation} from 'framer-motion'

import React, {useRef, useState} from 'react'
import AnimateCon from './AnimateCon';

function FAQs({question, answer}: { question: string, answer: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [state, setState] = useState(false)
    const control = useAnimation()

    async function closeOpen() {
        if (!state) {
            const scrollHeight = ref.current?.scrollHeight;
            if (scrollHeight) {
                await control.start({
                    height: `${scrollHeight}px`,
                    border: "1px solid #2E2E2E",
                    transition: {duration: 0.2, ease: "easeInOut"},
                });
                setState(true);
                return;
            }
        }

        await control.start({
            height: "0px",
            border: "none",
            transition: {duration: 0.2, ease: "easeInOut"},
        });
        setState(false);
    }

    return (
        <AnimateCon variants={{
            hidden: {y: 50, opacity: 0},
            visible: {y: 0, opacity: 1, transition: {duration: 0.5}},
        }}>
            <div onClick={closeOpen}
                 className=' relative z-[30] border cursor-pointer flex items-center justify-between border-[#2E2E2E] py-[16px] px-[20px]'>
                <div className='font-alexandria text-[#E5E5E5]'>
                    {question}
                </div>
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3.3335V16.6668" stroke="#E5E5E5" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M3.3335 10H16.6668" stroke="#E5E5E5" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <motion.div initial={{height: "0px"}} animate={control}
                        className={`overflow-hidden transition-all font-alexandria text-[#E5E5E5]`}>
                <div ref={ref} className='px-[20px] py-[16px]'>
                    {answer}
                </div>
            </motion.div>
        </AnimateCon>
    )
}

export default FAQs