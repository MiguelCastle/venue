import React from "react"
import { Carousel } from "react-responsive-carousel"

const OurServices = () => {
    return (
        <section className="our-services">
            <h4>OUR SERVICES</h4>
            <Carousel
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                showArrows={false}
            >
                <div className="carousel-div">
                    <h3>Graduations</h3>
                    <img loading="lazy" src={'https://daycareseattle.s3.amazonaws.com/4.webp'} alt="social meetings"/>
                </div>
                <div className="carousel-div">
                    <h3>Bachelor Party</h3>
                    <img loading="lazy" src={'https://daycareseattle.s3.amazonaws.com/6.webp'} alt="quinceneras"/>
                </div>
                <div className="carousel-div">
                    <h3>Social Meetings</h3>
                    <img loading="lazy" src={'https://daycareseattle.s3.amazonaws.com/5.webp'} alt="graduations"/>
                </div>
                <div className="carousel-div">
                    <h3>Conference & Awards</h3>
                    <img loading="lazy" src={'https://daycareseattle.s3.amazonaws.com/7.webp'} alt="graduations"/>
                </div>
            </Carousel>
        </section>
    )
}

export default OurServices;