import React, { useState, useEffect } from 'react'
import '../../styles/about.css';
import { FaDigitalOcean } from "react-icons/fa";
import { MdOutlineBrandingWatermark, MdLocalGroceryStore } from "react-icons/md";



const About = () => {
  const [text, setText] = useState("generated revenue");
  const texts = ["generated revenue", "strategy creation", "customize tools"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 1000);

    setText(texts[index]);
    return () => clearInterval(interval);
  }, [index]); // Run only once when component mounts

  const aboutCard = [
    {
      icon: <FaDigitalOcean className='card-icon' />,
      title: "DIGITAL BRANDING",
    },
    {
      icon: <MdOutlineBrandingWatermark className='card-icon' />,
      title: "BRAND STRATEGY",
    },
    {
      icon: <FaDigitalOcean className='card-icon' />,
      title: "WEBSITE DESIGNING",
    },
    {
      icon: <MdLocalGroceryStore className='card-icon' />,
      title: "ECOMMERCE TOOL",
    }
  ]
  return (

    <div className='container about-main' name="about">
      <div className='row'>
        <div className='col-12 col-md-6 about-data-one' >
          <h1>A creative agency <br /> specialized in web</h1>
          <div><span >{text}</span></div>
        </div>
        <div className='col-12 col-md-6 about-data-two'>
          <h1>ABOUT LITHO WEB AGENCY</h1>
          <p>With years of experience in the website design and development industry pride ourselves on creating unique, creative and quality designs that are developed upon the latest modern coding and developing techniques. </p>
        </div>
      </div>
      <div className='row'>
        {aboutCard.map((data, dataKey) => {
          return (
            <div className='col-12 col-md-3 about-card' key={dataKey}>{data.icon}<h1>{data.title}</h1></div>
          )
        })}
      </div>
    </div>
  )
}

export default About
