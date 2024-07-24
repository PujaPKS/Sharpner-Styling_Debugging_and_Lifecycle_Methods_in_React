React Context & useContext Hook ---> usage and explanation

The React Context can be made by user and the useContext Hook are inbuilt in React.

We make React context in order so use directly that page where ever needed in the code instaed of passing in all parents. We can directly use it in particular child component by using the seperate made React context code.

React context tells that instead of passing a data through props to intermediate components. We can directly maintain a component file named "store" where we can pass the information and from there it can be used wherever it is needed.

We built a component "store" and there stored the information with some action and now wherever needed we can directly pull it from "store" folder.

React context solves the problem of props chaining if it is very long.

In useContext Hook we pass the React context made by user.


"auth-context.js" file inside "store" folder has React context made by user.

"auth-context.js" --> This file name syntax is made based on the industry use. So follow this type.

See the explanation how to use "auth-context.js" file in "Navigation.js" , "MainHeader.js" , "App.js" files.