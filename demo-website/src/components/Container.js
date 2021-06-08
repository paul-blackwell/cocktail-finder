import React from 'react'

export default function Container({children}) {
    return (
        <div className="bg-white flex flex-col items-center p-6 w-container rounded-lg shadow-xl">
           {children}
        </div>
    )
}
