'use client';

import {usePathname} from 'next/navigation';
import {AnimatePresence, motion} from 'framer-motion';
import {useEffect, useState} from 'react';

interface PageTransitionProps {
    children: React.ReactNode;
}

export default function PageTransition({children}: PageTransitionProps) {
    const pathname = usePathname();
    const [displayChildren, setDisplayChildren] = useState(children);

    useEffect(() => {

        const timeout = setTimeout(() => {
            setDisplayChildren(children);
        }, 300); // matches exit duration
        return () => clearTimeout(timeout);
    }, [pathname, children]);

    return (
        <div className={"bg-[#31353F] h-screen"}>
            <AnimatePresence mode="wait">

                <motion.div
                    key={pathname}
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -10}}
                    transition={{duration: 0.3}}
                >
                    {displayChildren}
                </motion.div>
            </AnimatePresence>
        </div>

    );
}
