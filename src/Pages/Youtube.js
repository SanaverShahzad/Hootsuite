import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/Youtube/Hero'
import Here from '../Components/Youtube/Here'
import Card from '../Components/Youtube/Card'
import See from '../Components/Youtube/See'
import Footer from '../Components/Home/Fotter'
export default function Youtube() {
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
