import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from './ErrorBoundary'

HouseholdsComponent.propTypes = {
    
};

function HouseholdsComponent(props) {
    return (
        <div className="row mx-0">
            <section className="row content-header mt-0 mb-0 mx-0" style={{width: "100%", padding: "1% 0"}}>
                <div className="col-md-12 mt-0 mb-0 mx-0" style={{padding: "0"}}>
                    <h5 className="pull-left">Households</h5>
                    <span style={{float: "right"}}>
                        <small>
                            <ol className="breadcrumb pull-right mt-0 mb-0 mx-0" style={{ background: "none" }}>
                                <li><a href="http://localhost/afya_mashinaniCI/dashboard/dash"><i className="fa fa-dashboard"></i> Home</a></li> <span><i className="fa fa-arrow-right"></i> </span> 
                                <li className="active">Dashboard</li><span><i className="fa fa-arrow-right"></i> </span> 
                                <li className="active">Households</li>
                            </ol>
                        </small>
                    </span>
                </div>
            </section>
            <ErrorBoundary>
                <div className="col-md-12 box mt-0 mb-0" style={{ border: "1px skyblue solid", borderRadius: "3px", padding: "1%", width: "100%"}}>
                    <div className="table-responsive-sm">
                        <table className="table table-bordered  table-sm table-hover">
                            <caption>List of households</caption>
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
                                <tr>
                                    <td>Kwanza</td>
                                    <td>mimi</td>
                                    <td>2342</td>
                                    <td>hill</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </ErrorBoundary>
        </div> 
    );
}

export default HouseholdsComponent;