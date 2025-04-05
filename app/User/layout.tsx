import React from 'react'
import SecondLayout from "./SecondLayout"
import Protector from "@/app/User/Protector";
import RedirectUnAuthenticated from "@/app/User/RedirectUnAuthenticated";

function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <RedirectUnAuthenticated>
                <Protector>
                    <SecondLayout>

                        {children}

                    </SecondLayout>
                </Protector>
            </RedirectUnAuthenticated>
        </>
    )
}

export default Layout
