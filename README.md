<h1>Create an application that searches the npi registry and lists the results.</h1>
    <h2>User Interface Requirements</h2>
        <ol>
            <li>user should be able to search by first name, last name, npi number, taxonomy description, city, state and zip.</li>
            <li>50 results or less should be displayed by default.</li>
            <li>If more than 50 results are available, a mechanism to load more results or paging should be implemented.</li>
            <li>The application will not be required to display more than 1200 results from any given search.</li>
            <li>If a user clicks on a record, more information about the provider should be displayed.</li>
            <li>Additional information can be formatted manually or the following url can be leveraged https://npiregistry.cms.hhs.gov/provider-view/{npi}.</li>
            <li>A user should be able to return to the search results easily after viewing a provider’s details, thus a modal or a back button should be implemented.</li>
        </ol>
    <h2>Technical Requirements</h2>
        <ol>
            <li>Bonus for Laravel backend, but can use whatever language you are comfortable with. </li>
            <li>Must use a Javascript framework for the frontend (Angular, React, VueJs,  Livewire/Alpine). </li>
            <li>API requests should be sent from the backend. </li>
            <li>API Docs: https://npiregistry.cms.hhs.gov/api-page </li>
        </ol>
    <h2>Deliverables</h2>
        <ol>
            <li>Link to git repo.  Please also include a video demonstrating functionality if Laravel is not used.</li>
        </ol>

<h2> Backend - Laravel (scaffolded with Breeze) </h2>
    <h3>Routes</h3>
        <ol>
            <li>GET / => renders the Search component.</li>
            <li>POST /providers ProvidersController#store => used as the initial render for the ProviderList. Client makes a request to this endpoint with a json payload of search values. </li>
            <li>GET /providers ProvidersController#index => used for rerenders of the ProviderList page.</li>
            <li>GET /provider/{number} ProvidersController#show => renders an external link of the selected Providers' details.</li>
        </ol>
    <h3>Controllers</h3>
        <h4>ProvidersController</h4>
            <ol>
                <li>#index => accesses json payload stored in the session obj and renders the ProvidersList.</li>
                <li>#show => receives an NPI number and uses it to access an external link.</li>
                <li>#store => receives a json payload and uses it to make a GET request to the NPPES API. Receives a JSON response, stores the payload in the session obj and returns the ProvidersList. </li>
            </ol>
    
<h2>Frontend - React w/ Inertia </h2>
    <h3>Pages</h3>
        <ol>
            <li>The Search page is the landing page that displays the RequestForm.</li>
            <li>The ProvidersList page is the list of providers page displayed after a successful POST request or retrieval of json data witin the session obj.</li>
        </ol>
    <h3>Components </h3>
        <ol>
            <li>RequestForm component is the Form displayed on the landing page.</li>
            <li>ProviderCard is the individual Provider Card that is rendered for each provider in the providers prop.</li>
        </ol>
    <h3>Features</h3>
        <ol>
            <li>User is able to search for NPI providers using first name, last name, taxonomy, npi number, city, state, zip, or a combination of search values.</li>
            <li>50 results are displayed by default and pagination is implemented to let the user navigate through the results if the results are larger.</li>
            <li>The user is able to select a provider by clicking on a provider card and is redirected to https://npiregistry.cms.hhs.gov/provider-view/{npi} to view more details about the provider.</li>
            <li>The json payload is stored within the session object so the User is able to navigate back to the /providers endpoint without needing to resubmit a POST request.</li>
            <li>API requests are sent from the backend and React components are rendered depending on the request method and endpoint.</li>
            <li>Inputs in the form are stored in Inertia's history state and are displayed when navigating back to the Search page.</li>
            <li>No results are displayed if no matches are found.</li>
            <li>User is not able to submit an empty form and errors are logged to the console.</li>
            <li>Submit button gets disabled so resubmissions are prevented.</li>
        </ol>
<h2>How to run the application locally</h2>
    <ol>
        <li>Start the server by running "php artisan serve"</li>
        <li>Start the client by running "npm run dev"</li>
        <li>The application lives at http://127.0.0.1:8000. All endpoints work from this url.</li>
        <li>Input something in the form and search for NPI providers!!</li>
    </ol>
<h2>Other Notes </h2>
