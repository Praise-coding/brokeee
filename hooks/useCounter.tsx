import {RefObject, useEffect, useRef, useState} from "react";
import {useInView} from "framer-motion";

export function useCounter(target: number, ref: RefObject<null>, duration: number = 1000) {
    const [count, setCount] = useState(0);
    const start = useRef<number | null>(null);

    const inView = useInView(ref)
    useEffect(() => {
        if (inView) {
            let animationFrameId: number;
            const step = (timestamp: number) => {
                if (!start.current) start.current = timestamp;

                const elapsed = timestamp - start.current;
                const progress = Math.min(elapsed / duration, 1); // value between 0 and 1

                const eased = easeOutCubic(progress); // optional easing
                setCount(Math.floor(eased * target));

                if (progress < 1) {
                    animationFrameId = requestAnimationFrame(step);
                } else {
                    setCount(target); // Final value
                }
            };

            animationFrameId = requestAnimationFrame(step);

            return () => cancelAnimationFrame(animationFrameId); // Clean up
        }

    }, [target, inView, duration]);

    return count;
}

// Optional: smooth easing function
function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3);
}
