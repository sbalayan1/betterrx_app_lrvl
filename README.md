Create an application that searches the npi registry and lists the results.
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

Deliverables:  Link to git repo.  Please also include a video demonstrating functionality if Laravel is not used.

