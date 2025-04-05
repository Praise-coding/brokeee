import React from "react";

function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <div className={"w-full fixed top-0 h-full z-[-1]"}
                 style={{background: "linear-gradient(to left, #31353F 50%, #1B2028 50%)"}}>

            </div>

            <main className={"h-full "}>
                {children}
            </main>
        </>
    )
}

export default Layout