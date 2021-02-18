import React, { useState, useEffect }  from 'react'

const useForm = ( validate) => {
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
        healthFacility: "",
        startDate: "",
        endDate: "",
        age: "",
        chv: "",
        county: "",
        subCounty: "",
        location: "",
        subLocation: "",
        ward: "",
        numberofStaff: "",
        chewName: "",
        facilityName: ""
    });
    const [errors, setErrors] = useState({})

    const [isSubmitting, setIsSubmitting] = useState(false)

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
        setIsSubmitting(true)
    }

    useEffect(() => {
        // effect
        if (Object.keys(errors).length === 0 && isSubmitting) {
            setIsSubmitting(true)
        }
        return () => {
            // cleanup
            setIsSubmitting(false)
        }
    }, [errors,isSubmitting])

    return {handleChange, values, handleSubmitUser, errors}
}

export default useForm

