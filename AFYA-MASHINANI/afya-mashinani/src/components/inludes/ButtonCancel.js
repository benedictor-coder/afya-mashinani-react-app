import React from 'react';

const Button = (props) => {
    return (
        <button
            type={props.type}
            onClick={props.handleClose}
            className={props.className}
            >
            {props.label}
        </button>
    )
    
};

export default Button;