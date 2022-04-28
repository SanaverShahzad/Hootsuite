import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/EmployeeAdvocacy/Hero'
import AccorHotel from '../Components/EmployeeAdvocacy/AccorHotel'
import Empower from '../Components/EmployeeAdvocacy/Empower'
import Improve from '../Components/EmployeeAdvocacy/Improve'
import Measure from '../Components/EmployeeAdvocacy/Measure'
import Osolomat from '../Components/EmployeeAdvocacy/Osolomat'
import Work from '../Components/EmployeeAdvocacy/Froest'
import See from '../Components/EmployeeAdvocacy/See'
import Footer from '../Components/Home/Fotter'
export default function EmployeeAdvocacy() {
    return (
        <div>
            <Appbar/>
            <Hero/>
            <AccorHotel/>
            <Empower/>
            <Improve/>
            <Measure/>
            <Osolomat/>
            <Work/>
            <See/>
            <Footer/>
        </div>
    )
}
