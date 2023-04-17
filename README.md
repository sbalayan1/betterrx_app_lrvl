<h1>Create an application that searches the npi registry and lists the results.</h1>
    <h2>User Interface Requirements</h2>
        <ol>
            <li>user should be able to search by first name, last name, npi number, taxonomy description, city, state and zip.</li>
            <li>50 results or less should be displayed by default.</li>
            <li>If more than 50 results are available, a mechanism to load more results or paging should be implemented.</li>
            <li>The application will not be required to display more than 1200 results from any given search.</li>
            <li>If a user clicks on a record, more information about the provider should be displayed.</li>
            <li>Additional information can be formatted manually or the following url can be leveraged https://npiregistry.cms.hhs.gov/provider-view/{npi}</li>
            <li>A user should be able to return to the search results easily after viewing a provider’s details, thus a modal or a back button should be implemented.</li>
        </ol>
    <h2>Technical Requirements</h2>
        <ol>
            <li>Bonus for Laravel backend, but can use whatever language you are comfortable with. </li>
            <li>Must use a Javascript framework for the frontend (Angular, React, VueJs,  Livewire/Alpine) </li>
            <li>API requests should be sent from the backend </li>
            <li>API Docs: https://npiregistry.cms.hhs.gov/api-page </li>
        </ol>
    <h2>Deliverables</h2>
        <ol>
            <li>Link to git repo.  Please also include a video demonstrating functionality if Laravel is not used.</li>
        </ol>

<h2> Backend - Laravel </h2>
    <h3>Routes</h3>
        <ol>
            <li>GET / => renders the Search component</li>
            <li>POST /providers ProvidersController#store => used as the initial render for the ProviderList. Client makes a request to this endpoint with a json payload of search values. </li>
            <li>GET /providers ProvidersController#index => used for rerenders of the ProviderList page </li>
            <li>GET /provider/{number} ProvidersController#show => renders an external link of the selected Providers' details </li>
        </ol>
    <h3>Controllers</h3>
        <h4>ProvidersController</h4>
            <ol>
                <li>#index => accesses json payload stored in the session obj and renders the ProvidersList</li>
                <li>#show => receives an NPI number and uses it to access an external link.</li>
                <li>#store => receives a json payload and uses it to make a GET request to the NPPES API. Receives a JSON response, stores the payload in the session obj and returns the ProvidersList. </li>
            </ol>
    
<h2>Frontend - React w/ Inertia </h2>
    <h3>Pages</h3>
        <ol>
            <li>Search: landing page that displays the search form and submit button</li>
            <li>ProvidersList: List of providers page displayed after a successful POST request or retrieval of json data witin the session obj.</li>
        </ol>
    <h3>Components </h3>
        <ol>
            <li>RequestForm: Form displayed on the landing page</li>
            <li>ProviderCard: Individual Provider Card that is rendered when displaying the ProvidersList.</li>
        </ol>
    <h3>Features </h3>
    <h3>Other Notes </h3>
