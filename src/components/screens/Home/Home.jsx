import React, {useState, useEffect, Suspense} from 'react';
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// SVGS
import { ReactComponent as Balloons } from '../../../assets/svgs/balloons.svg';
import { ReactComponent as Oven } from '../../../assets/svgs/kitchen-cooker.svg';
import { ReactComponent as Mic } from '../../../assets/svgs/microphone.svg';
import { ReactComponent as Present } from '../../../assets/svgs/present.svg';
// photos
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';

const WelcomeSection = React.lazy(() => import('./sections/WelcomeSection'));
const OurServies = React.lazy(() => import('./sections/OurServices'));
const ReasonsSection = React.lazy(() => import('./sections/ReasonsSection'));
const ReviewsSection = React.lazy(() => import('./sections/ReviewsSection'));
const ContactSection = React.lazy(() => import('./sections/ContactSection'));
const Contactinfo = React.lazy(() => import('../../common/contact-info/ContactInfo'));


const Home = () => {
    let navigate = useNavigate(); 
    /*********** RESIZING **********/
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function debounce(fn, ms) {
        let timer;
        return _ => {
          clearTimeout(timer);
          timer = setTimeout(_ => {
            timer = null;
            fn.apply(this, arguments);
          }, ms);
        };
      }
    const handleRedirect = (e, url) => {
        e.preventDefault();
        navigate(url)
    }
    
    useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
          setHeight(window.innerHeight)
          setWidth(window.innerWidth)
    }, 1000);
    
    window.addEventListener("resize", debouncedHandleResize);
    /*********** END OF RESIZE ***********/
    return _ => {
        window.removeEventListener("resize", debouncedHandleResize);
      };
    });

    return (
        <div id="header-trigger">
        {/* {console.log(width)}
        {console.log(height)} */}
        <div id="parralax-img" style={{height: window.innerHeight*1.5}}></div>
        <Header index={0}/>
        <main>
            <section className="intro-section appear-up" style={{height: `${(window.innerHeight*.9)}px`}}>
                <h2 className="lg-header appear">
                    A good life is a collection of happy moments
                </h2>
                <button onClick={(e) => handleRedirect(e, '/services')} className='lg-btn main-blue-btn appear'>LET'S CELEBRATE</button>
            </section>
            <Suspense fallback={<div style={{height: height}}>Loading...</div>}>
                <WelcomeSection/>
            </Suspense>
            <Suspense fallback={<div style={{height: height}}>Loading...</div>}>
                <OurServies/>
            </Suspense>
            <Suspense fallback={<div style={{height: height}}>Loading...</div>}>
                <ReasonsSection/>
            </Suspense>
            <Suspense fallback={<div style={{height: height}}>Loading...</div>}>
                <ReviewsSection/>
            </Suspense>
            <Suspense fallback={<div style={{height: height}}>Loading...</div>}>
                <ContactSection/>
            </Suspense>
            <Suspense fallback={<div style={{height: height*.5}}>Loading...</div>}>
                <Contactinfo/>
            </Suspense>
            <Footer/>
        </main>
        </div>
    );

}

export default Home;