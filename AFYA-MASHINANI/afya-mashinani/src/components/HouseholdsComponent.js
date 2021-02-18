import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from './ErrorBoundary'
import Table from './TableComponent';
HouseholdsComponent.propTypes = {
    
};

function HouseholdsComponent(props) {
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
     const btnviewAttr = {
        type: "button",
        className: "btn btn-sm btn-warning  btn-flat pull-right",
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
        React.createElement('button', btnviewAttr, 'view'),
        React.createElement('button', btndeletetAttr, 'delete')
    )
    const caption="List of households"
    const theadData = ['Sub-location', 'Household name', 'Landmark','Actions']
    const tbodyData = [
        {
            id: "1",
            items: ["Kwanza", "Kwetu", "Mountain",actionsBtnDiv]
        },
        {
            id: "2",
            items: ["Kwanza", "Kwetu", "Mountain"]
        },
        {
            id: "3",
            items: ["Kwanza", "Kwetu", "Mountain"]
        }
    ]

    return (
        <div className="row mx-0">
            <section className="row content-header mt-0 mb-0 mx-0" style={{width: "100%", padding: "1% 0"}}>
                <div className="col-md-12 mt-0 mb-0 mx-0" style={{padding: "0"}}>
                    <h5 className="pull-left mt-2">Households</h5>
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
                        <Table theadData={theadData} tbodyData={tbodyData} caption={ caption }/> 
                    </div>
                </div>
            </ErrorBoundary>
        </div> 
    );
}

export default HouseholdsComponent;