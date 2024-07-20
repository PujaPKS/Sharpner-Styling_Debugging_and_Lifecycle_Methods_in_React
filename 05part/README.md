Revision Project - Reusable Button

Deliverable :-

1. Inside the Button component return an html button element.
2. Render the children of Button component in between the opening and closing tags of the button element.
3. Correctly, apply the styles in Button.css to the Button component.
4. Import Button component in the AddUser component and replace the button element that you have inside the form with the Button component.
5. The text in between the opening and closing tags of the custom Button component will still be "Add User".
6. Give this custom Button a "type" attribute with value as "submit".
7. Now, inside Button component make use of props to set the type of button element there, and also make "Add User" the text inside the button element there.


 Way to optimise the custom button and increased reusability --> In "AddUser.js" file --->
    <Button onClick={clickHandler}>Click Here</Button>

And this custom buttons working is coded in "Button.js" file.----->
    const Button = (props) => {
    return (
        <button className="button" type={props.type || "button"} onClick={props.onClick}>
            {props.children}
        </button>
        );
    };