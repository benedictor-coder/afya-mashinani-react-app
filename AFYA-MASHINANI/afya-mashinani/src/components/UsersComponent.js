import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import AddUserModal from './inludes/AddUserModal';
import Table from './TableComponent';
import Modal from 'react-modal'
import { useState } from 'react';
import FormInput from './inludes/FormInput'
import FormSelect from './inludes/FormSelect'
import ButtonSave from './inludes/ButtonSave'
import ButtonCancel from './inludes/ButtonCancel'
import useForm from './customs-hooks/useForm'
import validateForm from './customs-hooks/validateInfo'

Modal.defaultStyles = {} // Removes all of react-modal's default styles


// Modal.setAppElement('#root')
function UsersComponent({ submitUser }) {
    const actionsBtnColumn= {
        className: "col-",
        style: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            padding: "0",
            alignItems: "end",
            margin: "0"
        }
    }
    const btneditAttr = {
        type: "button",
        className: "btn btn-sm btn-info  btn-flat pull-right",
        id: "btn-edit",
        label: "Edit",
        value: "Edit",
        style: {
            margin: '1%',
            width: '200px auto',
        }
    }
    const btndeletetAttr = {
        type: "button",
        className: "btn btn-sm btn-danger  btn-flat pull-right",
        id: "btn-delete",
        label: "Delete",
        value: "Delete",
        style: {
            margin: '1%',
            width: '200px auto'
        }
    }  
    const actionsBtnDiv = React.createElement("div", actionsBtnColumn,
        React.createElement('button', btneditAttr, 'edit'),
        React.createElement('button', btndeletetAttr, 'delete')
    )

    const { handleChange, values, handleSubmitUser, errors } = useForm(validateForm);

    const caption = "List of users"
    
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const theadData = ["First Name", "Last Name", "Gender", "Actions"]
    
    const tbodyData = [
        {
            id: "1",
            items: ["Benedictor", "Milimu", "Male", actionsBtnDiv]
        },
        {
            id: "2",
            items: ["Benedictor", "Milimu", "Male", actionsBtnDiv]
        },
        {
            id: "3",
            items: ["Benedictor", "Milimu", "Male", actionsBtnDiv]
        },
    ]

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
                            {/* <button className="btn btn-success bg-green-gradient btn-sm pull-right mb-2"
                                onClick = {openModal}
                                data-toggle="modal" data-target="#addusermodal"><i className="fa fa-plus"></i>
                                Add New User
                            </button> */}
                            <div className='col-md-12'>
                                <button className="btn btn-success bg-green-gradient btn-sm pull-right mb-2"
                                    onClick = {openModal}
                                    data-toggle="modal" data-target="#addusermodal"><i className="fa fa-plus"></i>
                                    Add New User
                                </button>
                                    <div className="col-md-3" style={{ display:"flex", flexDirection:"row", justifyContent:"center"}}>
                                    Show
                                    <select className="form-control form-control-sm mx-1">
                                        <option value="10" selected>10</option>
                                        <option value="25">25</option>
                                        <option value="50" >50</option>
                                    </select>
                                    entries
                                    </div>
                            </div>
                        </div>
                        <React.Fragment>
                            {/* section displays all ftched users fron the database */}
                            <Table theadData={theadData} tbodyData={tbodyData} caption={caption}/>
                        </React.Fragment>

                        {/* add user modal */}
                        <Modal
                            isOpen={ modalIsOpen}
                            shouldCloseOnOverlayClick={false}
                            shouldCloseOnEsc={true}
                            shouldReturnFocusAfterClose={false}
                            onRequestClose={closeModal}
                            ariaHideApp={false}
                            role={"dialog"}
                            parentSelector={() => document.querySelector('#wrapper')}
                            preventScroll={true}
                            overlayClassName="Overlay"
                            className="Modal"
                            style={{
                                    Modal: {
                                        overflow: 'hidden'
                                    },
                                    overlay: {
                                    position: 'fixed',
                                    top: '0',
                                    left: '0',
                                    width:'100vw',
                                    height: '100vh',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: '999999',
                                    background: 'rgba(0, 0, 0, 0.6)',
                                    transition: 'opacity linear 0.5s'
                                },
                                content: {
                                    position:'absolute',
                                    background: 'ghostwhite',
                                    width: '35rem',
                                    overflowY: 'auto',
                                    maxWidth: 'calc(100vw - 2rem)',
                                    maxHeight: 'calc(100vh - 2rem)',
                                    margin: '0 0 5% 0',
                                    top:'50%',
                                    left:'50%',
                                    transform: 'translate(-50%,-50%)',
                                    borderRadius: '3px'
                                }
                            }}>
                            <div className="header mb-2 mx-0 mt-0" style={{ display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%', margin: '0', padding: 'none', backgroundColor:'#282c34'}}>
                                <h4 className="modal-title" style={{ fontSize: "30px", margin:"0 0 0 1rem", color: "dodgerblue"}}><i className="fa fa-user-circle"></i> Add user </h4>
                                <button type="cancel pull-right" className="btn btn-default btn-sm" onClick={closeModal} style={{width:'30px', height: '50px', fontSize: 'large', fontWeight: 'bold', backgroundColor:'initial', color:'white'}}>X</button>
                            </div>
                                <form className="card mt-0" id="add-new-userForm" onSubmit={handleSubmitUser} method="POST" encType="multipart/form-data">
                                    <div className="card-header">
                                        <div className="row card-body">
                                            {/* first name */}
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{minWidth: "50px", backgroundColor: "white", border: "1px lightgrey solid"}}><i className="fa fa-user-circle-o mt-2 mb-2"></i></span>
                                                    <FormInput
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
                                                    <span className="input-group-addon" style={{minWidth: "50px", backgroundColor: "white", border: "1px lightgrey solid"}}><i className="fa fa-user-circle-o mt-2 mb-2"></i></span>
                                                    <FormInput
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
                                                    <span className="input-group-addon" style={{minWidth: "50px", backgroundColor: "white", border: "1px lightgrey solid"}}><i className="fa fa-phone-square mt-2 mb-2"></i></span>
                                                    <FormInput
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
                                                    <span className="input-group-addon" style={{minWidth: "50px", backgroundColor: "white", border: "1px lightgrey solid"}}><i className="fa fa-at mt-2 mb-2"></i></span>
                                                    <FormInput
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
                                                    <span className="input-group-addon" style={{minWidth: "50px", backgroundColor: "white", border: "1px lightgrey solid"}}><i className="fa fa-calendar mt-2 mb-2"></i></span>
                                                    <FormInput
                                                        className="form-control input-lg"
                                                        type="date"
                                                        id="date"
                                                        name="date"
                                                        placeholder="date"
                                                        value={values.date}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                {errors.date && <p>{errors.date}</p>}
                                            </div>
                                            {/* user gender */}
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{ minWidth: "50px", backgroundColor: "white", border: "1px lightgrey solid"}}><i className="fa fa-mercury mt-2 mb-2"></i></span>
                                                    <FormSelect
                                                        className="form-control form-control-md input-lg"
                                                        name="gender"
                                                        id="gender"
                                                        placeholder="Gender"
                                                        value={values.gender}
                                                        onChange={handleChange}
                                                        
                                                    >
                                                        <option value="">Select Gender</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Male">Male</option>
                                                    </FormSelect>
                                                </div>
                                                {errors.gender && <p>{ errors.gender}</p>}
                                            </div>
                                            {/* password */}
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{minWidth: "50px", backgroundColor: "white", border: "1px lightgrey solid"}}><i className="fa fa-lock mt-2 mb-2"></i></span>
                                                    <FormInput
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
                                                    <span className="input-group-addon" style={{minWidth: "50px", backgroundColor: "white", border: "1px lightgrey solid"}}><i className="fa fa-lock mt-2 mb-2"></i></span>
                                                    <FormInput
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
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{ minWidth: "50px", backgroundColor: "white", border: "1px lightgrey solid"}}><i className="fa fa-users mt-2 mb-2"></i></span>
                                                    <FormSelect
                                                        className="form-control form-control-md input-lg"
                                                        name="userLevel"
                                                        id="userLevel"
                                                        value={values.userLevel}
                                                        onChange={handleChange}
                                                        
                                                    >
                                                        <option value="">Select Level</option>
                                                        <option value="Admin">Admin</option>
                                                        <option value="User">User</option>
                                                    </FormSelect>
                                                </div>
                                                {errors.userLevel && <p>{ errors.userLevel}</p>}
                                            </div>
                                            {/* health facility */}
                                            <div className="col-md-12 form-group">
                                                <div className="input-group">
                                                    <span className="input-group-addon" style={{ minWidth: "50px", backgroundColor: "white", border: "1px lightgrey solid"}}><i className="fa fa-h-square mt-2 mb-2"></i></span>
                                                    <select
                                                        className="form-control form-control-md input-lg"
                                                        name="healthFacility"
                                                        id="healthFacility"
                                                        value={values.healthFacility}
                                                        onChange={handleChange}
                                                        
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
                                            <ButtonSave
                                                name="saveNewUser"
                                                type="submit"
                                                id="saveNewUser"
                                                label="Save"
                                                className="btn col-md-3 btn-md btn-success pull-right"
                                                value="Save"
                                            />
                                            <ButtonCancel
                                                name="cancelNewUser"
                                                id="cancelNewUser"
                                                type="reset"
                                                label="Cancel"
                                                className="btn col-md-3 btn-md btn-danger pull-right"
                                                value="Cancel"
                                                handleClose={closeModal}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </Modal>
                    </ErrorBoundary>
                </div>
            </section>
        </div>
    );
}

export default UsersComponent;