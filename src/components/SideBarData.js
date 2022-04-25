import React, { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { BsFillPencilFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GiNotebook } from 'react-icons/gi'
import { FaUserFriends } from 'react-icons/fa'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Write',
        path: '/',
        icon: <BsFillPencilFill />,
        cName: 'nav-text'
    },
    // {
    //     title: 'My Posts',
    //     path: '/',
    //     icon: <GiNotebook />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Contacts',
    //     path: '/',
    //     icon: <FaUserFriends />,
    //     cName: 'nav-text'
    // }
]