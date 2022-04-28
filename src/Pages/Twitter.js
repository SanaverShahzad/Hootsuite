import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/Twitter/Hero'
import Here from '../Components/Twitter/Here'
import Card from '../Components/Twitter/Card'
import See from '../Components/Twitter/See'
import Footer from '../Components/Home/Fotter'
export default function Twitter() {
    return (
        <div>
            <Appbar/>
            <Hero/>
            <Here/>
            <Card/>
            <See/>
            <Footer/>
        </div>
    )
}
