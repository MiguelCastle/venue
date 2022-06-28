import React from "react";
import { useNavigate } from "react-router-dom";
import img3 from '../../../../assets/images/3.png';

const WelcomeSection = () => {
    let navigate = useNavigate(); 
    const handleRedirect = (e, url) => {
        e.preventDefault();
        navigate(url)
    }
    
    return (
        <div className='welcome-section'>
            <div>
                <img src={'https://daycareseattle.s3.amazonaws.com/2.webp'} alt="decorative tables" />
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
    )
}

export default WelcomeSection;