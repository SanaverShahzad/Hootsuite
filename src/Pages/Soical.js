import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/Soical/Hero'
import Connect from '../Components/Soical/Connect'
import Add from '../Components/Soical/Add'
import Visit from '../Components/Soical/Visit'
import See from '../Components/Soical/See'
import Footer from '../Components/Home/Fotter'

export default function Soical() {
    return (
        <div>
             <Appbar/>
             <Hero/>
             <Connect/>
             <Add/>
             <Visit/>
             <See/>
             <Footer/>
        </div>
    )
}
