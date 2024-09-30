# Road map of a out project 

## First we find out the what extension are use to build this project 

###  Go-through with the documentations 
- @reduxjs/toolkit
- react-redux
- react-router-dom
- appwrite
- @tinymce/tinymce-react
- html-react-parser
- react-hook-form

### Now declare the .ENV variable (enviroment variable)
- env variable always in root folder of root directry
- How to define the enviroment variable
 ``` javascript
//    ye hota h declare krne ka trika but hum vite use kr rahai h to 
 VITE_APPWRITE_URL = "test environment"
//  this is use to process the env varibable for more update go through documentaion
 console.log(import.meta.env.VITE_APPWRITE_URL)
 <!-- REACT_APP_APPWRITE_URL = "test environment" -->
 ```
 - kon kon se variable lagenge hme is project ke liye .env file mai
 ``` javascript
VITE_APPWRITE_PROJECT_ID = "" //  project ID ke liye
VITE_APPWRITE_DATABASE_ID = "" // Database Id ke liye
VITE_APPWRITE_COLLECTION = "" // 
VITE_APPWRITE_BUCKET_ID = " " // Image upload krne ke liye
 ```

 ### Next step is deal with AppWriter
 - first create projects
 - after create Database
 - after create Attribute 
 - after create index



 