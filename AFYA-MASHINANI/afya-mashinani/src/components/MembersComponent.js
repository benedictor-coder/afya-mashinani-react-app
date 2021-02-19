import React from 'react'
import PropTypes from 'prop-types'
import ErrorBoundary from './ErrorBoundary'
import Table from './TableComponent'


function MembersComponent(props) {
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
    const btnviewAttr = {
        type: "button",
        className: "btn btn-sm btn-warning  btn-flat pull-right",
        id: "btn-view",
        label: "View",
        value: "View",
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
        React.createElement('button', btnviewAttr, 'view'),
        React.createElement('button', btndeletetAttr, 'delete')
    )
    const caption = "List of members"
    const theadData = ['Client no','House no', 'Name', 'Age', 'Actions']
    const tbodyData = [
        {
            id: "1",
            items: ["21","12223", "Mimi", "23", actionsBtnDiv]
        },
        {
            id: "2",
            items: ["009","222112", "Wewe", "56", actionsBtnDiv]
        },
        {
            id: "3",
            items: ["4112","7801", "Benedictor", "27", actionsBtnDiv]
        }
    ]

    return (
        <div>
            <section className="row content-header mt-0 mb-0 mx-0" style={{width: "100%", padding: "1% 0"}}>
                <div className="col-md-12 mt-0 mb-0 mx-0" style={{padding: "0"}}>
                    <h5 className="pull-left mt-2">Members</h5>
                    <span style={{float: "right"}}>
                        <small>
                            <ol className="breadcrumb pull-right mt-0 mb-0 mx-0" style={{ background: "none" }}>
                                <li><a href="http://localhost/afya_mashinaniCI/dashboard/dash"><i className="fa fa-dashboard"></i> Home</a></li> <span><i className="fa fa-arrow-right"></i> </span> 
                                <li className="active">Dashboard</li><span><i className="fa fa-arrow-right"></i> </span> 
                                <li className="active">Members</li>
                            </ol>
                        </small>
                    </span>
                </div>
            </section>
            <ErrorBoundary>
                <div className="col-md-12 box mt-0 mb-0" style={{ border: "1px skyblue solid", borderRadius: "3px", padding: "1%", width: "100%"}}>
                    <div className="table-responsive-sm">
                        <Table theadData={theadData} tbodyData={tbodyData} caption={caption} />
                    </div>
                </div>
            </ErrorBoundary>
        </div>
    )
}

MembersComponent.propTypes = {

}

export default MembersComponent

