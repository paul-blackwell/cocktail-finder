import React from 'react'

export default function Container({children}) {
    return (
        <div className="bg-white w-96 flex flex-col">
           {children}
        </div>
    )
}
