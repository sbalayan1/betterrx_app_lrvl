****Create an application that searches the npi registry and lists the results.
- User Interface Requirements
    - user should be able to search by first name, last name, npi number, taxonomy description, city, state and zip.
    - 50 results or less should be displayed by default.
    - If more than 50 results are available, a mechanism to load more results or paging should be implemented.
    - The application will not be required to display more than 1200 results from any given search.
    - If a user clicks on a record, more information about the provider should be displayed.
    - Additional information can be formatted manually or the following url can be leveraged https://npiregistry.cms.hhs.gov/provider-view/{npi}
    - A user should be able to return to the search results easily after viewing a provider’s details, thus a modal or a back button should be implemented.
    
- Technical Requirements
    - Bonus for Laravel backend, but can use whatever language you are comfortable with. 
    - Must use a Javascript framework for the frontend (Angular, React, VueJs,  Livewire/Alpine)
    - API requests should be sent from the backend
    - API Docs: https://npiregistry.cms.hhs.gov/api-page

- Deliverables:  Link to git repo.  Please also include a video demonstrating functionality if Laravel is not used.

- Backend - Laravel
    - Routes
        - GET / => renders the Search component
        - POST /providers ProvidersController#store => used as the initial render for the ProviderList. Client makes a request to this endpoint with a json payload of search values. 
        - GET /providers ProvidersController#index => used for rerenders of the ProviderList page
        - GET /provider/{number} ProvidersController#show => renders an external link of the selected Providers' details

    - Controllers
        - ProvidersController
            - #index => accesses json payload stored in the session obj and renders the ProvidersList
            - #show => receives an NPI number and uses it to access an external link
            - #store => receives a json payload and uses it to make a GET request to the NPPES API. Receives a JSON response, stores the payload in the session obj and returns the ProvidersList
    
- Frontend - React w/ Inertia
    - Pages
        - Search: landing page that displays the search form and submit button
        - ProvidersList: List of providers page displayed after a successful POST request or retrieval of json data witin the session obj. 
        
    - Components
        - RequestForm: Form displayed on the landing page
        - ProviderCard: Individual Provider Card that is rendered when displaying the ProvidersList. 

    - Features


    - Other Notes
