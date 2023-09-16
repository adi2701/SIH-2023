import React from 'react';
import image31 from '../images/Marathwada Mitra Mandals College of Engineering.png';
import image32 from '../images/AISSMS.png';
import image33 from '../images/Marathwada Mitra Mandals Institute of Technology.png';
import image34 from '../images/Pune Institute of Computer Technology.png';
import image35 from '../images/Zeal College of Engineering & Reserch.png';
import image36 from '../images/Vishwakarma Institute of Technology.png';
import image37 from '../images/Rajiv Gandhi Proudyogiki Vishwavidyalaya.png';
import image38 from '../images/Rajarshi Shahu College of Engineering.png';
import image39 from '../images/Pune Vidyarthi Gruha College of Engg. and Tech., Pune.png';
import image40 from '../images/PIMPRI CHINCHWAD COLLEGE OF ENGINEERING.png';
import image41 from '../images/PIMPRI CHINCHWAD COLLEGE OF ENGINEERING & RESEARCH.png';
import image42 from '../images/Pune Vidyarthi Gruha College of Engg. and Tech.nashik.png';
 // Import custom CSS for additional styling

export default function UserProfile() {
  return (
    <>
      <div className="container mt-4 shadow-sm ">
        <div className="row ">
          <div className="col-md-4 mb-4  ">
            <a href='/mmcoe'><img src={image31} className="img-fluid rounded border" alt="..." /></a>
          </div>
          <div className="col-md-4 mb-4  
          ">
            <img src={image36} className="img-fluid rounded border" alt="..." />
          </div>
          <div className="col-md-4 mb-4  
          ">
            <img src={image39} className="img-fluid rounded border" alt="..." />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4  
          ">
            <img src={image34} className="img-fluid rounded border" alt="..." />
          </div>
          <div className="col-md-4 mb-4  
          ">
            <img src={image35} className="img-fluid rounded border" alt="..." />
          </div>
          <div className="col-md-4 mb-4 
          ">
            <img src={image32} className="img-fluid rounded border" alt="..." />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <img src={image37} className="img-fluid rounded border" alt="..." />
          </div>
          <div className="col-md-4 mb-4">
            <img src={image38} className="img-fluid rounded border" alt="..." />
          </div>
          <div className="col-md-4 mb-4">
            <img src={image42} className="img-fluid rounded border" alt="..." />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <img src={image33} className="img-fluid rounded border" alt="..." />
          </div>
          <div className="col-md-4 mb-4">
            <img src={image40} className="img-fluid rounded border" alt="..." />
          </div>
          <div className="col-md-4 mb-4">
            <img src={image41} className="img-fluid rounded border" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}
