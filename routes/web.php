<?php

use App\Http\Controllers\ChirpController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProvidersController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//renders the Search component for get requests to "/". Search is the default landing page.
Route::get('/', function () {
    return Inertia::render('Search', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::post('/providers', [ProvidersController::class, 'store']); //POST /providers ProvidersController#store => used as the initial render for the ProviderList. Client makes a request to this endpoint with a json payload of search values. 
Route::get('/providers', [ProvidersController::class, 'index']); //GET ProvidersController#index => used for rerenders of the ProviderList page
Route::get('/provider/{number}', [ProvidersController::class, 'show']); //Get ProvidersController#show => renders an external link for the Providers' details



require __DIR__.'/auth.php';
