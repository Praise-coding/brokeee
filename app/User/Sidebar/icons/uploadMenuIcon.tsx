import React from 'react';

function UploadMenuIcon({isPath}: { isPath: boolean | undefined }) {
    return (

        <svg width="20" height="21" viewBox="0 0 48 48" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path strokeWidth={3}
                  d="M26 4H12C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8V40C8 41.0609 8.42143 42.0783 9.17157 42.8284C9.92172 43.5786 10.9391 44 12 44H36C37.0609 44 38.0783 43.5786 38.8284 42.8284C39.5786 42.0783 40 41.0609 40 40V18L26 4Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke={isPath ? "#FFFFFF" : "#9E9E9E"}

            />
            <path d="M26 4V18H40"
                  stroke={isPath ? "#FFFFFF" : "#9E9E9E"}
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>

    );
}

export default UploadMenuIcon;