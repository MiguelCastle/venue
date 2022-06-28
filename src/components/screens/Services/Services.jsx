import React from 'react';
import { useNavigate } from "react-router-dom";
import ContactInfo from '../../common/contact-info/ContactInfo';
import Footer from '../../common/footer/Footer';
import ContactForm from '../../common/forms/ContactForm';
import Header from '../../common/header/Header';

const Services = () => {
    let navigate = useNavigate(); 

    const handleRedirect = (e) => {
        e.preventDefault();
        navigate('/')
    }
    
    return (
        <>
            <Header index={1}/>
            <main>
                <section className='intro service-intro'>
                    <h2 className='lg-header'>Services</h2>
                    <div>
                        <p class="redirect-p" onClick={handleRedirect}>
                            Home
                        </p>
                        <span>/</span>
                        <p>Services</p>
                    </div>
                </section>
                <ul className="image-service-list">
                    <li>
                        <p className="image-title-filter">
                            <span>fashion shows</span>
                        </p>
                        <img src="https://amigos.cmsmasters.net/wp-content/uploads/2017/12/portfolio-puzzle-8.jpg" alt="decorated out door tables. White and gold pattern with floral table coverings." />
                    </li>
                    <li>
                        <p className="image-title-filter">
                            <span>children's birthday</span>
                        </p>
                        <img src="https://amigos.cmsmasters.net/wp-content/uploads/2017/12/portfolio-puzzle-7.jpg" alt="Mother and child playing in living room. Mother is raising child by the armpits." />
                    </li>
                    <li>
                        <p className="image-title-filter">
                            <span>birthday party</span>
                        </p>
                        <img src="https://amigos.cmsmasters.net/wp-content/uploads/2017/12/portfolio-puzzle-2-768x569.jpg" alt="A group of friends cheerings for a birthday celebration. " />
                    </li>
                    <li>
                        <p className="image-title-filter">
                            <span>wedding events</span>
                        </p>
                        <img src="https://amigos.cmsmasters.net/wp-content/uploads/2017/12/portfolio-puzzle-1-768x569.jpg" alt="A newly wed walking into the hall while being given a standing ovation" />
                    </li>
                    <li>
                        <p className="image-title-filter">
                            <span>corporate meets</span>
                        </p>
                        <img src="https://amigos.cmsmasters.net/wp-content/uploads/2017/12/portfolio-puzzle-4.jpg" alt="A group coworkers cheerings at a happy hour" />
                    </li>
                    <li>
                        <p className="image-title-filter">
                            <span>proposal arrange</span>
                        </p>
                        <img src="https://amigos.cmsmasters.net/wp-content/uploads/2017/12/portfolio-puzzle-3-1.jpg" alt="A group of friends gather at a dining table in a restaurant" />
                    </li>
                    <li>
                        <p className="image-title-filter">
                            <span>social meetings</span>
                        </p>
                        <img src="https://amigos.cmsmasters.net/wp-content/uploads/2017/12/portfolio-puzzle-6.jpg" alt="A decorated dining table. A handketchief in focus with dried flowers tied with a yarn." />
                    </li>
                    <li>
                        <p className="image-title-filter">
                            <span>outdoor events</span>
                        </p>
                        <img src="https://amigos.cmsmasters.net/wp-content/uploads/2017/12/portfolio-puzzle-5.jpg" alt="A happy family for a birthday celebration. A father and his two daughter wearing orange birthday hats." />
                    </li>
                </ul>
                <section className='service-contact'>
                    <h2 className="lg-header">Contact us to get the</h2>
                    <h2 className="lg-header">party started!</h2>
                    <ContactForm/>
                </section>
                <ContactInfo/>
                <Footer/>
            </main>
        </>
    )
}

export default Services;