import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/Plans/Hero'
import Price from '../Components/Plans/Price'
import Entrepreneur from '../Components/Plans/Entrepreneur'
import Trust from '../Components/Plans/Trust'
import Questions from '../Components/Plans/Questions'
import Footer from '../Components/Home/Fotter'
export default function Plans() {
    return (
        <div>
            <Appbar/>
            <Hero/>
            <Price/>
            <Entrepreneur/>
            <Trust/>
            <Questions/>
            <Footer/>
        </div>
    )
}
