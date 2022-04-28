import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/Insights/Hero'
import Here from '../Components/Insights/Here'
import Card from '../Components/Insights/Card'
import See from '../Components/Insights/See'
import Footer from '../Components/Home/Fotter'
export default function Insights() {
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
