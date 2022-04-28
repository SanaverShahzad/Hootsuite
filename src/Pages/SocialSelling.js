import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/SocialSelling/Hero'
import Panda from '../Components/SocialSelling/Panda'
import Deploy from '../Components/SocialSelling/Deploy'
import Build from '../Components/SocialSelling/Build'
import Protect from '../Components/SocialSelling/Protect'
import Prove from '../Components/SocialSelling/Prove'
import Penmutual from '../Components/SocialSelling/Penmutual'
import Forrest from '../Components/SocialSelling/Forrest'
import Works from '../Components/SocialSelling/Works'
import See from '../Components/SocialSelling/See'
import Footer from '../Components/Home/Fotter'

export default function SocialSelling() {
    return (
        <div>
            <Appbar/>
            <Hero/>
            <Panda/>
            <Deploy/>
            <Build/>
            <Protect/>
            <Prove/>
            <Penmutual/>
            <Forrest/>  
            <Works/>
            <See/>
            <Footer/>
        </div>
    )
}
