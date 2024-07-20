// Write your code below:
import React from 'react';
import './Card.css';

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

export default Card;
