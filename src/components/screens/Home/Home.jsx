import React from 'react';
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// SVGS
import { ReactComponent as Balloons } from '../../../assets/svgs/balloons.svg';
import { ReactComponent as Oven } from '../../../assets/svgs/kitchen-cooker.svg';
import { ReactComponent as Mic } from '../../../assets/svgs/microphone.svg';
import { ReactComponent as Present } from '../../../assets/svgs/present.svg';
// photos
import img3 from '../../../assets/images/3.png';
import Header from '../../common/header/Header';
import ContactForm from '../../common/forms/ContactForm';
import Footer from '../../common/footer/Footer';

const Home = () => {
    let navigate = useNavigate(); 

    const handleRedirect = (e, url) => {
        e.preventDefault();
        navigate(url)
    }
    
    return (
        <>
        <div id="parralax-img" style={{height: window.innerHeight*1.5}}></div>
        <Header index={0}/>
        <main>
            <section className="intro-section appear-up" style={{height: `${(window.innerHeight*.9)}px`}}>
                <h2 className="lg-header appear">
                    A good life is a collection of happy moments
                </h2>
                <button onClick={(e) => handleRedirect(e, '/services')} className='lg-btn main-blue-btn appear'>LET'S CELEBRATE</button>
            </section>
            <div className='welcome-section'>
                <div>
                    <img src={'https://amigos.cmsmasters.net/wp-content/uploads/2017/12/home-2.png'} alt="decorative tables" />
                    <section className="flex-col">
                        <h3>
                            get your event covered
                        </h3>
                        <p>
                            The most beautiful things are not associated with money;
                            <span>they are memories and moments</span>
                        </p>
                        <button onClick={(e) => handleRedirect(e, '/budget-calculator')} className="md-btn main-pink-btn">
                            GET STARTED
                        </button>
                    </section>
                </div>
                <div>
                    <h2 className="lg-header">
                        We take care of preparation, you enjoy the celebration!
                    </h2>
                    <p>HELLO & WELCOME</p>
                    <img src={img3} alt="display of a decorated event" />
                </div>
            </div> 
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
            <section className="reasons-section">
                <h2 className="lg-header">No - fuss event management to celebrate the big day</h2>
                <ul className="reasons-list">
                    <li className='icon-title-descr'>
                        <Balloons/>
                        <h4>perfect venue</h4>
                        <p>No one will arrange a better party or event than we</p>
                        <button>LEARN MORE</button>
                    </li>
                    <li className='icon-title-descr'>
                        <Oven/>
                        <h4>A Fully Furnanced Kitchen</h4>
                        <p>A kitchen to keep the food warm ready to serve</p>
                        <button>LEARN MORE</button>
                    </li>
                    <li className='icon-title-descr'>
                        <Mic/>
                        <h4>Designated Stage</h4>
                        <p>A designed raised seciton of the floor perfect for a live performance</p>
                        <button>LEARN MORE</button>
                    </li>
                </ul>
            </section>
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
            <section className="contact-section flex-col">
                <div>
                    <h2 className="lg-header">We know how to make something special</h2>
                    <p>events from a to z</p>
                </div>
                <div>
                    <h2 className="lg-header">Get the Party Started!</h2>
                    <ContactForm/>
                </div>
            </section>
            <ul className="contact-info flex-col">
                <li>
                    <h5>OUR ADDRESS</h5>
                    <p>
                        198 West 21th Street, Suite 721
                        <span>New York, NY 10010</span>
                    </p>
                </li>
                <li>
                    <h5>FOR INQUIRES</h5>
                    <p>
                        youremail@yourdomain.com
                    </p>
                </li>
                <li>
                    <h5>CONTACT US</h5>
                    <p>
                        +88 (0) 101 0000 000
                    </p>
                </li>
            </ul>
            <Footer/>
        </main>
        </>
    )
}

export default Home;