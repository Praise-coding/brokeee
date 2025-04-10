import React from 'react'

function DashboardMenuIcon({isPath}: { isPath: boolean | undefined }) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20 6.52V1.98C20 0.57 19.36 0 17.77 0H13.73C12.14 0 11.5 0.57 11.5 1.98V6.51C11.5 7.93 12.14 8.49 13.73 8.49H17.77C19.36 8.5 20 7.93 20 6.52Z"
                fill={isPath ? "#FFFFFF" : "#9E9E9E"}/>
            <path
                d="M20 17.77V13.73C20 12.14 19.36 11.5 17.77 11.5H13.73C12.14 11.5 11.5 12.14 11.5 13.73V17.77C11.5 19.36 12.14 20 13.73 20H17.77C19.36 20 20 19.36 20 17.77Z"
                fill={isPath ? "#FFFFFF" : "#9E9E9E"}/>
            <path
                d="M8.5 6.52V1.98C8.5 0.57 7.86 0 6.27 0H2.23C0.64 0 0 0.57 0 1.98V6.51C0 7.93 0.64 8.49 2.23 8.49H6.27C7.86 8.5 8.5 7.93 8.5 6.52Z"
                fill={isPath ? "#FFFFFF" : "#9E9E9E"}/>
            <path
                d="M8.5 17.77V13.73C8.5 12.14 7.86 11.5 6.27 11.5H2.23C0.64 11.5 0 12.14 0 13.73V17.77C0 19.36 0.64 20 2.23 20H6.27C7.86 20 8.5 19.36 8.5 17.77Z"
                fill={isPath ? "#FFFFFF" : "#9E9E9E"}/>
        </svg>

    )
}

export default DashboardMenuIcon
