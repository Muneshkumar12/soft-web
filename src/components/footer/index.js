import React from 'react';
import '../../styles/footer.css';
import footerImg from '../../images/mascot-logo-design_fb-img_1200x800-removebg-preview.png'
const Footer = () => {
    return (
        <div className='footer-main'>
            <div>
                <a href='/'>About us</a>
                <a href='/'> Our services</a>
                <a href='/'> Team</a>
                <a href='/'>Contact us</a>
            </div>
            <div><img src={footerImg} alt="footer logo"/></div>
            <div><p>© 2024 soft is Proudly Powered by Soft</p>
            </div>
        </div>
    )
}

export default Footer;
