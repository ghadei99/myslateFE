
import { AiFillLinkedin } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'


const About = () => {

    return (
        <>
            <div className='about-main-container'>
                <div className='about-page-dummybox'>
                    <div className='dot dot1'></div>
                    <div className='dot dot2'></div>
                    <div className='dot dot3'></div>
                </div>

                <div className='about-page-container'>
                    <div className='div-image'>
                        <img className="about-images" src='https://i.ibb.co/0Dvqqcq/Mern.jpg' />
                    </div>
                    <h1 className='about-header'>Hi, I'm Chandra </h1>
                    <div>
                        <div className='about-container'>
                            <div className="about">
                                <p className='tech'>
                                    This application is build with React js (with React redux and redux persist), Mongodb, Express js and Node JS
                                </p>
                                <p className='profile-info' >I am reachable at  <SiGmail className='gmail' />  Ch.ghadei@gmail.com
                                    <br />
                                    Linkedin :-
                                    <button className='linkedin-btn'>
                                        <a href='https://www.linkedin.com/in/chandrakanta-ghadei-79b5b11a3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXslEXYYyRlyhmy4gHdag6g%3D%3D' target='_blank' >
                                            <AiFillLinkedin />
                                        </a>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}

export default About;