import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/HigherEducation/Hero'
import Panda from '../Components/HigherEducation/Panda'
import Saving from '../Components/HigherEducation/Increasing'
import OneCard from '../Components/HigherEducation/OneCard'
import Prepare from '../Components/HigherEducation/Prepare'
import ResourcesCard from '../Components/HigherEducation/ResourcesCard'
import See from '../Components/HigherEducation/See'
import Fotter from '../Components/Home/Fotter'
export default function HigherEducation() {
    return (
        <div>
            <Appbar/>
            <Hero/>
            <Panda/>
            <Saving/>
            <OneCard/>
            <Prepare/>
            <ResourcesCard/>
            <See/>
            <Fotter/>
        </div>
    )
}
