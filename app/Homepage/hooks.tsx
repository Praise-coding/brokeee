import { useEffect, useState } from "react"

export function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined)
    useEffect(() => {
        function setWidth() {
            if (window) {
                setWindowWidth(window.innerWidth)
            }
        }
        setWidth()
        window.addEventListener("resize", setWidth)

        return () => {
            window.removeEventListener("resize", setWidth)
        }
    }, [])

    return windowWidth
}