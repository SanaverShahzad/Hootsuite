import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/Government/Hero'
import Panda from '../Components/Government/Panda'
import Serve from '../Components/Government/Serve'
import Card from '../Components/Government/Card'
import Saving from '../Components/Government/Saving'
import Resources from '../Components/Government/Resources'
import SeeHelp from '../Components/Government/SeeHelp'
import Fotter from '../Components/Home/Fotter'


export default function Government() {
    return (
        <div>
            <Appbar/>
            <Hero/>
            <Panda/>
            <Serve/>
            <Card/>
            <Saving/>
            <Resources/>
            <SeeHelp/>
            <Fotter/>
        </div>
    )
}
