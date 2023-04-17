import React, { useCallback } from 'react'
import { router } from '@inertiajs/react'

export default function ProviderCard({ provider }) {
    const {number} = provider
    const {first_name, last_name} = provider.basic
    const {address_1, city, state, postal_code} = provider.addresses[0]
    const {desc} = provider.taxonomies[0]
    const keys = ["Name", "NPI", "Taxonomy", "Address", "City", "State", "Zip"]
    const details = [[first_name, last_name], number, desc, address_1, city, state, postal_code]

    //makes a GET request to the /provider/${npi_number} endpoint within the ProvidersController which in turn, makes a an external request to https://npiregistry.cms.hhs.gov/provider-view/{npi_number}
    const showProvider = useCallback(() => {
        router.get(`/provider/${number}`, {number: number})
    }, [number])

    return (
        <div className="bg-white rounded-md shadow-xl shadow-black h-52 w-52 p-2 m-2 text-xs hover:scale-110 duration-200 cursor-pointer">
            {details.map((obj, idx) => {
                return (
                    <p key={idx+1} className="p-1" onClick={showProvider}>
                        {keys[idx]}: {keys[idx] === "Zip" ? obj.slice(0,5) : obj}
                    </p>
                )
            })}
        </div>
    )
}