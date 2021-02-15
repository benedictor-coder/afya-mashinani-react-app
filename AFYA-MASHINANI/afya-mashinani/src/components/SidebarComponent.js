import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './inludes/SidebarData';


function SidebarComponent (props) {
    const [ subMenu, setSubMenu ] = useState(false);
    const showSubNav = () => setSubMenu(true);

    let span = {
        margin: "0 10px"
    }

    return (
        <aside className="Main-sidebar pull-left mt-0 mb-0 mx-0" id="main-sidebar">
            <section className="sidebar row mx-1" id="asidebar" >
                <ul className="Sidebar-menu col-md-12 list-group" id="sidebar-menu" data-widget="tree">
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={ index } className={ item.className }>
                                <Link to={ item.path } onClick={ item.subNav && showSubNav }>
                                    { item.icon}
                                    <span style={ span }>{ item.title }</span>
                                    <div>
                                        { item.subNav && subMenu ? item.iconOpen : item.subNav ? item.iconClosed : null }
                                    </div>
                                </Link>
                                {subMenu && item.subNav.map((item, index) => {
                                    return (
                                        <Link to={ item.path } key={ index }>
                                            {item.icon }
                                            <span style={ span }>{ item.title }</span>
                                        </Link>
                                    )
                                })}
                            </li>
                        )
                    })}
                </ul>
            </section>
        </aside>
    )
}

export default SidebarComponent;