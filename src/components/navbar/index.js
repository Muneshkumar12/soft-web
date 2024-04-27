import React from 'react'
import '../../styles/navbar.css';
import logo from '../../images/mascot-logo-design_fb-img_1200x800-removebg-preview.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-3">
                <div className="container">
                    <Link className="navbar-brand" to="/" smooth={true} duration={500}>Soft<img src={logo} alt='logo' /> </Link>

                    <button class="navbar-toggler white-hamburger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>


                    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="/" smooth={true} duration={500} >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="about" smooth={true} duration={500}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="services" smooth={true} duration={500}>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="portfolio" smooth={true} duration={500}>Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="testimonials" smooth={true} duration={500}>Testimonials</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="contact" smooth={true} duration={500}>Contact</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
                            <li className="nav-item mx-2">
                                <a className="nav-link text-dark h5" href="/" target="blank"><i className="fab fa-twitter"></i></a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-dark h5" href="/" target="blank"><i className="fa-brands fa-square-instagram"></i></a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link text-dark h5" href="/" target="blank"><i className="fab fa-facebook-square"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
