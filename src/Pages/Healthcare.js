import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Hero from '../Components/Healthcare/Hero'
import Panda from '../Components/Healthcare/Panda'
import Improve from '../Components/Healthcare/Improve'
import Great from '../Components/Healthcare/Great'
import See from '../Components/Healthcare/See'
import Unify from '../Components/Healthcare/Unify'
import Global from '../Components/Healthcare/Global'
import Ensure from '../Components/Healthcare/Ensure'
import Want from '../Components/Healthcare/Want'
import Fotter from '../Components/Home/Fotter'

export default function Healthcare() {
    return (
        <div>
            <Appbar/>
            <Hero/>
            <Panda/>
            <Improve/>
            <Great/>
            <See/>
            <Unify/>
            <Global/>
            <Ensure/>
            <Want/>
            <Fotter/>
        </div>
    )
}
