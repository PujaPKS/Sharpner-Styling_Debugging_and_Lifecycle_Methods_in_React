import React, {useRef, useImperativeHandle} from 'react';
import classes from'./Input.module.css';

const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    // useEffect(() => {
    //     inputRef.current.focus();
    // }, []);

    //Will create our own method which will bring custom component into focus
    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref,() => {
        return {
            focus: activate, //focus is the key name it can be anything
        }
    });


  return (
    <div
        className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
        }`}
    >
        <label htmlFor={props.id}>{props.label}</label>
        <input 
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        />
    </div>
  )
})

export default Input