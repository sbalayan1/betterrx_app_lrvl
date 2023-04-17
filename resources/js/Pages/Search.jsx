import React from 'react'
import { Head } from '@inertiajs/react';
import RequestForm from '@/Components/RequestForm'

export default function Welcome({ laravelVersion, phpVersion }) {
    return (
        <div className="max-w-screen h-screen flex flex-col items-center justify-center border-4 bg-blue-400">
            <Head title="Search" />
            <div className="my-4">
                <h1 className="text-7xl font-extrabold">
                    Better Rx NPI Providers
                </h1>
            </div>
                <RequestForm />
                Laravel: {laravelVersion} PHP: {phpVersion}
        </div>
    );
}
