import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { DropdownButton } from 'react-bootstrap'
import { useState } from 'react'
import { store } from '../reduxFolder/store/ConfigureStore'
import { setToken } from '../reduxFolder/actions/tokenAction'
import { setProfilepicModal } from '../reduxFolder/actions/ProfilePicModal'
import { Link } from 'react-router-dom'
import ProfilePicUpload from './ProfilePic.jsx'


const stores = store()

const MyAccounts = ({ showAccountList, showAccount, hideAccount, openCloseSignUpModal }) => {

    const logout = () => {
        stores.dispatch(setToken({ token: undefined }))
        window.location.reload(false);
    }

    const openCloseProfilePicModal = () => {
        stores.dispatch(setProfilepicModal({ flag: !stores.getState().modalFlags.flag }))
    }

    const [profilePicModal, setProfilePicModal] = useState(false)
    const profilePicUpload = () => {
        setProfilePicModal(!profilePicModal)
    }


    return (
        <>
            <div onMouseEnter={showAccount} onMouseLeave={hideAccount} onClick={showAccount} className={showAccountList ? 'account-list-show' : 'account-list-disable'}>
                <div className='account-box'>
                    {/* <div> */}
                    <nav>
                        <ul>
                            <li key='0'>
                                {true ? <button onClick={openCloseSignUpModal}>
                                    Login
                                </button>
                                    :
                                    <button onClick={logout}>
                                        Log out
                                    </button>}

                            </li>
                            <li className='profileUpload-mobile' key='2'>
                                <button onClick={profilePicUpload}>
                                    Profile Pic
                                </button>
                            </li>
                            <li key='1'>
                                <Link className='about-Link' to='/about'>
                                    <button>
                                        About
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* </div> */}
                </div>

            </div>
            <div>
                <ProfilePicUpload postModalFlag={profilePicModal} postModalSwitch={profilePicUpload} />
            </div>
        </>
    )
}


export default MyAccounts