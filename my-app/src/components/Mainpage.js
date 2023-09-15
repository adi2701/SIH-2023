import React from 'react';
import image1 from '../images/sppu.png';
import image2 from '../images/mumbai.png';
import image3 from '../images/aktu.png';
import image4 from '../images/ptu.png';
import image5 from '../images/Maharshi Dayanand University.png';
import image6 from '../images/Maulana Abul Kalam Azad University of Technology.png';
import image7 from '../images/Aryabhatta Knowledge University.png';
import image8 from '../images/Rajiv Gandhi Proudyogiki Vishwavidyalaya.png';
import image9 from '../images/Anna University, Chennai.png';

import image21 from '../images/web dev.png';
import image22 from '../images/android deve.png';
import image23 from '../images/data science.png';
import image24 from '../images/machine learning.png';
import image25 from '../images/opencv.png';
import image26 from '../images/embedded programming.png';

import { useNavigate } from 'react-router-dom';


export default function Mainpage() {
  const smallImageStyle = {
    height: '100px', 
  };
  let navigate=useNavigate();
  
  const sppu=()=>{
    console.log("imaeg clkck")
    navigate({
        pathname:"/colleges",
        
    }
    )
  }
  return (
    <>
    {/* //1st slider */}
      <div>
        <div id="carouselExample1" className="carousel slide mt-4 h-100" data-bs-ride="carousel">
          <div className="carousel-inner ">
            <div className="carousel-item active ">
              <div className="d-flex ">
                <img src={image1} className="d-block w-50 h-25 " onClick={sppu} alt=" 1" />
                <img src={image2} className="d-block w-50 h-25" alt=" 2" />
                <img src={image3} className="d-block w-50 " alt=" 3" />
              </div>
            </div>

            <div className="carousel-item">
              <div className="d-flex">
                <img src={image4} className="d-block w-50  " alt=" 4" />
                <img src={image5} className="d-block w-50  " alt=" 5" />
                <img src={image6} className="d-block w-50  " alt=" 6" />
              </div>
            </div>

            <div className="carousel-item">
              <div className="d-flex">
                <img src={image7} className="d-block w-50  " alt=" 7" />
                <img src={image8} className="d-block w-50  " alt=" 8" />
                <img src={image9} className="d-block w-50  " alt=" 9" />
              </div>
            </div>
           

           {/* buttons */}
          </div>
          <button className="carousel-control-prev black-button" type="button" data-bs-target="#carouselExample1" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample1" data-bs-slide="next">
            <span className="carousel-control-next-icon black-button" aria-hidden="true"></span>
            
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>


        {/* //2nd slider */}
      <div className="container2 mt-5">
        <div id="carouselExample2" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex h-50">
                <img src={image21} className="d-block w-50 " alt=" 1" />
                <img src={image22} className="d-block w-50 " alt="2" />
                <img src={image23} className="d-block w-50 " alt="2" />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex">
                <img src={image24} className="d-block w-50 " alt=" 2" />
                <img src={image25} className="d-block w-50 " alt=" 3" />
                <img src={image26} className="d-block w-50 " alt=" 3" />
              </div>
            </div>
            
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>


    </>
  );
}
