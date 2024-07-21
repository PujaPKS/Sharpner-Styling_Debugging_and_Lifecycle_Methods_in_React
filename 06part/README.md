Revision Project - Collecting User Inputs

Deliverables:-

In the AddUser component:
1. Listen for change event on input fields and make use of useState hook to collect user inputs.
2. On form submission, log to console the inputs provided by the user.
3. Reset the form, i.e., clear the input fields, after that.

const [username, setUsername] = useState('');-----> In this line the---->
username variable should be same as the value variable inside form. In order to make changes inside form on the specified value.
<input type='text' id='username' value={username} onChange={nameChangeHandler}/> ---> in this line
the value is same as the constant in the useState Hook.

We can console values in two ways :-
1. console.log(`${username}`, `${age}`); ---> here username and age came from the values of form which is same as variable in useState.
// or can simply console the variable of the useState which has values stored
2. console.log(username , age);

We need to use value in form in order to reflect the changes in form after the submission to be empty.
