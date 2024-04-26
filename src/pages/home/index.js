import React, { useEffect, useState } from 'react';
import '../../styles/home.css';
import { CiPlay1 } from "react-icons/ci";
import { BsMouse } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
    const [videoShow, setVideoSHow] = useState(false)
    return (
        <div className='home-main' name="/">
            <div>
                <CiPlay1 className='video-play' onClick={() => setVideoSHow(true)} />
                {videoShow &&
                    <div className="popup-container">
                        <div className="popup-content">
                            <MdClose className="close" onClick={() => setVideoSHow(false)} />
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
                            </iframe>
                        </div>
                    </div>
                }
                <h1>AWESOME DESIGNS</h1>
                <Link  to="about" smooth={true} duration={500}><BsMouse className='scroll-icon' /></Link>
            </div>
        </div>
    )
}

export default Home;
