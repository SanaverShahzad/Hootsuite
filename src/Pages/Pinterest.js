import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/Pinterest/Hero'
import Here from '../Components/Pinterest/Here'
import Integrating from '../Components/Pinterest/Integrating'
import Player from '../Components/Pinterest/Player'
import See from '../Components/Pinterest/See'
import Footer from '../Components/Home/Fotter'

export default function Pinterest() {
    return (
        <div>
            <Appbar/>
            <Hero/>
            <Here/>
            <Integrating/>
            <Player/>
            <See/>
          <Footer/>
        </div>
    )
}
