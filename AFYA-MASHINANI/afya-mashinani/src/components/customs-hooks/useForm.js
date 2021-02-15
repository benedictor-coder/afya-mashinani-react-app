import React, { useState, useEffect }  from 'react'

const useForm = (validate) => {
    const [ values, setValues ] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        emailAddress: "",
        date: "",
        gender: "",
        password: "",
        repeatPassword: "",
        userLevel: "",
        healthFacility: ""
    });
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmitUser = (e) => {
        e.preventDefault()
        setErrors(validate(values))
    }

    return {handleChange, values, handleSubmitUser, errors}
}

export default useForm

