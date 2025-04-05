import React from 'react'

function WithdrawMenuIcon({isPath}: { isPath: boolean | undefined }) {
    return (
        <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 13.9L18.5 16.9M18.5
            16.9L21.5 13.9M18.5 16.9V10.9M21.5 5.90002H1.5M21.5 7.90002V4.10003C21.5 2.97992 21.5 2.41987 21.282 1.99205C21.0903 1.61572 20.7843 1.30976 20.408 1.11801C19.9802 0.900024 19.4201 0.900024 18.3 0.900024H4.7C3.5799 0.900024 3.01984 0.900024 2.59202 1.11801C2.2157 1.30976 1.90973 1.61572 1.71799 1.99204C1.5 2.41987 1.5 2.97992 1.5 4.10002V11.7C1.5 12.8201 1.5 13.3802 1.71799 13.808C1.90973 14.1843 2.21569 14.4903 2.59202 14.682C3.01984 14.9 3.5799 14.9 4.7 14.9H11.5"
                  stroke={isPath ? "#FFFFFF" : "#9E9E9E"} strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>

    )
}

export default WithdrawMenuIcon



