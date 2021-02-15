import React,{useState} from 'react'
import UsersComponent from '../UsersComponent'
import BodyContentComponent from '../BodyContentComponent'
function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitUser() {
        setIsSubmitted(true)
    }
    return (
        <div>
            {/* <UsersComponent /> */}
            {!isSubmitted ? <UsersComponent submitUser={submitUser}/> : <BodyContentComponent/>}
        </div>
    )
}

export default Form
