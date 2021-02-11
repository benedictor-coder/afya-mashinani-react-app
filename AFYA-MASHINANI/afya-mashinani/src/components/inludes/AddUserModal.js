import React, { useState } from 'react';
import Modal from 'react-modal';

function AddUserModal(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [emailAdress, setEmailAddress] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [userProfile, setUserProfile] = useState('')
    const [healthFacility, setHealthFacility] = useState('')

    function openModal() {
        modalIsOpen(true)
    }

    function closeModal() {
        setModalIsOpen(false)
    }

    const handleUserInputChange = () => {

    }

    const handleSubmitNewUser = (e) => {

        e.preventDefault()
    }
    return (
        <div>
            <Modal
                isOpen={ modalIsOpen}
                    shouldCloseOnOverlayClick={false}
                    shouldCloseOnEsc={true}
                    shouldReturnFocusAfterClose={false}
                    onRequestClose={closeModal}
                    style={{
                        overlay: {
                            background: ""
                        },
                        content: {
                            color: "black"
                        }
                    }}>
                    <h4 className="modal-title" style={{ fontSize: "30px" }}><i className="fa fa-user-circle"></i> Add user </h4>
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                            <div className="modal-body">
                                <form className="card" id="add-new-userForm" onSubmit={ e => handleSubmitNewUser(e) } method="POST" encType="multipart/form-data">
                                    <div className="card-header">
                                        <div className="row card-body">
                                            <div id="addNewUserError">  
                                            </div>
                                            {/* first name */}
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{minWidth: "50px"}}><i className="fa fa-user-circle"></i></span>
                                                    <input
                                                        className="form-control input-lg"
                                                        type="text"
                                                        id="firstname"
                                                        name="firstname"
                                                        placeholder="First Name"
                                                        required
                                                        value={firstName}
                                                        onChange={e => setFirstName(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            {/* last name */}
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{minWidth: "50px"}}><i className="fa fa-user-circle"></i></span>
                                                    <input
                                                        className="form-control input-lg"
                                                        type="text"
                                                        id="lastname"
                                                        name="lastname"
                                                        placeholder="Last Name"
                                                        required
                                                        value={lastName}
                                                        onChange={e => setLastName(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            {/* phone number */}
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{minWidth: "50px"}}><i className="fa fa-phone-circle"></i></span>
                                                    <input
                                                        className="form-control input-lg"
                                                        type="tel"
                                                        id="phonenumber"
                                                        name="phonenumber"
                                                        placeholder="Phone Number"
                                                        required
                                                        value={phoneNumber}
                                                        onChange={e => setPhoneNumber(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            {/* email address */}
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{minWidth: "50px"}}><i className="fa fa-at"></i></span>
                                                    <input
                                                        className="form-control input-lg"
                                                        type="email" id="emailaddress"
                                                        name="emailaddress"
                                                        placeholder="Email Address"
                                                        required
                                                        value={emailAdress}
                                                        onChange={e => setEmailAddress(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            {/* date of birth */}
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{minWidth: "50px"}}><i className="fa fa-calender"></i></span>
                                                    <input
                                                        className="form-control input-lg"
                                                        type="date"
                                                        id="dateofbirth"
                                                        name="dateofbirth"
                                                        placeholder="Date of Birth"
                                                        required
                                                        value={dateOfBirth}
                                                        onChange={e => setDateOfBirth(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            {/* user gender */}
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{ minWidth: "50px" }}><i className="fa fa-users"></i></span>
                                                    <select className="form-control input-lg" name="gender" id="gender" required placeholder="Gender" value={gender}>
                                                        <option value="">Select Gender</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Male">Male</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* password */}
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{minWidth: "50px"}}><i className="fa fa-calender"></i></span>
                                                    <input
                                                        className="form-control input-lg"
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        placeholder="Password"
                                                        required
                                                        value={password}
                                                        onChange={e => setPassword(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                             {/* repeat password */}
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{minWidth: "50px"}}><i className="fa fa-calender"></i></span>
                                                    <input
                                                        className="form-control input-lg"
                                                        type="password"
                                                        id="repeatpassword"
                                                        name="repeatpassword"
                                                        placeholder="Repeat Password"
                                                        required
                                                        value={repeatPassword}
                                                        onChange={e => setRepeatPassword(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            {/* user profile level */}
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{ minWidth: "50px" }}><i className="fa fa-users"></i></span>
                                                    <select
                                                        className="form-control input-lg"
                                                        name="userlevel" id="userlevel"
                                                        required
                                                        value={userProfile}
                                                    >
                                                        <option value="">Select Level</option>
                                                        <option value="Admin">Admin</option>
                                                        <option value="User">User</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* health facility */}
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{ minWidth: "50px" }}><i className="fa fa-institution"></i></span>
                                                    <select
                                                        className="form-control input-lg"
                                                        name="linkfacility"
                                                        id="linkfacility"
                                                        required
                                                        value={healthFacility}
                                                    >
                                                        <option value="">Select Link Facility</option>
                                                        <option value="Kitale Eye Unit">Kitale Eye Unit</option>
                                                        <option value="Matisi Health Centre">Matisi Health Centre</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <input
                                                type="submit"
                                                id="saveNewUser"
                                                className="btn col-md-3 btn-md bg-green-gradient pull-right"
                                                value="Save"
                                            />
                                            <input
                                                type="button"
                                                className="btn col-md-3 btn-md bg-red-gradient pull-right"
                                                value="Cancel"
                                                onClick={closeModal}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal>
        </div>
    );
}

export default AddUserModal;