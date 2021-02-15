import React from "react";
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
function FooterComponent(props) {
    return (
        <footer className="col-12 main-footer">
            <Router>
                <div className="pull-right hidden-xs">
                    <b>Version</b> 1.0.0
                </div>
                <strong>Copyright &copy; 2020 <Link to="#" target="_self">Hillcos Solutions Limited</Link>.</strong> All rights
                reserved.
            </Router>
        </footer>
    )
}

export default FooterComponent;