import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import AddUserModal from './inludes/AddUserModal';
import Modal  from 'react-modal'
import { useState } from 'react';

// Modal.setAppElement('#root')
function UsersComponent(props) {

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
        setModalIsOpen(true)
    }

    function closeModal() {
        setModalIsOpen(false)
    }

    const handleUserInputChange = () => {

    }

    const handleSubmitNewUser = (e) => {

        e.preventDefault()
    }

    let modal ={
        position: 'fixed',
        top: '0',
        left: '0',
        width:'100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.6)'
    }
    return (
        <div className="row mx-0">
            <section className="row content-header mt-0 mb-0 mx-0" style={{width: "100%", padding: "1% 0"}}>
                <div className="col-md-12 mt-0 mb-0 mx-0" style={{padding: "0"}}>
                    <h5 className="mt-2 mb-0 mx-0" style={{float: "left"}}>User management</h5>
                    <span style={{float: "right"}}>
                        <small>
                            <ol className="breadcrumb pull-right mt-0 mb-0 mx-0" style={{ background: "none" }}>
                                <li><a href="http://localhost/afya_mashinaniCI/dashboard/dash"><i className="fa fa-dashboard"></i> Home</a></li> <span><i className="fa fa-arrow-right"></i> </span> 
                                <li className="active">Dashboard</li><span><i className="fa fa-arrow-right"></i> </span> 
                                <li className="active">Users</li>
                            </ol>
                        </small>
                    </span>
                </div>
                <div className="col-md-12 box mt-0 mb-0" style={{ border: "1px skyblue solid", borderRadius: "3px", padding: "1%", width: "100%"}}>
                    <ErrorBoundary>
                        <div className="box-header with-border">
                            <button className="btn btn-success bg-green-gradient btn-sm pull-right mb-2"
                                onClick = {openModal}
                                data-toggle="modal" data-target="#addusermodal"><i className="fa fa-plus"></i>
                                Add New User
                            </button>
                        </div>
                        <Modal
                            isOpen={ modalIsOpen}
                            shouldCloseOnOverlayClick={false}
                            shouldCloseOnEsc={true}
                            shouldReturnFocusAfterClose={false}
                            onRequestClose={closeModal}
                            ariaHideApp={false}
                            role={"dialog"}
                            parentSelector={() => document.querySelector('#root')}
                            preventScroll={true}
                            overlayClassName="Overlay"
                            style={{
                                    overlay: {
                                    position: 'fixed',
                                    top: '0',
                                    left: '0',
                                    width:'100%',
                                    height: '100%',
                                    background: 'rgba(0, 0, 0, 0.6)',
                                    transition: 'opacity linear 0.3s'
                                },
                                content: {
                                    position:'fixed',
                                    background: 'ghostwhite',
                                    width: '60%',
                                    height: '90%',
                                    margin: '0.5px 0',
                                    top:'50%',
                                    left:'50%',
                                    transform: 'translate(-50%,-50%)'
                                }
                            }}>
                            <div className="header mb-2 mt-0" style={{ display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%', margin: '0', top:'0'}}>
                                <h4 className="modal-title" style={{ fontSize: "30px", margin:"0 0 0 10%"}}><i className="fa fa-user-circle"></i> Add user </h4>
                                <button type="cancel pull-right" className="btn btn-default btn-sm" onClick={closeModal} style={{width:'50px', height: '50px', fontSize: 'large', fontWeight: 'bold'}}>X</button>
                            </div>
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                                    <div className="modal-body">
                                        <div className="form-user-error">
                                            {/* show errors related to adding a user */}
                                        </div>
                                <form className="card" id="add-new-userForm" onSubmit={ e => handleSubmitNewUser(e) } method="POST" encType="multipart/form-data">
                                    <div className="card-header">
                                        <div className="row card-body">
                                            <div id="addNewUserError">  
                                            </div>
                                            {/* first name */}
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{minWidth: "50px"}}><i className="fa fa-user-circle-o"></i></span>
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
                                                    <span className="input-group-addon" style={{minWidth: "50px"}}><i className="fa fa-user-circle-o"></i></span>
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
                                                    <span className="input-group-addon" style={{minWidth: "50px"}}><i className="fa fa-phone-square"></i></span>
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
                                                    <span className="input-group-addon" style={{minWidth: "50px"}}><i className="fa fa-calendar"></i></span>
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
                                                    <span className="input-group-addon" style={{ minWidth: "50px" }}><i className="fa fa-mercury"></i></span>
                                                            <select
                                                                className="form-control input-lg"
                                                                name="gender" id="gender"
                                                                required
                                                                placeholder="Gender"
                                                                value={gender}
                                                                onChange={e => setGender(e.target.value)}
                                                                style={{width: "350px"}}
                                                            >
                                                        <option value="">Select Gender</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Male">Male</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* password */}
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{minWidth: "50px"}}><i className="fa fa-lock"></i></span>
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
                                                    <span className="input-group-addon" style={{minWidth: "50px"}}><i className="fa fa-lock"></i></span>
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
                                                        onChange={e => setUserProfile(e.target.value)}
                                                        style={{width: "350px"}}
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
                                                    <span className="input-group-addon" style={{ minWidth: "50px" }}><i className="fa fa-h-square"></i></span>
                                                    <select
                                                        className="form-control form-control-md input-lg"
                                                        name="linkfacility"
                                                        id="linkfacility"
                                                        required
                                                        value={healthFacility}
                                                        onChange={e => setHealthFacility(e.target.value)}
                                                        style={{width: "350px"}}
                                                    >
                                                        <option value="">Select Link Facility</option>
                                                        <option value="Kitale Eye Unit">Kitale Eye Unit</option>
                                                        <option value="Matisi Health Centre">Matisi Health Centre</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                                <div className="footer" style={{ display: "flex", justifyContent:"space-around"}}>
                                            <input
                                                type="submit"
                                                id="saveNewUser"
                                                className="btn col-md-3 btn-md btn-success pull-right"
                                                value="Save"
                                            />
                                            <input
                                                type="button"
                                                className="btn col-md-3 btn-md btn-danger pull-right"
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
                        <div className="box-body table-responsive-sm" id="showUsers">
                            {/* section displays all ftched users fron the database */}
                            <table className="table table-bordered  table-sm table-hover">
                                <caption>List of users</caption>
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Sub-location</th>
                                        <th>Household name</th>
                                        <th>House number</th>
                                        <th>landmark</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Kwanza</td>
                                        <td>mimi</td>
                                        <td>2342</td>
                                        <td>hill</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </ErrorBoundary>
                </div>
            </section>

            {/* add user modal */}
            {/* <React.Fragment>
                <AddUserModal />
            </React.Fragment> */}
        </div>
    );
}

export default UsersComponent;