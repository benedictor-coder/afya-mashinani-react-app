import React from 'react';

function HeaderComponent(props) {
    let sidebarMenu = document.getElementById('main-sidebar ');

    const handleSidebarMenuClick = function () {
        sidebarMenu.style.display="none"
    }

    return (   
        
        <nav className="navbar navbar-expand-lg sticky-top navbar-light" style={{backgroundColor: "#47add5", display:"flex", flexDirection: "row", justifyContent: "space-between", height: "6vh", width: "100vw"}}>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <div className="navbar-collapse col-md-2 " id="thelogo">
                    <span className="navbar-brand mb-0">
                    {/*<img src="assets/images/mabs.gif" alt="logo" id="afyamashinani-logo" />*/ }
                    <h6 className="App-link-logo">Afya Mashinani</h6>
                    </span>
                    
                </div>
                <a href="some link"className="pull-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ color: "white" }}
                    onClick={handleSidebarMenuClick}
                >
                    <i className="fa fa-bars"></i>
                </a>
                <div className="col-md-10">
                    <ul className="nav navbar-nav mb-2" style={ {float: "right", margin:"0 5%"} }>
                        <li className="dropdown user user-menu" id="user-menu-items">
                            <a href="some link" className="dropdown-toggle mt-0 " data-toggle="dropdown">
                                <i className="fa fa-user-circle"></i>
                                <span><small style={{padding:"1% 0"}}>Welcome: Cosmas Bunywera</small></span>
                                <span className="hidden-xs"></span>
                            </a>
                            <ul className="dropdown-menu pull-right"  id="user-dropdown-menu">
                                <ul className="list-group" style={ { margin: "0"}}>
                                    <li className="list-group-item" style={ { background: "ghostwhite" } }>
                                        <a href="some link" className=" list-group-item btn btn-info btn-flat btn-sm" style={ { backgroundColor:"#47add5", color: "white" } }><i className="fa fa-gear" style={{marginRight: "10px"}}></i> <span>Settings</span></a>
                                    </li>
                                    <li className="list-group-item" style={ { background: "ghostwhite" } } data-toggle="modal" data-target="#reset-password-modal">
                                        <a href="some link" className=" list-group-item btn btn-info btn-flat btn-sm" style={ {backgroundColor:"#47add5", color: "white" } }><i className="fa fa-lock" style={ {marginRight: "10px"}}></i> <span>Change password</span></a>
                                    </li>
                                    <li className="list-group-item" style={ {background: "ghostwhite"}}>
                                        <a href="some link" className="btn btn-info btn-flat btn-sm"><i className="fa fa-user-circle" style={ { marginRight: "10px" } }></i> <span>Logout</span></a>
                                    </li>
                                </ul> 
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComponent;