import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import AddUserModal from './inludes/AddUserModal';
import Table from './TableComponent';
import Modal  from 'react-modal'
import { useState } from 'react';
import useForm from './customs-hooks/useForm'
import validateForm from './customs-hooks/validateInfo'

Modal.setAppElement('body')
function UsersComponent(props) {
    const { handleChange, values, handleSubmitUser, errors } = useForm(validateForm);

    const theadData = ["First Name", "Last Name", "Gender"]
    const tbodyData = [
        {
            id: "1",
            items: ["Benedictor", "Milimu", "Male"]
        },
        {
            id: "2",
            items: ["Benedictor", "Milimu", "Male"]
        },
        {
            id: "3",
            items: ["Benedictor", "Milimu", "Male"]
        },
    ]

    const [modalIsOpen, setModalIsOpen] = useState(false)

    function openModal() {
        setModalIsOpen(true)
    }

    function closeModal() {
        setModalIsOpen(false)
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
                            // parentSelector={() => document.querySelector('#root')}
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
                                    width: '35vw',
                                    height: '100vh',
                                    margin: '5% 0',
                                    top:'50%',
                                    left:'50%',
                                    transform: 'translate(-50%,-50%)'
                                }
                            }}>
                            <div className="header mb-2 mx-0 mt-0" style={{ display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%', margin: '0', padding: 'none', backgroundColor: '#3b4049'}}>
                                <h4 className="modal-title" style={{ fontSize: "30px", margin:"0 0 0 0"}}><i className="fa fa-user-circle"></i> Add user </h4>
                                <button type="cancel pull-right" className="btn btn-default btn-sm" onClick={closeModal} style={{width:'50px', height: '50px', fontSize: 'large', fontWeight: 'bold'}}>X</button>
                            </div>
                    <div className="modal-dialog modal-md">
                        <div className="modal-content">
                                    <div className="modal-body">
                                        <div className="form-user-error">
                                            {/* show errors related to adding a user */}
                                        </div>
                                <form className="card" id="add-new-userForm" onSubmit={handleSubmitUser} method="POST" encType="multipart/form-data">
                                    <div className="card-header">
                                        <div className="row card-body">
                                            <div id="addNewUserError">  
                                            </div>
                                            {/* first name */}
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{minWidth: "50px"}}><i className="fa fa-user-circle-o"></i></span>
                                                    <input
                                                        className="form-control input-sm"
                                                        type="text"
                                                        id="firstName"
                                                        name="firstName"
                                                        placeholder="First Name"
                                                        value={values.firstName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                {errors.firstName && <p>{errors.firstName}</p>}
                                            </div>
                                            {/* last name */}
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{minWidth: "50px"}}><i className="fa fa-user-circle-o"></i></span>
                                                    <input
                                                        className="form-control input-lg"
                                                        type="text"
                                                        id="lastName"
                                                        name="lastName"
                                                        placeholder="Last Name"
                                                        value={values.lastName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                {errors.lastName && <p>{ errors.lastName}</p>}
                                            </div>
                                            {/* phone number */}
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{minWidth: "50px"}}><i className="fa fa-phone-square"></i></span>
                                                    <input
                                                        className="form-control input-lg"
                                                        type="tel"
                                                        id="phoneNumber"
                                                        name="phoneNumber"
                                                        placeholder="Phone Number"
                                                        value={values.phoneNumber}
                                                        onChange={handleChange}
                                                    />   
                                                </div>
                                                {errors.phoneNumber && <p>{ errors.phoneNumber }</p>}
                                            </div>
                                            {/* email address */}
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{minWidth: "50px"}}><i className="fa fa-at"></i></span>
                                                    <input
                                                        className="form-control input-lg"
                                                        type="email"
                                                        id="emailAddress"
                                                        name="emailAddress"
                                                        placeholder="Email Address"
                                                        value={values.emailAdress}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                {errors.emailAddress && <p>{errors.emailAddress}</p>}
                                            </div>
                                            {/* date of birth */}
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{minWidth: "50px"}}><i className="fa fa-calendar"></i></span>
                                                    <input
                                                        className="form-control input-lg"
                                                        type="date"
                                                        id="date"
                                                        name="date"
                                                        value={values.date}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                {errors.date && <p>{errors.date}</p>}
                                            </div>
                                            {/* user gender */}
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{ minWidth: "50px" }}><i className="fa fa-mercury"></i></span>
                                                    <select
                                                        className="form-control input-lg"
                                                        name="gender"
                                                        id="gender"
                                                        placeholder="Gender"
                                                        value={values.gender}
                                                        onChange={handleChange}
                                                        style={{width: "350px"}}
                                                    >
                                                        <option value="">Select Gender</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Male">Male</option>
                                                    </select>
                                                </div>
                                                {errors.gender && <p>{ errors.gender}</p>}
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
                                                        value={values.password}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                {errors.password && <p>{ errors.password}</p>}
                                            </div>
                                             {/* repeat password */}
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{minWidth: "50px"}}><i className="fa fa-lock"></i></span>
                                                    <input
                                                        className="form-control input-lg"
                                                        type="password"
                                                        id="repeatPassword"
                                                        name="repeatPassword"
                                                        placeholder="Repeat Password"
                                                        value={values.repeatPassword}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                {errors.repeatPassword && <p>{errors.repeatPassword}</p>}
                                            </div>
                                            {/* user profile level */}
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{ minWidth: "50px" }}><i className="fa fa-users"></i></span>
                                                    <select
                                                        className="form-control input-lg"
                                                        name="userLevel"
                                                        id="userLevel"
                                                        value={values.userLevel}
                                                        onChange={handleChange}
                                                        style={{width: "350px"}}
                                                    >
                                                        <option value="">Select Level</option>
                                                        <option value="Admin">Admin</option>
                                                        <option value="User">User</option>
                                                    </select>
                                                </div>
                                                {errors.userLevel && <p>{ errors.userLevel}</p>}
                                            </div>
                                            {/* health facility */}
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{ minWidth: "50px" }}><i className="fa fa-h-square"></i></span>
                                                    <select
                                                        className="form-control form-control-md input-lg"
                                                        name="healthFacility"
                                                        id="healthFacility"
                                                        value={values.healthFacility}
                                                        onChange={handleChange}
                                                        style={{width: "350px"}}
                                                    >
                                                        <option value="">Select Link Facility</option>
                                                        <option value="Kitale Eye Unit">Kitale Eye Unit</option>
                                                        <option value="Matisi Health Centre">Matisi Health Centre</option>
                                                            </select>
                                                </div>
                                                {errors.healthFacility && <p>{errors.healthFacility}</p>}
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
                            <Table theadData={theadData} tbodyData={tbodyData} />
                        </div>
                    </ErrorBoundary>
                </div>
            </section>
        </div>
    );
}

export default UsersComponent;