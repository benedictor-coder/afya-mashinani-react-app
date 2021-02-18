import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/",
        icon: <FaIcons.FaTachometerAlt  />,
        className: "list-group-item"
    },
    {
        title: "Users",
        path: "/users",
        icon: <FaIcons.FaUserPlus/>,
        className: "list-group-item"
    },
    {
        title: "Households",
        path: "/households",
        icon: <FaIcons.FaHome />,
        className: "list-group-item"
    },
    {
        title: "Clients",
        path: "/clients",
        icon: <FaIcons.FaPeopleCarry/>,
        className: "list-group-item"
    },
    {
        title: "Members",
        path: "/members",
        icon: <FaIcons.FaBars/>,
        className: "list-group-item"
    },
    {
        title: "Facilities",
        path: "/facilities",
        icon: <FaIcons.FaHospital/>,
        className: "list-group-item"
    },
    {
        title: 'Regions',
        path: '/regions', 
        icon: <FaIcons.FaPlus />,
        className: "list-group-item",
        dataToggle:"dropdown",
        ariaHaspopup:"true",
        ariaExpanded:"false",
        iconClosed: <RiIcons.RiArrowDownFill/>,
        iconOpen: <RiIcons.RiArrowUpFill />,
        
        subNav: [
            {
                title: "Add Sub-county",
                path: '/regions/subcounty',
                icon: <IoIcons.IoIosPaper/>,
                className: "nav-text"
            },
            {
                title: "Add Ward",
                path: '/regions/ward',
                icon: <IoIcons.IoIosPaper />,
                className: "nav-text"
            },
            {
                title: "Add Location",
                path: '/regions/location',
                icon: <IoIcons.IoIosPaper />,
                className: "nav-text"
            },
            {
                title: "Add Sub-location",
                path: '/regions/sublocation',
                icon: <IoIcons.IoIosPaper />,
                className: "nav-text"
            }
        ]
    },
    {
        title: "Reports",
        path: "/reports",
        icon: <FaIcons.FaFile/>,
        className: "list-group-item"
    },
    {
        title: "Done clients",
        path: "/doneclients",
        icon: <FaIcons.FaPen/>,
        className: "list-group-item"
    }
]
