import Modal from 'react-modal'
import axios from 'axios'
import { useState } from 'react'
import Cookies from 'universal-cookie/es6'
import { store } from '../reduxFolder/store/ConfigureStore'
import { setToken } from '../reduxFolder/actions/tokenAction'

const stores = store()

const Signup = ({ openCloseSignUpModal, ShowSignupModal, settingToken }) => {

    const [loginFlag, setLoginFlag] = useState(true)
    const [loginError, setLoginError] = useState(false)
    const [signupError, setSignupErrorr] = useState(false)
    const [otpSent, setOtpSent] = useState(false)
    const [passwordSame, setPasswordSame] = useState(false)

    const switchLoginRegister = () => {
        setLoginFlag(!loginFlag)
    }

    const registration = (e) => {
        e.preventDefault()
        if (e.target[3].value === e.target[4].value) {
            axios({
                method: 'post',
                url: 'https://writetoslate.herokuapp.com/sendOtp',
                data: {
                    "userName": e.target[0].value,
                    "name": e.target[1].value,
                    "email": e.target[2].value,
                    "password": e.target[3].value,
                    "confPassword": e.target[4].value
                }
            }).then((response) => {
                if (response.status == 201) {
                    setPasswordSame(false)
                    setSignupErrorr(false)
                    setOtpSent(true)
                    // switchLoginRegister()
                }
            }).catch((error) => {
                setPasswordSame(false)
                setOtpSent(false)
                setSignupErrorr(true)
            })
        } else {
            setOtpSent(false)
            setSignupErrorr(false)
            setPasswordSame(true)
        }
    }

    const login = (e) => {
        e.preventDefault()
        const stores = store()
        // const dispatch = useDispatch()
        const cookies = new Cookies();
        axios({
            method: 'post',
            url: 'https://writetoslate.herokuapp.com/users/login',
            data: {
                "email": e.target[0].value,
                "password": e.target[1].value
            }
        }).then((response) => {
            stores.dispatch(setToken({ token: response.data.token }))
            openCloseSignUpModal()
            window.location.reload(false);
        }).catch((error) => {
            stores.dispatch(setToken({ token: undefined }))
            setLoginError(true)
            // console.log('error occured:- ', error)
        })
    }

    // import { store } from '../reduxFolder/store/ConfigureStore'
    // const stores = store()
    // console.log('Task is ', stores.getState().tokens.token)

    return (

        <>
            <div >
                <Modal
                    isOpen={ShowSignupModal}
                    onRequestClose={openCloseSignUpModal}
                    contentLabel="Example Modal"
                    className={loginFlag == true ? "main-modal" : "main-signup-modal"}
                >
                    <div className="button-box">
                        <button type='button' className={loginFlag ? 'toggle-btn-active' : 'toggle-btn'} onClick={switchLoginRegister}>Log In</button>
                        <button type='button' className={!loginFlag ? 'toggle-btn-active' : 'toggle-btn'} onClick={switchLoginRegister}>Sign Up</button>
                    </div>
                    <form action="" className={loginFlag ? 'input-area' : 'input-area-disabled'} onSubmit={login}>
                        <input type='email' className='input-field' placeholder='Email Id' />
                        <input type='password' className='input-field' placeholder='Password' />
                        <input className='check-box' type="checkbox" />
                        <span>Remember Password!</span>
                        {loginError ? <p className='pwd-error'> Incorrect userName or passowrd !</p> : ''}
                        <button type='submit' className='submit-btn'> Log In</button>
                    </form>
                    <form action="" className={!loginFlag ? 'input-area' : 'input-area-disabled'} onSubmit={registration}>
                        <input className='input-field' placeholder='User Name' />
                        <input className='input-field' placeholder='Your Name' />
                        <input type='email' className='input-field' placeholder='Email Id' />
                        <div className='password'>
                            <input type='password' className='input-field' placeholder='Password' />
                            <input type='password' className='input-field' placeholder='Password Again' />
                        </div>
                        {/* <input className='check-box' type="checkbox" />
                        <span>I accept Terms and Conditions</span> */}
                        {passwordSame ? <p className='signup-error'> Password did not match! please check again. </p> : ''}
                        {signupError ? <p className='signup-error'>Something went wrong!, please try again!</p> : ''}
                        {otpSent ? <p className='otp-sent'>Otp sent to your email please confirm! </p> : ''}
                        <button type='submit' className='submit-btn'> Sign Up</button>
                    </form>
                </Modal>
            </div>
        </>
    )
}




export default Signup