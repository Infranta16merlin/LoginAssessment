# React 

#### Login Page and Github Repos
   
   --- Created Login Page with useAuth Authentication
   --- Used Routing for navigation purposes
   --- Used custom hooks for handling data
   --- Used github api for connection with database
   --- Fetched data from the user and display the User data and Followers datafrom the api
   --- Created Toggle button to change from light mode to dark mode and vice versa


### App.js and index.js 
  
   --- Created index.js where the root starts and for useAUth0 we need to pass domainId and clientId for user Authorization
   --- In App.js added Rouers for Navigation of components

### Routers and Private Route
  
  --- Added Routers in App.js and used for Navigation Purposes.
  --- Added Browser Router, Routes and Route for navigation purpose from react-router-dom@6
  --- Installed router from npm i react-router-dom

### Componets and Pages
   
   --- Created different component and pages to make the component to work easily
   --- The componets are
            Login
            Dashboard
            AuthWrapper 
            Error
    --- The Pages are
            NavBar
             User
             Repos
             Followers

### Private Router
    
    --- Private routers are used to protect the component
    --- Used here to protect the routing page to return to login if there is any unauthorized user


### AuthWrapper
 
    --- AuthWrapper are used to create login and logout pages
    --- Used here for authentication and here I used with Google login and sign in and login option
    --- If there is authorized user and which returns true then it goes to Dahboard Page
    --- Added @auth0/auth0-react and created domain Id and clientId and passed down from index to AuthWrapper class
    --- Based on the authentication the routers works
    --- If the authwrapper return true it goes to Dashboard Page or else it again return to Login Page


### Dasboard

    --- Dashboard component contains of NavBar, User, Repos and Followers component
    --- This component takes the data from context.js where it fetchs the data from api and mockuser data
    --- If the login page is correct then this page gets loaded


### NavBar
 
    --- NavBar component contains of the user name, user image and logout option
    --- This page loads according to the auth component
    --- Log out page get loaded from the auth component


### User
   
   --- User component provides the information from the mockUser data
   --- This componet shows the number of user and user details

### Followers
  
   --- Follower component shows the follwers following the account
   --- This data is taken from dummy user from githb

### Repos
   
   --- This shows the number of repos, followers, users, gists 
   --- This provides extra data about the user

### Error
   --- This compont is loaded when the url goes wrong
   --- This provides 404 error where this shows the error page


### context.js
   
   --- This page shows the useContext hook
   --- This takes the data from the user in a single data and fetches the data
   --- Here I have used custom hooks for fetching the data


### Toggle between light and dark theme
  
  --- Here I have added the toggle option in App.js where iit is a stating page of App
  --- I have aded dark theme and light theme based on className
  --- Here I have added the localstorage to fetch the initial thme as light theme


### For Styling

   --- Here I have added styling based on the Wrapper class by using Styled Component class



---------------------------------------------------------------------------------------------------------------


Here I have attached the UI Screens in UI folder

