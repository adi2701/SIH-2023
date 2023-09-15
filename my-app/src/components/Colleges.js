import React from 'react'
import image31 from '../images/Marathwada Mitra Mandals College of Engineering.png'
import image32 from '../images/AISSMS.png'
import image33 from '../images/Marathwada Mitra Mandals Institute of Technology.png'
import image34 from '../images/Pune Institute of Computer Technology.png'
import image35 from '../images/Zeal College of Engineering & Reserch.png'
import image36 from '../images/Vishwakarma Institute of Technology.png'
import image37 from '../images/Rajiv Gandhi Proudyogiki Vishwavidyalaya.png'
import image38 from '../images/Rajarshi Shahu College of Engineering.png'
import image39 from '../images/Pune Vidyarthi Gruha College of Engg. and Tech., Pune.png'
import image40 from '../images/PIMPRI CHINCHWAD COLLEGE OF ENGINEERING.png'
import image41 from '../images/PIMPRI CHINCHWAD COLLEGE OF ENGINEERING & RESEARCH.png'
import image42 from '../images/Pune Vidyarthi Gruha College of Engg. and Tech.nashik.png'

export default function UserProfile() {
  return (
    <>
    <div>
      <img src={image31} class="rounded float-start" alt="..."/>
      <img src={image36} class="rounded float-end" alt="..."/>
      <img src={image39} class="rounded float-end" alt="..."></img>

    </div>

    <div>
      <img src={image34} class="rounded float-end" alt="..."></img>
      <img src={image35} class="rounded float-start" alt="..."/>
      <img src={image32} class="rounded float-end" alt="..."></img>

    </div>

    <div>
      <img src={image37} class="rounded float-end" alt="..."></img>
      <img src={image38} class="rounded float-start" alt="..."/>
      <img src={image42} class="rounded float-end" alt="..."></img>


    </div>

    <div>
      <img src={image33} class="rounded float-start mx-4" alt="..."/>
      <img src={image40} class="rounded float-end" alt="..."></img>
      <img src={image41} class="rounded float-start" alt="..."/>

    </div>

    
    </>
  )
}
