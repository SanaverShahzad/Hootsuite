import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/FinancialServices/Hero'
import Panda from '../Components/FinancialServices/Panda'
import See from '../Components/FinancialServices/See'
import Card from '../Components/FinancialServices/Card'
import DriveBussniness from '../Components/FinancialServices/DriveBussniness'
import Resources from '../Components/FinancialServices/Resources'
import Seehelps from '../Components/FinancialServices/Seehelps'
import Footer from '../Components/Home/Fotter'

export default function FinancialServices() {
    return (
        <div>
            <Appbar/>
            <Hero/>
            <Panda/>
            <See/>
            <Card/>
            <DriveBussniness/>
            <Resources/>
            <Seehelps/>
            <Footer/>
        </div>
    )
}
