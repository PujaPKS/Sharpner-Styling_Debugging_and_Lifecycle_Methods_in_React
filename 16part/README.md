useRef Hook ---> Explanation and Usage in code.

useRef Hook has mainly 3 use cases :-
1. When you do not want certain information to change across re-render cycles.
2. When you want to change certain information but you do not want the component to re-render.
3. To access a DOM element directly and interact with it.

Limitation of useState is that it renders everything again and again on any change. 
So we use useRef hook.

In useState React decides when the state should change but in useRef user can decide when to change.

Syntax of useRef Hook --> const referenceVariable = useRef(InitialInformation);

InitialInformation can be anything . It can be string, number, object, Dom element.

referenceVariable gets an object property called current property on using useRef Hook.
Initially to current property the InitialInformation is provided.

To get InitialInformation we can write "referenceVariable.current".


useRef Hook use can be seen in "App.js" file. 