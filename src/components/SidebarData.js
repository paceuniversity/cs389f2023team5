import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from "react-icons/io";
import { IoAccessibility } from "react-icons/io5"; 
import { FaCalendarAlt } from "react-icons/fa"; 
import { MdOutlineAutoStories } from "react-icons/md";
import { MdOutlineHelpCenter } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import { FaToolbox } from "react-icons/fa";







export const SidebarData = [
    {
        title: 'Home', 
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Regimen', 
        path: '/regimen',
        icon: <FaCalendarAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Diary', 
        path: '/diary',
        icon: <MdOutlineAutoStories />,
        cName: 'nav-text'
    },
    {
        title: 'Database',
        path: '/database',
        icon: <IoAccessibility/>,
        cName: 'nav-text'
    },
    {
        title: 'Tools',
        path: '/friends',
        icon: <FaToolbox  />,
        cName: 'nav-text'
    },
    {
        title: 'Friends',
        path: '/friends',
        icon: <FaIcons.FaUsers />,
        cName: 'nav-text'
    },
    {
        title: 'FAQ', 
        path: '/faq',
        icon: <MdOutlineHelpCenter />,
        cName: 'nav-text'
    },
    {
        title: 'Sign out', 
        path: '/signout',
        icon: <GoSignOut />,
        cName: 'nav-text'
    },
    {
        title: 'Find Friends?',
        path: '/find',
        icon: <FaIcons.FaUsers />,
        cName: 'nav-text'
    }
]