import React from 'react';
import {
    BrowserRouter as Router,
    // Link,
    // Switch,
    // Route
} from 'react-router-dom';
import CountyFiltersComponent from './CountyFiltersComponent';
import HouseholdsComponent from './HouseholdsComponent';
import DounutCharts from './DounutCharts';
import MapComponent from './MapComponent';
import SidebarComponent from './SidebarComponent';
import UsersComponent from './UsersComponent';

var bodyStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "start",
    flexGrow: "1",
    background: "ghostwhite"
}

function BodyContentComponent () {
    return (
        <Router>
            <div className="content row Main-body d-flex wrapper" style={bodyStyles}>
                <div className="col-2 pull-left" style={ { width: "100vw", minHeight: "100vh", display: "flex", flexDirection:"column", justifyContent: "center"} }>
                    <SidebarComponent />
                </div>
                <div className="col-8 justify-center" style={ { width: "100vw", minHeight: "100vh", display: "flex", flexDirection:"column", justifyContent: "center"} }>
                    {/* <CountyFiltersComponent /> */}
                    {/* <UsersComponent />
                    <HouseholdsComponent/>  */}
                    {/* <DounutCharts />
                    <MapComponent /> */}
                </div>
                <div className="col-2 pull-left" style={{ backgroundColor: "whitesmoke", width: "100vw", minHeight: "100vh", display: "flex", flexDirection:"column", justifyContent: "center" }}>
                    <h5>Put some content here</h5>
                </div>
            </div>
        </Router>
    )
}

export default BodyContentComponent;