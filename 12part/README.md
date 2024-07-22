React Portals - Implementation and Explanation

Like in our previous code though on invalid output we are getting an overlay. But its not the correct way of getting the invalid overlay.

We handled the code in such a perfect manner so its working as overlay but its not the correct approach of doing it because if on multiple parts I had to overlay the it then it would have caused problem.

So logically its not the good practice and right way to use html structure.

We make use of React Portals  to transfer some of our HTML code inside our application to a place where it actually belongs.

If we want to transfer a particular HTML code to somewhere else in my actual DOM . So we will make use of React Portal and we will transfer the part there.

The Code doesn.t change . Just we will create a portal for that code and we will port it to the Real DOM. This is what a React Portal do.

We use React Portal because we want HTML to be cleaner and we want our HTML to make some sense to the browser and we want it to be logically correct and we want to have a good coding practice followed and good HTML structure.


For implementation see files ---> "ErrorModal.js" , "index.html" file inside public folder

"index.html" file inside public folder Code ----> 
<div id="backdrop-root"></div>
<div id="overlay-root"></div>

"ErrorModal.js" files code used React Portal so see the "ErrorModal.js" file.