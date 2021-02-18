import React, {useState} from 'react'
import PropTypes from 'prop-types'
import ErrorBoundary from './ErrorBoundary'
import Table from './TableComponent'
import FormInput from './inludes/FormInput'
import useForm from './customs-hooks/useForm'
import validateForm from './customs-hooks/validateInfo'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
// import ButtonSave from './inludes/ButtonSave'
// import ButtonCancel from './inludes/ButtonCancel'

function ReportsComponent(props) {
    
    const { handleChange, values, errors } = useForm(validateForm);
    const theadData = ['#','Description', 'Total']
    const tbodyData = [
        {
            id: "1",
            items: ["21","PNC", "1"]
        },
        {
            id: "2",
            items: ["009","ANC", "2"]
        },
        {
            id: "3",
            items: ["4112","Delivered", "3"]
        }
    ]
    return (
        <div>
            <section className="row content-header mt-0 mb-0 mx-0" style={{width: "100%", padding: "1% 0"}}>
                <div className="col-md-12 mt-0 mb-0 mx-0" style={{padding: "0"}}>
                    <h5 className="pull-left mt-2">Report</h5>
                    <span style={{float: "right"}}>
                        <small>
                            <ol className="breadcrumb pull-right mt-0 mb-0 mx-0" style={{ background: "none" }}>
                                <li><a href="http://localhost/afya_mashinaniCI/dashboard/dash"><i className="fa fa-dashboard"></i> Home</a></li> <span><i className="fa fa-arrow-right"></i> </span> 
                                <li className="active">Dashboard</li><span><i className="fa fa-arrow-right"></i> </span> 
                                <li className="active">Reports</li>
                            </ol>
                        </small>
                    </span>
                </div>
            </section>
            <ErrorBoundary>
                {/** form filter report */} 
                <form action="" id="filter">
                    <Accordion defaultActiveKey="0">
                    <Card  style={{ border: "1px skyblue solid", borderRadius: "3px", padding: "1%", width: "100%"}}>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        {/* <div className="accordion" id="accordion"> */}
							<p>
                                <button className="btn btn-block btn-flat btn-lg text-left btn-success" type="button" data-toggle="collapse" data-target="#details" aria-expanded="true" aria-controls="details" style={{borderRadius: "2px"}}>
                                    <div style={{ float: "left" }}>FILTERS</div> <i className="fa fa-arrow-down" style={{ float: "right" }}></i>
								</button>
							</p>
						{/* </div> */}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <div  className="row mb-3" style={{display:"flex", flexDirection:"row"}}>
                                    <div className="col-md-12 mb-0 text-left">
                                        <h6 style={{margin: "0"}}>Date Range and General</h6>
                                    </div>
                                    <div className="col-md-2">
                                        <FormInput
                                            type="date"
                                            autoComplete="off"
                                            name="start_date"
                                            id="start_date"
                                            className="form-control form-control-sm"
                                            placeholder="start date"
                                            value={values.startDate}
                                            onChange={handleChange}
                                        />
                                    </div>
                                
                                    <div className="col-md-2">
                                        <FormInput
                                            type="date"
                                            autoComplete="off"
                                            name="end_date"
                                            id="end_date"
                                            className="form-control form-control-sm"
                                            placeholder="end date"
                                            value={values.endDate}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <FormInput
                                            type="text"
                                            autocomplete="off"
                                            name="age"
                                            id="age"
                                            value={values.age}
                                            className="form-control form-control-sm"
                                            placeholder="Age"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <FormInput
                                            type="text"
                                            autoComplete="off"
                                            name="gender"
                                            id="gender"
                                            className="form-control form-control-sm"
                                            placeholder="Gender"
                                            value={values.gender}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div  className="row mb-3" style={{display:"flex", flexDirection:"row"}}>
                                    <div className="col-md-12 text-left">
                                        <h6 style={{margin: "0"}}>Location Details</h6>
                                    </div>
                                    <div className="col-md-2">
                                        <FormInput
                                            type="text"
                                            autoComplete="off"
                                            name="county"
                                            id="county"
                                            list="county-datalist"
                                            className="form-control form-control-sm"
                                            placeholder="County"
                                            value={values.county}
                                            onChange={handleChange}
                                        />
                                        <datalist id="county-datalist">
                                            <option value="0">Select County</option>
                                        </datalist>
                                    </div>
                                    <div className="col-md-2">
                                        <FormInput
                                            type="text"
                                            autoComplete="off"
                                            name="sub-county"
                                            id="sub-county"
                                            list="sub-county-datalist"
                                            className="form-control form-control-sm"
                                            placeholder="Sub-county"
                                            value={values.county}
                                            onChange={handleChange}
                                        />
                                        <datalist id="sub-county-datalist">
                                            <option value="0">Select Sub-county</option>
                                        </datalist>
                                    </div>
                                    <div className="col-md-2">
                                        <FormInput
                                            type="text"
                                            autoComplete="off"
                                            name="ward"
                                            id="ward"
                                            list="ward-datalist"
                                            className="form-control form-control-sm"
                                            placeholder="Ward"
                                            value={values.county}
                                            onChange={handleChange}
                                        />
                                        <datalist id="ward-datalist">
                                            <option value="0">Select Ward</option>
                                        </datalist>
                                    </div>
                                    <div className="col-md-2">
                                        <FormInput
                                            type="text"
                                            autoComplete="off"
                                            name="location"
                                            id="location"
                                            list="location-datalist"
                                            className="form-control form-control-sm"
                                            placeholder="Location"
                                            value={values.county}
                                            onChange={handleChange}
                                        />
                                        <datalist id="location-datalist">
                                            <option value="0">Select Location</option>
                                        </datalist>
                                    </div>
                                    <div className="col-md-2">
                                        <FormInput
                                            type="text"
                                            autoComplete="off"
                                            name="sub-location"
                                            id="sub-location"
                                            list="sub-location-datalist"
                                            className="form-control form-control-sm"
                                            placeholder="Sub-location"
                                            value={values.county}
                                            onChange={handleChange}
                                        />
                                        <datalist id="sub-location-datalist">
                                            <option value="0">Select Sub-location</option>
                                        </datalist>
                                    </div>
                                </div>
                                <div  className="row mb-3" style={{display:"flex", flexDirection:"row"}}>
                                    <div className="col-md-12 text-left">
                                        <h6 style={{margin: "0"}}>Health Facililty and CHV</h6>
                                    </div>
                                    <div className="col-md-3">
                                        <FormInput
                                            type="text"
                                            autoComplete="off"
                                            name="facility"
                                            id="facility"
                                            className="form-control form-control-sm"
                                            placeholder="Facility"
                                            values={values.healthFacility}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <FormInput
                                            type="text"
                                            autoComplete="off"
                                            name="chv" id="chv"
                                            className="form-control form-control-sm"
                                            placeholder="Chv"
                                            value={values.chv}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-2">
                                        <button type="submit" id="filter" className="btn btn-success btn-sm mt-4"><i className="fa fa-refresh fa-sm text-white-50"></i> Filter</button>
                                    </div>
                                </div>
                            </Card.Body>
                            
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </form>
            </ErrorBoundary>

            <ErrorBoundary>
                <div className="col-md-12 box mt-5 mb-0" style={{ border: "1px skyblue solid", borderRadius: "3px", padding: "1%", width: "100%", backgroundColor: "white"}}>
                    <div className="table-responsive-sm">
                        <legend>
                            <div className="col-12" style={{paddingTop:'1px',textAlign: 'center',fontWeight: 'bold'}}>
                                <h1>Report</h1>
                                <Table theadData={theadData} tbodyData={tbodyData} />
                                <caption className="row col-12">
                                    <div className="col-md-2 pull-left mx-0" style={{padding: "0"}}>
                                        Report
                                    </div>
                                    
                                    <div className="col-md-10 mx-0" style={{ display:"flex", flexDirection:"row", justifyContent:"flex-end", padding: "0", alignItems: "end"}}>
                                        <input
                                            type="button"
                                            className="btn btn-md btn-info  btn-flat pull-right"
                                            id="btn-print"
                                            label="Print"
                                            value="Print"
                                            style={{ margin: '1%', width: '200px' }}
                                        />
                                        <input
                                            type="button"
                                            className="btn btn-md btn-warning  btn-flat pull-right"
                                            id="btn-download"
                                            label="Download"
                                            value="Download"
                                            style={{ margin: '1%', width: '200px' }}
                                        />
                                    </div>
                                </caption>
                            </div>
                        </legend>
                    </div>
                </div>
            </ErrorBoundary>
            <p style={{ textAlign: 'center' }}>&copy;2020 afya mashinani</p>
        </div>
    )
}

ReportsComponent.propTypes = {

}

export default ReportsComponent