"use client"
import React, {useEffect} from 'react';
import {CurrentCryptoPriceCards} from "@/app/components/ui/CurrentCryptoPriceCards";
import {motion, useAnimation} from "framer-motion"
const PortfolioAnimation = ({fetchCryps}: {fetchCryps: Record<string, Record<string, number>>}) => {
    const controls = useAnimation()
    useEffect(() => {
        async function anime(){
            await controls.start({height: "fit-content"})
            await new Promise(resolve => setTimeout(resolve, 2000))
            await controls.start({opacity: "100%"})
        }
        anime().then()
    }, [controls]);
    return (
        <motion.div initial={{height:
            "0px", opacity:
        "0%"}} animate={controls} className={"grid grid-cols-1 gap-[24px] overflow-hidden sm:mt-[24px]"}>
            {Object.entries(fetchCryps).filter((data) => {
                if (!["bitcoin", "tether", "ethereum"].includes(data[0])) {
                    return data
                }
            }).map(([title, price], key) => {
                const cryptoPrice = price as Record<string, number>
                return (
                    <CurrentCryptoPriceCards price={cryptoPrice?.usd} title={title} key={key}/>
                )
            })}
        </motion.div>
    );
};

export default PortfolioAnimation;