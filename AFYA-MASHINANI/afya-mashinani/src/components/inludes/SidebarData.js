import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/",
        icon: <FaIcons.FaTachometerAlt/>
    },
    {
        title: "Users",
        path: "/users",
        icon: <FaIcons.FaUserPlus/>
    },
    {
        title: "Households",
        path: "/households",
        icon: <FaIcons.FaHome/>
    },
    {
        title: "Clients",
        path: "/clients",
        icon: <FaIcons.FaPeopleCarry/>
    },
    {
        title: "Members",
        path: "/members",
        icon: <FaIcons.FaBars/>
    },
    {
        title: "Facilities",
        path: "/facilities",
        icon: <FaIcons.FaHospital/>
    },
    {
        title: 'Regions',
        path: '/regions', 
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill/>,
        iconOpen: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: "Add Sub-county",
                path: '/regions/subcounty',
                icon: <IoIcons.IoIosPaper/>
            },
            {
                title: "Add Ward",
                path: '/regions/ward',
                icon: <IoIcons.IoIosPaper/>
            },
            {
                title: "Add Location",
                path: '/regions/location',
                icon: <IoIcons.IoIosPaper/>
            },
            {
                title: "Add Sub-location",
                path: '/regions/sublocation',
                icon: <IoIcons.IoIosPaper/>
            }
        ]
    },
    {
        title: "Reports",
        path: "/reports",
        icon: <FaIcons.FaFile/>
    },
    {
        title: "Done clients",
        path: "/doneclients",
        icon: <FaIcons.FaFile/>
    }
]
