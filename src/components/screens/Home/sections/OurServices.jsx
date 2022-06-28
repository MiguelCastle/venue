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
                    <img src={'https://amigos.cmsmasters.net/wp-content/uploads/2018/01/home-4.jpg'} alt="social meetings"/>
                </div>
                <div className="carousel-div">
                    <h3>Bachelor Party</h3>
                    <img src={'https://amigos.cmsmasters.net/wp-content/uploads/2018/01/home-5.jpg'} alt="quinceneras"/>
                </div>
                <div className="carousel-div">
                    <h3>Social Meetings</h3>
                    <img src={'https://amigos.cmsmasters.net/wp-content/uploads/2018/01/home-6-1.jpg'} alt="graduations"/>
                </div>
                <div className="carousel-div">
                    <h3>Conference & Awards</h3>
                    <img src={'https://amigos.cmsmasters.net/wp-content/uploads/2018/01/home-6.jpg'} alt="graduations"/>
                </div>
            </Carousel>
        </section>
    )
}

export default OurServices;