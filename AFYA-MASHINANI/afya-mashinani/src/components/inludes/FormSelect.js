import React, {useState} from 'react'
import PropTypes from 'prop-types'

const FormSelect = ({
    name,
    className,
    value,
    onChange,
    children,
    error,
    option,
    ...props
}) => {

    const [data] = useState(props.data)
    const [selectedData, setSelectedData] = useState("")

    // function onSelectChange(event) {
    //     setSelectedData(event.target.value);
    //     if (props.onChange) {
    //         props.onChange(selectedData);
    //     }
    // }

    // let options = data.map((data) => {
    //     return  <option key={data.id} value={data.id}>
    //                 {data.name}
    //             </option>
    // })

    return (
        <>
            <select
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                className={className}
            >
                <option>Select from list</option>
            </select>
            {/* {error && <p>{error}</p>} */}
        </>
    )
}

FormSelect.defaultProps = {
    className:""
}

FormSelect.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
    className: PropTypes.string,
    // option: PropTypes.any.isRequired
}

export default FormSelect;