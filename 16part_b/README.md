useRef Hook ---> Explanation and Usage in code.

useRef Hook has mainly 3 use cases :-
1. When you do not want certain information to change across re-render cycles.
2. When you want to change certain information but you do not want the component to re-render.
3. To access a DOM element directly and interact with it.

Here 3rd use case of the useRef hook will be explained in code.

We have a use case that whenever the page loads. We want Email part to be focused.

For this focusing purpose we can use useRef Hook to grab the email input element. Because by using useRef hook we can even store DOM elements as the information in the useRef Hook basically in the current property.

So when we are storing this email input as element in the current property we can make use of the focus function which is available on the DOM elements in the browser.

As we want email input to be focused only once when the page reloads. So we will also use useEffect hook with empty dependency array because just want to be focused only once.

//added useEffect hook to focus the email on refresh of the page in "App.js" file.
  useEffect(() => {
    emailRef.current.focus();
  }, []);


useRef Hook to implement the focus task can be seen in these files "Login.js",  file.