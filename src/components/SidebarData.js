import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from "react-icons/io";

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
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Diary', 
        path: '/diary',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Log', 
        path: '/log',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'FAQ', 
        path: '/faq',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'nav-text'
    },
    {
        title: 'Sign out', 
        path: '/signout',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Friends',
        path: '/friends',
        icon: <FaIcons.FaUsers />,
        cName: 'nav-text'
    },
    {
        title: 'Find Friends?',
        path: '/find',
        icon: <FaIcons.FaUsers />,
        cName: 'nav-text'
    }
]
