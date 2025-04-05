"use client"
import React, {useEffect} from 'react';

function ChatBot({children}: { children: React.ReactNode }) {
    useEffect(() => {
        const script = document.createElement("script")
        script.src = "//code.jivosite.com/widget/k6s8HVutrl"
        script.async = true;
        document.body.appendChild(script);
    })


    return (
        <>
            {children}
        </>
    );
}

export default ChatBot;