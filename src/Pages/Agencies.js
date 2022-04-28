import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/Agencies/Hero'
import Here from '../Components/Agencies/Here'
import Priority from '../Components/Agencies/Priority'
import Sucess from '../Components/Agencies/Sucess'
import Trying from '../Components/Agencies/Trying'
import See from '../Components/Agencies/See'
import Footer from '../Components/Home/Fotter'
export default function Agencies() {
    return (
        <div>
            <Appbar/>
            <Hero/>
            <Here/>
            <Priority/>
            <Sucess/>
            <Trying/>
            <See/>
            <Footer/>
        </div>
    )
}
