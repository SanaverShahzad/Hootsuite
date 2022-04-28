import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/Instagaram/Hero'
import Here from '../Components/Instagaram/Here'
import Card from '../Components/Instagaram/Card'
import See from '../Components/Instagaram/See'
import Footer from '../Components/Home/Fotter'
import Domore from '../Components/Instagaram/DomoreCard'


export default function Instagaram() {
    return (
        <div>
            <Appbar/> 
            <Hero/>
            <Here/>  
            <Domore/>   
            <Card/>
            <See/>
            <Footer/>
        </div>
    )
}
