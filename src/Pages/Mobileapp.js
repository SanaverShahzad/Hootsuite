import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/Mobileapp/Hero'
import Here from '../Components/Mobileapp/Here'
import Discover from '../Components/Mobileapp/Discover'
import Trust from '../Components/Mobileapp/Trust'
import See from '../Components/Mobileapp/See'
import Footer from '../Components/Home/Fotter'

export default function Mobileapp() {
    return (
        <div>
            <Appbar/>
            <Hero/>
            <Here/>
            <Discover/>
            <Trust/>
            <See/>
            <Footer/>
        </div>
    )
}

