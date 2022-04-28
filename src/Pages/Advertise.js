import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/Advertise/Hero'
import Here from '../Components/Advertise/Here'
import Learn from '../Components/Advertise/Learn'
import See from '../Components/Advertise/See'
import Footer from '../Components/Home/Fotter'

export default function Advertise() {
    return (
        <div>
            <Appbar/>
            <Hero/>
            <Here/>
            <Learn/>
            <See/>
            <Footer/>
        </div>
    )
}
