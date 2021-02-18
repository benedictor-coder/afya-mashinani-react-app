import React from 'react';

const ButtonSave = (props) => {
    return (
        <button
            type={props.type}
            className={props.className}
            onClick={props.handleSave}
        >
            {props.label}
        </button>
    );
};

export default ButtonSave;