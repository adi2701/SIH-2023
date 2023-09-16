import React from "react";
// Import Bootstrap CSS
import image1 from "../images/micro.png";
import image2 from "../images/text.png";

export default function Mmcoe() {
  const cardStyle = {
    width: '22rem',
    margin: '10px', // Add margin for spacing between cards
  };

  return (
    <div className="container d-flex flex-wrap justify-content-around">
      <div className="card shadow" style={cardStyle}>
        <img src={image1} className="card-img-top" alt="Virtual Piano" />
        <div className="card-body">
          <h5 className="card-title">Virtual Piano</h5>
          <p className="card-text">
            A virtual piano is a digital representation of a traditional piano,
            accessible through computer software, websites, or mobile
            applications. It emulates the look and sound of a piano, allowing
            users to play and create music using a keyboard or mouse.
          </p>
          <a href="https://sohampiano.netlify.app" className="btn btn-success">
            Deployment
          </a>
        </div>
      </div>
      <div className="card shadow" style={cardStyle}>
        <img src={image2} className="card-img-top" alt="Text Manipulator" />
        <div className="card-body">
          <h5 className="card-title">Text Manipulator</h5>
          <p className="card-text">
            A text manipulator is a versatile tool that allows users to
            transform text effortlessly. It provides options to convert text to
            uppercase for emphasis, lowercase for a casual tone, sentence case
            for proper grammar, and title case for headings or titles.
          </p>
          <a
            href="https://euphonious-kataifi-158456.netlify.app"
            className="btn btn-success"
          >
            Deployment
          </a>
        </div>
      </div>
    </div>
  );
}
