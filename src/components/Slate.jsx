
import Header from "./Header.jsx"
import LeftOptions from "./LeftOptions.jsx"
import ScrollComponent from "./InfinityScrolling.jsx"
import { useState, React } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Pencil from "./PencilForMobile.jsx"
import About from "./About.jsx"
import Homepage from "./Homepage.jsx"
const Slate = () => {

    return (
        <div>
            {/* <Header token={cookies.get('token')} changingSearchUser={changingSearchUser} /> */}


            <Router>
                <Header/>
                <Routes>
                    <Route path='/' element={<Homepage/>}/>
                    <Route path='/about' element={<About />} />
                </Routes>
            </Router>
        </div>


    )
}


export default Slate