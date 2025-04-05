import React from 'react';

const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <main className={"mx-[20px]"}>
            {children}
        </main>
    );
};

export default Layout;