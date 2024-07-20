Revision Project - Reusable Card


Deliverables:

1. In the Card component, return a div.

2. Children of Card component should be the content of the div.

3. Correctly, apply the styles in Card.css to the Card component.

4. Import Card component in the AddUser component and enclose the form in between the opening and closing tags of Card component.

5. Correctly, apply the styles in AddUser.css to the AddUser component. [Note: Ensure that the class applied to the Card opening tag, trickle downs to the Card component div.]



Important part of code is in "Card.js" file. The important part is below :- 
const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div>
        {/* <div className={`card ${props.className}`}>{props.children}</div> */}
        {/* OR */}
        <div className={classes}>{props.children}</div>
        </div>
    )
};