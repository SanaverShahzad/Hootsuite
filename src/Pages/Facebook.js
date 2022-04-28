import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/Facebook/Hero'
import Here from '../Components/Facebook/Here'
import Card from '../Components/Facebook/Card'
import See from '../Components/Facebook/See'
import Footer from '../Components/Home/Fotter'

export default function Facebook() {
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
