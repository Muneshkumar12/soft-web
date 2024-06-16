import React, { useState } from 'react';
import '../../styles/navbar.css';
import logo from '../../images/mascot-logo-design_fb-img_1200x800-removebg-preview.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const closeNav = () => setIsNavCollapsed(true);

    return (
        <>
            <nav className="navbar navbar-expand-lg p-3">
                <div className="container">
                    <Link className="navbar-brand" to="home" smooth={true} duration={500} onClick={closeNav}>
                        Soft<img src={logo} alt='logo' />
                    </Link>

                    <button className="navbar-toggler white-hamburger" type="button" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="/" smooth={true} duration={500} onClick={closeNav}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="about" smooth={true} duration={500} onClick={closeNav}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="services" smooth={true} duration={500} onClick={closeNav}>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="portfolio" smooth={true} duration={500} onClick={closeNav}>Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="testimonials" smooth={true} duration={500} onClick={closeNav}>Testimonials</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-2" to="contact" smooth={true} duration={500} onClick={closeNav}>Contact</Link>
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
    );
}

export default Navbar;
