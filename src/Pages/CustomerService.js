import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/CustomerService/Hero'
import Panda from '../Components/CustomerService/Panda'
import Find from '../Components/CustomerService/Find'
import Improve from '../Components/CustomerService/Improve'
import Trying from '../Components/CustomerService/Trying'
import Work from '../Components/CustomerService/Work'
import See from '../Components/CustomerService/See'
import Footer from '../Components/Home/Fotter'

export default function CustomerService() {
    return (
        <div>
            <Appbar/>
            <Hero/>
            <Panda/>
            <Find/>
            <Improve/>
            <Trying/>
            <Work/>
            <See/>
            <Footer/>
        </div>
    )
}
