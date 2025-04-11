"use client"
import React, { useEffect } from 'react'
import BalanceCards from "@/app/User/Deposit/DepositWalletAddressAndBalanceCards";
import { motion, useAnimation } from "framer-motion"

function Balance({ userBalance }: { userBalance: [string, number][] }) {
    const controls = useAnimation();

    useEffect(() => {
        async function sequence() {
            await controls.start({ width: '100%', transition: { duration: 1.1 } });
            await new Promise(resolve => setTimeout(resolve, 500));
            await controls.start({ height: 'fit-content', transition: { duration:  0.5} });
        }

        sequence().then()
    }, [controls]);

    return (
        <motion.div
            initial={{ width: "200px", height: "87px" }}
            animate={controls}
            className="grid relative overflow-hidden md:grid-cols-3 grid-cols-2 mt-[20px] sm:mt-[14px] gap-[10px] sm:gap-[15px]"

        >
            {userBalance?.map((data, key) => (
                <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + key * 0.1 }}
                >
                    <BalanceCards
                        cardName={data[0]}
                        balanceOrWalletAddress={isNaN(data[1]) ? "0" : data[1]?.toString()}
                    />
                </motion.div>
            ))}
        </motion.div>
    );
}

export default Balance;
