import React, { useCallback } from 'react'
import { useForm } from '@inertiajs/react'


export default function RequestForm({}) {

    //RequestProviders is a unique key that causes form data and errors to automatically be remembered. This data is saved to the history state and is restored on history navigation
    const {data, setData, post, reset, processing}  = useForm('RequestProviders', {
        first_name: '',
        last_name: '',
        taxonomy_description: '',
        number: '',
        city: '',
        state: '',
        postal_code: '',
    })


    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        //the below iterates through each value within the form and checks to ensure at least one field is filled. 
        let isFilled = false 
        Object.values(data).forEach(val => {
            //at each iteration, if any of the values lengths are greater than 0, update isFilled to true and break out of the loop
            if (val.length > 0) {
                isFilled = true
                return
            }
        })

        //makes a POST request to the /providers endpoint and resets the form if at least one field is filled. Otherwise, print an error.
        if (isFilled) {
            post('/providers', {
                onSuccess: () => {
                    reset()
                }
            })    
        } else {
            console.error('Form is empty')
        }

    }, [data])

    return (
        <div className="text-2xl">
            <form className="flex flex-col justify-evenly" onSubmit={handleSubmit}>
                <input className="mb-2 p-2 rounded-md hover:scale-110 duration-200" value={data.first_name} onChange={(e) => setData('first_name', e.target.value)} placeholder="First Name..."/>
                <input className="mb-2 p-2 rounded-md hover:scale-110 duration-200" value={data.last_name} onChange={(e) => setData('last_name', e.target.value)} placeholder="Last Name..."/>
                <input className="mb-2 p-2 rounded-md hover:scale-110 duration-200" value={data.taxonomy_description} onChange={(e) => setData('taxonomy_description', e.target.value)} placeholder="Taxonomy..."/>
                <input className="mb-2 p-2 rounded-md hover:scale-110 duration-200" value={data.number} onChange={(e) => setData('number', e.target.value)} placeholder="NIP Number..."/>
                <input className="mb-2 p-2 rounded-md hover:scale-110 duration-200" value={data.city} onChange={(e) => setData('city', e.target.value)} placeholder="City..."/>
                <input className="mb-2 p-2 rounded-md hover:scale-110 duration-200" value={data.state} onChange={(e) => setData('state', e.target.value)} placeholder="State..."/>
                <input className="mb-2 p-2 rounded-md hover:scale-110 duration-200" value={data.postal_code} onChange={(e) => setData('postal_code', e.target.value)} placeholder="Postal Code..."/>
                {/* disabled prevents resubmits while a submit is processing */}
                <button className="h-12 rounded-md bg-black text-white p-2 hover:scale-110 duration-200 cursor pointer" type="submit" disabled={processing}>
                    Submit
                </button>
            </form>
        </div>
    )
}