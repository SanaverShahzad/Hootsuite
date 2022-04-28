import React from 'react'
import Appbar from '../Components/Home/Appbar'
import Social from '../Components/Home/Social'
import Trust from '../Components/Home/Trust'
import Lightup from '../Components/Home/Lightup'
import Cards from '../Components/Home/Cards'
import Unofficial from '../Components/Home/Unofficial'
import Discover from '../Components/Home/Discover'
import Loved from '../Components/Home/Loved'
import Bring from '../Components/Home/Bring'
import Fotter from '../Components/Home/Fotter'



export default function Home() {
    return (
        <div>
           <Appbar/> 
           <Social/>
           <Trust/>
           <Lightup/>
           <Cards/>
           <Unofficial/>
           <Discover/>
           <Loved/>
           <Bring/>
           <Fotter/>
          
        </div>
    )
}

