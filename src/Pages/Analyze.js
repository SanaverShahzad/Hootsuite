import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/Analyze/Hero'
import Here from '../Components/Analyze/Here'
import Learn from '../Components/Analyze/Learn'
import See from '../Components/Analyze/See'
import Footer from '../Components/Home/Fotter'


export default function Analyze() {
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

