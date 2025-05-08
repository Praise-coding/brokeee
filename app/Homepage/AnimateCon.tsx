"use client"
import {motion, MotionProps, useInView} from 'framer-motion'
import React, {useRef} from 'react'

type AnimateProps = MotionProps & {
    children: React.ReactNode,
    className?: string,
    refProp?: React.RefObject<null | HTMLDivElement>
}
const AnimateCon = ({children, className, refProp, ...motionProps}: AnimateProps) => {
    const ref = useRef(null)
    const inView = useInView(refProp ? refProp : ref, {amount: "some"})

    return (

        <motion.div
            ref={refProp ? refProp : ref}
            className={className}
            {...motionProps}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            {...motionProps}>
            {children}
        </motion.div>

    );
};

export default AnimateCon;