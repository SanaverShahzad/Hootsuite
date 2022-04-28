import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/Monitor/Hero'
import Here from '../Components/Monitor/Here'
import Learn from '../Components/Monitor/Learn'
import See from '../Components/Monitor/See'
import Footer from '../Components/Home/Fotter'


export default function Monitor() {
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
