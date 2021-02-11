import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom';
import HouseholdsComponent from './HouseholdsComponent';
import UsersComponent from './UsersComponent';
function SidebarComponent () {
    return (
        <Router>
        <aside className="Main-sidebar pull-left mt-0 mb-0 mx-0" id="main-sidebar">
            <section className="sidebar row mx-1" id="asidebar" >
                <ul className="Sidebar-menu col-md-12 list-group"  id="sidebar-menu" data-widget="tree">
                    <li className="list-group-item">
                        <a href='some link'>
                            <i className="fa fa-tachometer"></i>
                            <span>Dashboard </span>
                        </a>
                    </li>
                    <li className="list-group-item">
                        <Link to="./UsersComponent.js">
                            <i className="fa fa-user-plus"></i>
                            <span>Users</span>
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="./HouseholdsComponent.js">
                            <i className="fa fa-bars"></i>
                            <span>Households</span>
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <a href="some link">
                            <i className="fa fa-group"></i>
                            <span>Clients</span>
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a href="some link">
                            <i className="fa fa-list"></i>
                            <span> Members </span>
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a href="some link">
                            <i className="fa fa-plus-square"></i>
                            <span>Facilities</span>
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a href="some link">
                            <i className="fa fa-plus"></i>
                            <span>Regions</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu dropdown-menu">
                            <li data-toggle="modal" data-target="#addSubcountymodal"><a href="#"><i className="fa fa-circle"></i> Add Sub-county</a></li>
                            <li data-toggle="modal" data-target="#wardmodal"><a href="#"><i className="fa fa-circle"></i> Add Ward</a></li>
                            <li data-toggle="modal" data-target="#locationmodal"><a href="#"><i className="fa fa-circle"></i> Add Location</a></li>
                            <li data-toggle="modal" data-target="#subLocationModal"><a href="#"><i className="fa fa-circle"></i> Add Sub-location</a></li>
                        </ul>
                    </li>
                    <li className="list-group-item">
                        <a href="some link">
                            <i className="fa fa-file"></i>
                            <span>Reports</span>
                        </a>
                    </li>
                    <li className="list-group-item">
                        <a href="some link">
                            <i className="fa fa-file"></i>
                            <span>Done Clients</span>
                        </a>
                    </li>
                </ul>
            </section>
            <Switch>
                <Route exact path={`/HouseholdsComponent.js`} component={HouseholdsComponent}>
                    <HouseholdsComponent />
                </Route>
                <Route exact path='/UsersComponent.js'>
                    <UsersComponent />
                </Route>
            </Switch>        
            </aside>
            </Router>
    )
}

export default SidebarComponent;