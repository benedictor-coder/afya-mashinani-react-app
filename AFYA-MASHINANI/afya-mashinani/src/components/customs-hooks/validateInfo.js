export default function  validateInfo (values)  {
    let errors = {};

    if (!values.firstName.trim()) {
        errors.firstName="First name is required"
    }

    if (!values.lastName.trim()) {
        errors.lastName="Last name is required"
    }

    if (!values.emailAddress) {
        errors.emailAddress="Email address is required"
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.emailAddress)) {
        errors.emailAddress="Add a valid email address"
    }
    
    if (!values.phoneNumber) {
        errors.phoneNumber="Phone number can not be empty"
    } else if (isNaN(values.phoneNumber) || values.phoneNumber.length < 10) {
        errors.phoneNumber="Enter a valid phone number that is not less than 10 characters"
    }

    if (!values.date) {
        errors.date="Please choose a date"
    }

    if(!values.password) {
        errors.password="Enter a password"
    } else if (values.password.length < 6) {
        errors.password="Password can not be less than 6 characters long"
    }

    if (!values.repeatPassword) {
        errors.repeatPassword="Please retype your password"
    } else if (values.repeatPassword !== values.password) {
        errors.repeatPassword="Your passwords do not match!"
    }

    if (!values.userLevel) {
        errors.userLevel="Select your user level"
    }

    if (!values.gender) {
        errors.gender="Select your gender from the list"
    } 

    if (!values.healthFacility) {
        errors.healthFacility="Select your health link facility"
    }

    if (!values.chewName) {
        errors.chewName="Enter the name of the CHEW"
    }

    if (!values.facilityName) {
        errors.facilityName="Missing name for the facility"
    }

    if (!values.numberifStaff) {
        errors.numberofStaff="Enter the total number of staff member at the facility"
    }
    return errors;
}