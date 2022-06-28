import React from "react";
import { Carousel } from "react-responsive-carousel";
import { ReactComponent as Present } from '../../../../assets/svgs/present.svg';

const ReviewsSection = () => {
    return (
        <section className="reviews-section flex-col">
            <div className='svg-present'>
                <Present/>
            </div>
            <Carousel
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                showIndicators={false}
                infiniteLoop={true}
            >
                <div className="carousel-review-div">
                    <h3>If you want to organize a part of huge proportions</h3>
                    <h3>then these people know their business. Everything</h3>
                    <h3>is simple at the highest level</h3>
                    <p>STEW LUNDERS<span>DJ</span></p>
                </div>
                <div className="carousel-review-div">
                    <h3>I love this company. She brought me much joy in life.</h3>
                    <h3>I ordered 4 holidays all of which I really liked.</h3>
                    <h3>I will continue to call these guys</h3>
                    <p>MIKE BISTLER<span>BUSINESSMAN</span></p>
                </div>
                <div className="carousel-review-div">
                    <h3>The most beautiful things are not associated with</h3>
                    <h3>money; they are memories and moments If you</h3>
                    <h3>don't celebrate those, they can pass you by.</h3>
                    <p>ALEK WEK<span>Designer</span></p>
                </div>
            </Carousel>
        </section>
    )
}

export default ReviewsSection;