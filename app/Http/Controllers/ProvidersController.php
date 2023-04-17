<?php

namespace App\Http\Controllers;

use App\Models\Providers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;


class ProvidersController extends Controller
{
   
    
    //POST /providers: used as the initial render for the ProviderList. Client makes a request to this endpoint with a json payload of search values. 
    public function store(Request $request)
    {
        $response = Http::get('https://npiregistry.cms.hhs.gov/api/?', [
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'taxonomy_description' => $request->taxonomy_description,
            'npi_number' => $request->number,
            'city' => $request->city,
            'state' => $request->state,
            'postal_code' => $request->postal_code,
            'limit'=> 1199, //limit is 1200. most requests result in 200 providers max
            'version'=> 2.1,
            'pretty'=> "on"
        ]);

        $jsonData = $response->json();
        $providersData = [];

        //if we find matching Providers, we save our payload in the session obj and update providersData, otherwise send an empty array to show that no providers were found
        if (array_key_exists('results', $jsonData)) {
            session(['json' => $jsonData['results']]); //stores the json data in the global session function at key json
            
            $providersData = $jsonData["results"];
        };

        return Inertia::render('Providers/ProvidersList', [
            'providers' => $providersData
        ]);


    }


    //GET /providers: used for rerenders of the ProviderList page
    public function index(Request $request)
    {
        if (session('json')) {
            return Inertia::render('Providers/ProvidersList', [
                'providers' => session('json') //accesses the json stored in the session and passes it as a prop called providers
            ]);
        }
    }


    //GET /providers/{number}: renders an external link of the selected Providers' details
    public function show(Request $request)
    { 
        return Inertia::location("https://npiregistry.cms.hhs.gov/provider-view/{$request->number}"); //renders the providers details
    }
};
