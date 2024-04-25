import React from 'react';
import '../../styles/testimonials.css';
import { HiOutlineMail, HiOutlinePhoneMissedCall } from "react-icons/hi";
import { GoProjectSymlink } from "react-icons/go";


const Testimonials = () => {
    const testimonialSlider = [
        {
            para: "If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners  that I've ever seen.",
            name: "jeremy dupont",
            work: "CREATIVE DIRECTOR ",
            className: "carousel-item active"
        },
        {
            para: "If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners  that I've ever seen.",
            name: "jeremy dupont",
            work: "CREATIVE DIRECTOR ",
            className: "carousel-item"
        },
        {
            para: "If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners  that I've ever seen.",
            name: "jeremy dupont",
            work: "CREATIVE DIRECTOR ",
            className: "carousel-item"
        }]
    const testimonialCard = [
        {
            icon: <HiOutlineMail className='testimonial-card-icon'/>,
            heading: "How can we help you?",
            anchor: "send us an email",
            para: "Lorem ipsum is simply dummy text of the printing industry",
        },
        {
            icon: <HiOutlinePhoneMissedCall className='testimonial-card-icon'/>,
            heading: "feel free to get in touch?",
            anchor: "give us a call today",
            para: "Lorem ipsum is simply dummy text of the printing industry",
        },
        {
            icon: <GoProjectSymlink className='testimonial-card-icon'/>,
            heading: "ready to request a qoute?",
            anchor: "Describe your project",
            para: "Lorem ipsum is simply dummy text of the printing industry",
        },
    ]
    return (
        <div className='testimonial-main' name="testimonials">
            <div className="container">
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {testimonialSlider.map((item, index) => {
                            return (
                                <div className={item.className} key={index}>
                                    <div className="carousel-caption">
                                        <p>{item.para}</p>
                                        <h1>{item.name}</h1>
                                        <span>{item.work}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <i className='fas fa-arrow-left prev-next-btn'></i>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <i className='fas fa-arrow-right prev-next-btn'></i>
                    </a>
                </div>

            </div>
            <div className='container testimonial-card'>
                <div className='row'>
                    {testimonialCard.map((item, index) => {
                        return (
                            <div className='col-12 col-md-4  testimonial-card-data' key={index}>
                                {item.icon}
                                <h1>{item.heading}</h1>
                                <a href='/' className='testimonial-card-anchor'>{item.anchor}</a>
                                <p  className='testimonial-card-para'>{item.para}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Testimonials
