import React, { useState, useCallback, useMemo } from 'react'
import ProviderCard from '@/Components/ProviderCard'
import { router } from '@inertiajs/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function ProvidersList({ providers }) {
    const [pageNumber, setPageNumber] = useState(1)
    const pageCount = providers.length > 50 ? Math.ceil(providers.length / 50) : 1 //determines the number of pages necessary. If there are less than 50 results, display only 1 page. 
    const bounds = [(pageNumber - 1) * 50, pageNumber * 50] //calculates the bounds of our slice method below. Ex. pageNumber = 2, bound=[50, 100]
    const providersToDisplay = useMemo(() => providers.slice(bounds[0], bounds[1]).map((provider, idx) => <ProviderCard key={idx+1} provider={provider}/>), [providers, bounds])

    //updates the page number state based on the direction and current value of the page number state. 
    //When the direction is left, we reduce pageNumber until it is 1. If it is equal to 1, set pageNumber to pageCount.
    //When the direction is right, increase pageNumber until it is equal to the pageCount. If it is equal to the pageCount, set pageNumber to page 1
    const handleNavigate = useCallback((e) => {
        let val;
        if (e.target.id === "left") {
            val = pageNumber > 1 ? pageNumber - 1 : pageCount
        } else {
            val = pageNumber < pageCount ? pageNumber + 1 : 1
        }

        setPageNumber(val)
    }, [pageNumber, pageCount])
   
    return (
        <div className="w-screen h-full p-4 text-xl font-bold">
            <div className="w-full flex justify-center">
                <h1 className="ml-2 text-7xl font-extrabold hover:scale-110 duration-200" onClick={() => router.get('/')}>
                    Better Rx NPI Providers
                </h1>
            </div>
            <div className="flex justify-center">
                <div className="w-2/5 flex items-center justify-evenly p-2">
                    <button id="left" className={`${pageCount > 1 ? 'rounded-md bg-blue-500 p-3 hover:scale-110 duration-200' : 'hidden'}`} type="click" onClick={handleNavigate}>
                        <FaArrowLeft />
                    </button>
                    <h4 className="ml-4">
                        {`Displaying providers ${providers.length > 0 ? bounds[0] + 1 : 0} to ${(bounds[0]) + providersToDisplay.length} of ${providers.length}`}
                    </h4>
                    <button id="right" className={`${pageCount > 1 ? 'rounded-md bg-blue-500 p-3 hover:scale-110 duration-200' : 'hidden'}`} type="click" onClick={handleNavigate}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <div
                // the below makes the grid of providers responsive to different screen sizes
                className={`
                    w-full grid gap
                    md:grid-cols-4
                    lg:grid-cols-5
                    xl:grid-cols-6
                    2xl:grid-cols-8
                `}
            >
                {providersToDisplay}
            </div>
        </div>
    )
}