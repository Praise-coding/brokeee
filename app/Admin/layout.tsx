import React from 'react'
import SecondLayout from "@/app/Admin/SecondLayout";
import RedirectUnAuthenticated from "./RedirectUnAuthenticated";

function Layout({children}: { children: React.ReactNode }) {

    return (
        <>
            <>
                <RedirectUnAuthenticated>
                    <SecondLayout>
                        {children}
                    </SecondLayout>
                </RedirectUnAuthenticated>
            </>
        </>
    )
}

export default Layout
