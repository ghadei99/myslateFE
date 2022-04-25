import { useState } from "react"
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

import { Link } from "react-router-dom"
import { SidebarData } from "./SideBarData"
import { IconContext } from "react-icons"
import { BsPenFill } from 'react-icons/bs'
import { FaPhotoVideo } from 'react-icons/fa'
import PostSomething from './PostSomething.jsx'
import { AiFillHome } from 'react-icons/ai'
import { BsFillPencilFill } from 'react-icons/bs'
import ProfilePicUpload from "./ProfilePic.jsx"
import { setProfilepicModal } from "../reduxFolder/actions/ProfilePicModal"
import { store } from "../reduxFolder/store/ConfigureStore"


const stores = store()

const LeftOption = () => {
    const [sidebar, setsidebar] = useState(false);
    const showSidebar = () => setsidebar(!sidebar)
    const [postModalFlag, setPostModal] = useState(false)
    const postModalSwitch = () => {
        setPostModal(!postModalFlag)
    }

    const [profilePicModal, setProfilePicModal] = useState(false)
    const profilePicUpload = () => {
        setProfilePicModal(!profilePicModal)
    }


    return (
        <>
            <IconContext.Provider value={{ color: '#00FFFF' }}>
                <div className={!sidebar ? 'sidebar-disabled' : 'sidebar'}>
                    <div className="navbars">
                        <div className='menu-bars'>
                            {sidebar ? <AiOutlineClose onClick={showSidebar} /> : <GiHamburgerMenu onClick={showSidebar} />}
                        </div>
                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className="nav-menu-items">

                            <li key='0' className='nav-text'>
                                <Link to='/' >
                                    <AiFillHome />
                                    <span>
                                        Home
                                    </span>
                                </Link>
                            </li>
                            <li key='1' className='nav-text'>
                                <Link onClick={postModalSwitch} to='/' >
                                    <BsFillPencilFill />
                                    <span>
                                        Write
                                    </span>
                                </Link>
                            </li>
                            <li key='2' className='nav-text'>
                                <Link onClick={profilePicUpload} to='/' >
                                    <FaPhotoVideo />
                                    <span className="leftoption-nav-text">
                                        Update profile pic
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </IconContext.Provider>

            <div>
                <PostSomething postModalFlag={postModalFlag} postModalSwitch={postModalSwitch} />
            </div>
            <div>
                <ProfilePicUpload postModalFlag={profilePicModal} postModalSwitch={profilePicUpload} />
            </div>
        </>
    )
}



export default LeftOption