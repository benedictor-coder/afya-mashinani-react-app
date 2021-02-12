import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom';
import HouseholdsComponent from './HouseholdsComponent';
import UsersComponent from './UsersComponent';

function SidebarComponent (props) {
    return (
            <aside className="Main-sidebar pull-left mt-0 mb-0 mx-0" id="main-sidebar">
                <section className="sidebar row mx-1" id="asidebar" >
                    <ul className="Sidebar-menu col-md-12 list-group"  id="sidebar-menu" data-widget="tree">
                        <li className="list-group-item">
                            <Link to='/'>
                                <i className="fa fa-tachometer"></i>
                                <span>Dashboard </span>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to='/users'>
                                <i className="fa fa-user-plus"></i>
                                <span>Users</span>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/households">
                                <i className="fa fa-bars"></i>
                                <span>Households</span>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/clients">
                                <i className="fa fa-group"></i>
                                <span>Clients</span>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/members">
                                <i className="fa fa-list"></i>
                                <span> Members </span>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/facilities">
                                <i className="fa fa-plus-square"></i>
                                <span>Facilities</span>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/regions">
                                <i className="fa fa-plus"></i>
                                <span>Regions</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </Link>
                            <ul className="treeview-menu dropdown-menu">
                                <li data-toggle="modal" data-target="#addSubcountymodal"><Link to="#"><i className="fa fa-circle"></i> Add Sub-county</Link></li>
                                <li data-toggle="modal" data-target="#wardmodal"><Link to="#"><i className="fa fa-circle"></i> Add Ward</Link></li>
                                <li data-toggle="modal" data-target="#locationmodal"><Link to="#"><i className="fa fa-circle"></i> Add Location</Link></li>
                                <li data-toggle="modal" data-target="#subLocationModal"><Link to="#"><i className="fa fa-circle"></i> Add Sub-location</Link></li>
                            </ul>
                        </li>
                        <li className="list-group-item">
                            <Link to="/report">
                                <i className="fa fa-file"></i>
                                <span>Reports</span>
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/doneclients">
                                <i className="fa fa-file"></i>
                                <span>Done Clients</span>
                            </Link>
                        </li>
                    </ul>
                </section>
            </aside>
    )
}

export default SidebarComponent;