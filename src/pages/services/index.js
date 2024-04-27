import React from 'react';
import '../../styles/Services.css';
import { FaDigitalOcean } from "react-icons/fa";
import { MdOutlineBrandingWatermark, MdLocalGroceryStore } from "react-icons/md";
const Services = () => {
    const serviceCard = [
        {
            No: "01",
            heading: "Website Design",
            des: "Lorem ipsum dolor consectetur adipiscing elit do eiusmod tempor incididunt ut labore dolore",
            btn: "Expplore Services",
            icon: <FaDigitalOcean className='services-card-icon' />
        },
        {
            No: "02",
            heading: "eCommerce experience",
            des: "Lorem ipsum dolor consectetur adipiscing elit do eiusmod tempor incididunt ut labore dolore",
            btn: "Expplore Services",
            icon: < MdLocalGroceryStore className='services-card-icon' />
        },
        {
            No: "03",
            heading: "Digital Platform",
            des: "Lorem ipsum dolor consectetur adipiscing elit do eiusmod tempor incididunt ut labore dolore",
            btn: "Expplore Services",
            icon: <MdOutlineBrandingWatermark className="services-card-icon" />
        },
        {
            No: "04",
            heading: "Interface Design",
            des: "Lorem ipsum dolor consectetur adipiscing elit do eiusmod tempor incididunt ut labore dolore",
            btn: "Expplore Services",
            icon: <FaDigitalOcean className='services-card-icon' />
        },
    ]
    return (
        <div className='services-main' name="services">
            {/* <div className='card'>
            <div className="heading">Hover over me</div>
            <div className="content">This is the paragraph that appears when you hover over the card.</div>
            </div> */}
            <div className='container'>
                <div className="row">
                    {serviceCard.map((servicesCardItem, ServiceIndex) => {
                        return (
                            <div className='col-12 col-md-3 services-card-main' key={ServiceIndex}>
                                <div className='services-card'>
                                    <span>{servicesCardItem.No}</span>
                                    <h1>{servicesCardItem.heading}</h1>
                                    <p className="service-card-para">{servicesCardItem.des}</p>
                                    <button className="service-card-btn">{servicesCardItem.btn}</button>
                                    {servicesCardItem.icon}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Services
