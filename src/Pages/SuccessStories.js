import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/SuccessStories/Hero'
import Panda from '../Components/SuccessStories/Panda'
import We from '../Components/SuccessStories/We'
import Card from '../Components/SuccessStories/Card'
import CustomerCard from '../Components/SuccessStories/CustomerCard'
import Fortune from '../Components/SuccessStories/Fortune'
import What from '../Components/SuccessStories/What'
import See from '../Components/SuccessStories/See'
import Footer from '../Components/Home/Fotter'

export default function SuccessStories() {

    return (
        <div>
            <Appbar/>
            <Hero/>
            <Panda/>
            <We/>
            <Card/>
            <CustomerCard/>
            <Fortune/>
            <What/>
            <See/>
            <Footer/>
        </div>
    )
}
