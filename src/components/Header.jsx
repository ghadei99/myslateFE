import { Navbar, NavDropdown, NavbarBrand } from "react-bootstrap"
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import MyAccounts from './MyAccountOptions.jsx'
import SignupPage from './SignupPage.jsx'
import { Link } from "react-router-dom"

const Header = ({ }) => {

    const [backgroundColor, setbackgroundColor] = useState('dark');
    const [showAccountList, setshowAccountList] = useState(false)
    const hideAccount = () => setshowAccountList(false)
    // const showAccount = () => setshowAccountList(true)

    const showAccount = () => {
        return (
            setshowAccountList(true)
        )
    }
    const onClickShowHide = (e) => {
        e.preventDefault();
        setshowAccountList(!showAccountList)
    }

    const changeBG = () => {
        if (backgroundColor === 'dark') {
            setbackgroundColor('light')
        } else if (backgroundColor === 'light') {
            setbackgroundColor('dark')
        }
    }


    // Login and Sign up Module

    const [ShowSignupModal, setShowSignupModal] = useState(false)
    const [LoginModal, setLoginModal] = useState(false)

    const openCloseSignUpModal = async () => {
        await setShowSignupModal(!ShowSignupModal)
    }

    // Login and Sign up Module

    return (
        <>
            <div>
                <div className="navbar">
                    <Navbar variant={backgroundColor}>

                        <NavbarBrand className="navbar-logo">
                            <Link className="navbar-logo-link" to='/'>
                                Slates
                            </Link>
                        </NavbarBrand>

                        {/* <GiHamburgerMenu className="hamburger-menu" id={backgroundColor === 'dark' ? '' : 'hamburger-menu-light'} /> */}

                        <div className="right-options">

                            <NavDropdown title="Language" className="dropdown" id={backgroundColor === 'dark' ? 'dropdown-dark' : 'dropdown-light'} >
                                <NavDropdown.Item className="navDropdown-item" href="#action/3.1">English</NavDropdown.Item>
                                <NavDropdown.Item className="navDropdown-item" href="#action/3.2">Hindi</NavDropdown.Item>
                                <NavDropdown.Item className="navDropdown-item" href="#action/3.4">French</NavDropdown.Item>
                                {/* <NavDropdown.Item className="navDropdown-item" href="#action/3.3">German</NavDropdown.Item> */}
                                {/* <NavDropdown.Divider /> */}
                                {/* <NavDropdown.Item className="navDropdown-item" href="#action/3.4">French</NavDropdown.Item> */}
                            </NavDropdown>


                            <div onClick={onClickShowHide} onMouseEnter={showAccount} onMouseLeave={hideAccount}>
                                <a className={backgroundColor === 'dark' ? 'my-account' : 'my-account-light'} href="#">
                                    <FontAwesomeIcon icon={faUser} />
                                </a>
                            </div>
                        </div>
                    </Navbar>
                </div>

                <MyAccounts showAccount={showAccount} hideAccount={hideAccount} openCloseSignUpModal={openCloseSignUpModal} showAccountList={showAccountList} />
                <div id='react-mod' >
                    <SignupPage openCloseSignUpModal={openCloseSignUpModal} ShowSignupModal={ShowSignupModal} />
                </div>

            </div>
        </>
    )
}

export default Header