import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import CountyFiltersComponent from './CountyFiltersComponent';
import HouseholdsComponent from './HouseholdsComponent';
import DounutCharts from './DounutCharts';
import MapComponent from './MapComponent';
import SidebarComponent from './SidebarComponent';
import UsersComponent from './UsersComponent';
import ClientsComponent from './ClientsComponent';
import MembersComponent from './MembersComponent';
import FacilitiesComponent from './FacilitiesComponent';
import ReportsComponent from './ReportsComponent';
import DoneClientsComponent from './DoneClientsComponent';

var bodyStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "start",
    flexGrow: "1",
    background: "ghostwhite"
}

function BodyContentComponent (props) {
    return (
        <Router>
            <div className="content row Main-body d-flex wrapper" style={bodyStyles}>
                <div className="col-2 pull-left" id="left-sidebar" style={ { width: "100vw", minHeight: "100vh", display: "flex", flexDirection:"column", justifyContent:"flex-start"} }>
                    <SidebarComponent />
                </div>
                <div className="col-9" id="middle-body-content" style={{ width: "100vw", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent:"flex-start"}}>
                    <Switch>
                        <Route exact path='/' component={CountyFiltersComponent}>
                            <CountyFiltersComponent />
                            <DounutCharts />
                            <MapComponent />
                        </Route>
                        <Route exact path='/users' component={UsersComponent} />
                        <Route exact path='/households' component={HouseholdsComponent} /> 
                        <Route exact path='/clients' component={ClientsComponent} />
                        <Route exact path='/members' component={MembersComponent} />
                        <Route exact path='/facilities' component={FacilitiesComponent} />
                        <Route exact path='/reports' component={ReportsComponent} />
                        <Route exact path='/doneclients' component={DoneClientsComponent} />
                    </Switch>
                </div>
                <div className="col-1 pull-left" id="right-sidebar" style={{ backgroundColor: "whitesmoke", width: "100vw", minHeight: "100vh", display: "flex", flexDirection:"column", justifyContent:"flex-start" }}>
                    <h5>Put something here</h5>
                </div>
            </div>
        </Router>
    )
}

export default BodyContentComponent;