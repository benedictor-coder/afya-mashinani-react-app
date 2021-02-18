import React from 'react'
import PropTypes from 'prop-types'
import ErrorBoundary from './ErrorBoundary'
import Table from './TableComponent'


function DoneClientsComponent(props) {
    const caption = "List of done clients"
    const theadData = ['House no', 'Name', 'Age']
    const tbodyData = [
        {
            id: "1",
            items: ["12223", "Mimi", "23"]
        },
        {
            id: "2",
            items: ["222112", "Wewe", "56"]
        },
        {
            id: "3",
            items: ["7801", "Benedictor", "27"]
        }
    ]
    return (
        <div>
            <section className="row content-header mt-0 mb-0 mx-0" style={{width: "100%", padding: "1% 0"}}>
                <div className="col-md-12 mt-0 mb-0 mx-0" style={{padding: "0"}}>
                    <h5 className="pull-left mt-2">Done clients</h5>
                    <span style={{float: "right"}}>
                        <small>
                            <ol className="breadcrumb pull-right mt-0 mb-0 mx-0" style={{ background: "none" }}>
                                <li><a href="http://localhost/afya_mashinaniCI/dashboard/dash"><i className="fa fa-dashboard"></i> Home</a></li> <span><i className="fa fa-arrow-right"></i> </span> 
                                <li className="active">Dashboard</li><span><i className="fa fa-arrow-right"></i> </span> 
                                <li className="active">Done Clients</li>
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

DoneClientsComponent.propTypes = {

}

export default DoneClientsComponent

