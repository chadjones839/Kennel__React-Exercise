# Book 4 - The Apprentice

Book 4 is part of the Nashville Software School Web Development course. This book will cover React framwork, and this project will be an ongoing 

## React

### Chapter 1 - React Basics

Install React DevTools
create-react-app
Kennel Single Component
AnimalCard Child Component
Kennel CSS


#### Practice
The Kennel App needs to include locations, owners, and employees. Create static card components for each (`LocationCard.js`, `OwnerCard.js` and `EmployeeCard.js`). This is another example of the Single Responsibility Principle. We should have a component whose sole responsibility is to render the location, or owner, or employee information. Follow the same directory structure and include the components in the JSX for **`Kennel`**.


### Chapter 2 - React Routing

install react-router-dom
Home Component
NavBar Component
NavBar CSS
ApplicationViews
Updated Kennel Component

#### Practice
1. Create links in your navigation bar for `/locations`, `/employees`, and `/owners` paths.
1. Have each route render the respective component.


### Chapter 3 - React Loading Data

Populate API
Data Query Module
API Calls Module
useEffect()
useState()

#### Practice
1. Add some example data for employees, locations and owners to `api/kennel.json`.
1. Create modules to query the database for employees, locations, and owners from your API.
1. Create list components to handle calling the database modules.
1. Display a static *designed* card for each section. We will get to displaying the correct data next.