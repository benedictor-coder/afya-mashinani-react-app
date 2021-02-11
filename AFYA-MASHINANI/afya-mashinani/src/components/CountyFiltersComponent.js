import React, { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';

function CountyFiltersComponent () {
    const [inputDisable, setInputDisable] = useState(true);
    // const [filterBtnDisable, setFilterBtnDisable] = useState(true);

    const [ county, setCounty ] = useState("");
    const [ subcounty, setSubcounty ] = useState("");
    const [ ward, setWard ] = useState("");
    const [ location, setLocation ] = useState("");
    const [sublocation, setSublocation] = useState("");
    
    // function checkFormInputs() {
    //     let formelements = document.querySelectorAll('input');
    //     for (let i = 0; i < formelements.length; i++) {
    //         if (formelements[i].value=== "") {
    //             formelements[i].setAttribute('disabled', "");
                
    //             // console.log('fields are empty') 
    //         } else {
    //             formelements[i].setAttribute('enabled', '')
    //         }
    //     }
    // }

    function validateLocationFilter() {
            if (!county) {
                // alert("Select county")

            } else if (!subcounty) {
                // alert("Select sub-county")
            } else if (!ward) {
                // alert("Select ward")
            } else if (!location) {
                // alert("Select location")
            } else if (!sublocation) {
                // alert("Select sublocation")
            } else {
                return
            }
    }

    function handleLocationFilters (e) {
        validateLocationFilter();
        e.preventDefault();
    }

    var inputStyles = {
        border: "0.1px skyblue solid",
        borderRadius: "3px",
    }

    return (
        <div className="row mx-0">
            <section className="row content-header mt-0 mb-0 mx-0" style={{width: "100%", padding: "1% 0"}}>
                <div className="col-md-12 mt-0 mb-0 mx-0" style={{padding: "0"}}>
                    <h5 className="mt-2 mb-0 mx-0" style={{float: "left"}}>Dashboard</h5>
                    <span style={{float: "right"}}>
                        <small>
                            <ol className="breadcrumb pull-right mt-0 mb-0 mx-0" style={{ background: "none" }}>
                                <li><a href="http://localhost/afya_mashinaniCI/dashboard/dash"><i className="fa fa-dashboard"></i> Home</a></li> <span><i className="fa fa-arrow-right"></i> </span> 
                                <li className="active">Dashboard</li>
                            </ol>
                        </small>
                    </span>
                </div>
            </section>
            <ErrorBoundary>
                <div className="col-md-12 box mt-0 mb-0" style={{ border: "1px skyblue solid", borderRadius: "3px", padding: "1%", width: "100%"}}>
                    <form action="#" method="POST" onSubmit={ e => handleLocationFilters(e) } className="row col-12" id="filter-form" name="filter-form">
                        <div className="col-md-2">
                            <label htmlFor="county">County</label>
                            <input type="text" className="form-control form-control-sm" name="county" id="county" list="county-datalist"
                                style={inputStyles}
                                value={ county }
                                onChange={ e => setCounty(e.target.value) }
                                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            <datalist id="county-datalist">
                                <option value="0">Select County</option>    
                        </datalist>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="subcounty">Sub-county</label>
                            <input type="text" className="form-control form-control-sm" name="subcounty" id="subcounty" list="subcounty-datalist"
                                style={inputStyles}
                                value={ subcounty }
                                onChange={ (e) => {
                                    setSubcounty(e.target.value);
                                }}
                                disabled= {inputDisable}
                                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  />
                            <datalist id="subcounty-datalist">
                                <option value="0">Select Sub-county</option>               
                            </datalist>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="ward">Ward</label>
                            <input type="text" className="form-control form-control-sm" name="ward" id="ward" list="ward-datalist"
                                style={inputStyles}
                                value={ ward }
                                onChange={e => setWard(e.target.value)}
                                disabled={inputDisable}
                                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  />
                            <datalist id="ward-datalist">
                                <option value="0">Select ward</option>              
                            </datalist>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="location">Location</label>
                            <input type="text" className="form-control form-control-sm" name="location" id="location" list="location-datalist"
                                style={inputStyles}
                                value={ location }
                                onChange={e => setLocation(e.target.value)}
                                disabled={inputDisable}
                                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            <datalist id="location-datalist">
                                <option value="0">Select Location</option>                           
                            </datalist>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="sublocation">Sub-Location</label>
                            <input type="text" className="form-control form-control-sm" name="sublocation" id="sublocation" list="sublocation-datalist"
                                style={inputStyles}
                                value={ sublocation }
                                onChange={e => setSublocation(e.target.value)}
                                disabled={inputDisable}
                                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"  />
                            <datalist id="sublocation-datalist">
                                <option value="0">Select Sub-location</option>                                  
                            </datalist>
                        </div>
                        
                        <div className="col-2 box-footer">
                            <button type="submit" id="filter" className="btn btn-primary btn-sm btn-group mx-0"
                                style={{ margin: "4vh 0" }}><i className="fa fa-refresh fa-sm mt-1 text-white-50"></i>Filter</button>
                        </div>
                    </form>
                </div>
            </ErrorBoundary>
        </div>  
    )
}

export default CountyFiltersComponent;