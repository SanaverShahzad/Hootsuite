import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Save from '../Components/Publish/Save'
import Here from '../Components/Publish/Here'
import Incredibly from '../Components/Publish/Incredibly'
import Learn from '../Components/Publish/Learn'
import See from '../Components/Publish/See'
import Footer from '../Components/Home/Fotter'

export default function Publish() {
    return (
        <div>
            <Appbar/>
            <Save/>
            <Here/>
            <Incredibly/>
            <Learn/>
            <See/>
            <Footer/>
        </div>
    )
}
