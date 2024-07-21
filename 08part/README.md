Revision Project - Rendering Users List

Deliverable:

1. UsersList component should return an unordered list (<ul></ul>).
2. Each list-item (<li></li>) of this unordered list should be created by mapping over the "users" array extracted from the props object. [NOTE: Assume that users array is an array of objects, where each object is of this form: { name: "Max", age: 30 }. Now, map the array such that the content of list-item for the given object would be: Max (30 years old)].
3. Enclose the unordered list inside the custom Card component we have created.
4. Import the UsersList.css file inside the UsersList component and apply its styles correctly.
5. Import the UsersList component inside the App component and place it after the AddUser component inside the jsx returned by App component.
6. Here, give UsersList component a prop "users" and its value should be an empty array.