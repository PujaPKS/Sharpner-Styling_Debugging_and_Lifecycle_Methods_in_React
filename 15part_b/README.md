Custom Context Provider Component ---> usage and explanation

Custom Context Provider component uses we will see when we will work on some projects in company basically.

Here we will use Custom Context Provider Component in "App.js" file.

We will have a place where we have authorization logic which has state management authorization as well as context for the authorization. And for doing this REact help us to create centre place with the help of "Custom Context Provider"


We will create our own provider which will have the logic of context as well as the state authorization and then instead of having all the logics in App.js file we will have that logic in authorization provider that we will create and in index.js file we can wrap the entire application inside that context custom provider that we will create.

Since we will create "Context custom provider" so we will have no use of the props in the files whenever it comes to the authorization logic.


For codes and usage of "Custom Context Provider" see the files "auth-context.js", "Login.js", "Home.js", "App.js", "index.js". 

"index.js" and "App.js" file is inside "src" folder.


In "Home.js" file also added logout button.