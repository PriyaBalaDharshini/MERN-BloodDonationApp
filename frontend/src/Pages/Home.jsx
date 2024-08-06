import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import Featured from '../Components/Featured'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import { Element } from "react-scroll"

const Home = () => {
    return (
        <div>
            <NavBar />

            <Element name='hero'>
                <Hero />
            </Element>

            <Element name='about'>
                <Featured />
            </Element>

            <Element name='contact'>
                <Contact />
            </Element>

            <Footer />
        </div>
    )
}

export default Home