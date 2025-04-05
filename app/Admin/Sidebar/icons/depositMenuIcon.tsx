import React from 'react'

function DepositMenuIcon({isPath}: { isPath: boolean | undefined }) {
    return (
        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15 14.7L18 11.7M18 11.7L21 14.7M18 11.7V17.7M21 6.69995H1M21 8.69995V4.89995C21 3.77985 21 3.2198 20.782 2.79197C20.5903 2.41565 20.2843 2.10969 19.908 1.91794C19.4802 1.69995 18.9201 1.69995 17.8 1.69995H4.2C3.0799 1.69995 2.51984 1.69995 2.09202 1.91794C1.7157 2.10968 1.40973 2.41565 1.21799 2.79197C1 3.21979 1 3.77985 1 4.89995V12.4999C1 13.6201 1 14.1801 1.21799 14.6079C1.40973 14.9843 1.71569 15.2902 2.09202 15.482C2.51984 15.6999 3.0799 15.6999 4.2 15.6999H11"
                stroke={isPath ? "#FFFFFF" : "#9E9E9E"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}

export default DepositMenuIcon
