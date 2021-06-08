import React from 'react'

export default function Loader() {
    return (
        <div>
            <img
              className="w-auto h-image mb-12 mt-12"
              src="/cocktail_two.svg"
              alt="cocktail"
            ></img>
            <p className="text-center text-blueGray-500 mb-12">Loading ...</p>
        </div>
    )
}
