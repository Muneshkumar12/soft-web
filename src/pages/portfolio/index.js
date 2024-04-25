import React from 'react';
import { PageHeader } from '../../components';
import '../../styles/portfolio.css';
import bmwImg from '../../images/bmw.jpg';
import colaImg from '../../images/cola.jpg';
import blueTshirtImg from '../../images/blue-tshirt.jpg';
import shoesImg from '../../images/shoes.jpg';
import manImg from '../../images/man.jpg';
import slimImg from '../../images/slim.jpg';
const Portfolio = () => {
  const portfolioCardData = [
    {
      img: bmwImg,
      des: "BRANDING",
      title: "MONGLISH"
    },
    {
      img: colaImg,
      des: "PHOTOGRAPHY",
      title: "MASSCOATING"
    },
    {
      img: blueTshirtImg,
      des: "BROCHURE",
      title: "CORTIFIEL"
    },
    {
      img: slimImg,
      des: "BRANDING",
      title: "SCANDINAVIN"
    },
    {
      img: shoesImg,
      des: "BROCHURE",
      title: "EVERYDAY"
    },
    {
      img: manImg,
      des: "WEBSITE",
      title: "THE SIMPLEST"
    },
  ]
  return (
    <div className='portfolio-main' name="portfolio">
      <PageHeader para="Selected portfolio" heading="RECENT PROJECTS" />
      <div className='container-fluid'>
        <div className="row gallery-image">
          {portfolioCardData.map((item, index) => {
            return (
              <div className="col-12 col-md-3 img-box" key={index}>
                <img src={item.img} alt="" />
                <div className="transparent-box">
                  <div className="caption">
                    <p>{item.title}</p>
                    <p className="opacity-low">{item.des}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* <div className="gallery-image">
        <div className="img-box">
          <img src="https://picsum.photos/350/250?image=444" alt="" />
          <div className="transparent-box">
            <div className="caption">
              <p>Library</p>
              <p className="opacity-low">Architect Design</p>
            </div>
          </div>
        </div>
        <div className="img-box">
          <img src="https://picsum.photos/350/250/?image=232" alt="" />
          <div className="transparent-box">
            <div className="caption">
              <p>Night Sky</p>
              <p className="opacity-low">Cinematic</p>
            </div>
          </div>
        </div>
        <div className="img-box">
          <img src="https://picsum.photos/350/250/?image=431" alt="" />
          <div className="transparent-box">
            <div className="caption">
              <p>Tea Talk</p>
              <p className="opacity-low">Composite</p>
            </div>
          </div>
        </div>
        <div className="img-box">
          <img src="https://picsum.photos/350/250?image=474" alt="" />
          <div className="transparent-box">
            <div className="caption">
              <p>Road</p>
              <p className="opacity-low">Landscape</p>
            </div>
          </div>
        </div>
        <div className="img-box">
          <img src="https://picsum.photos/350/250?image=344" alt="" />
          <div className="transparent-box">
            <div className="caption">
              <p>Sea</p>
              <p className="opacity-low">Cityscape</p>
            </div>
          </div>
        </div>
        <div className="img-box">
          <img src="https://picsum.photos/350/250?image=494" alt="" />
          <div className="transparent-box">
            <div className="caption">
              <p>Vintage</p>
              <p className="opacity-low">Cinematic</p>
            </div>
          </div>
        </div>
      </div>  */}
    </div>
  )
}

export default Portfolio;
