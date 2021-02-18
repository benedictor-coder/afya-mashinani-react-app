import React from 'react'
import PropTypes from 'prop-types'
const FormInput = ({
    name,
    type,
    placeholder,
    onChange,
    label,
    children,
    className,
    error,
    value,
    ...props
}) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={className}
                style={error && {border: "solid 1px red "}}
            />
            {error && <p>{error}</p>}
        </>
    )
}

FormInput.defaultProps = {
    type: "text",
    className:""
}

FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.any,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf(['text','number','tel','password', 'date','radio', 'checkbox', 'email']),
}

export default FormInput;