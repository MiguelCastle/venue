import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HamburgerBars } from '../../../assets/svgs/hamburger-bars.svg';
import { ReactComponent as Logo } from '../../../assets/svgs/diamond-hall-logo.svg';
import { ReactComponent as Close } from '../../../assets/svgs/close.svg';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// gsap.core.globals("ScrollTrigger", ScrollTrigger);
const Header = ({index}) => {
    let navigate = useNavigate();

    const fadeEffectsTimeline = useMemo(() => gsap.timeline(), []);
    const windowWidth = window.innerWidth;
    const headerRef = useRef();

    console.log(windowWidth)

    useEffect(() =>{
        if(windowWidth >= 1280){
            fadeEffectsTimeline
            .to(headerRef.current, 
                {
                scrollTrigger: 
                    {
                        trigger: headerRef.current, 
                        start: "top top",
                        endTrigger:"html",
                        end:"bottom top",
                        // markers: true,
                        toggleClass: 'menu-appear'
                    },
                }
            )
        }
        }, [])
    

    const activeMenuOption = index;
    const [menuInView, setMenuInView] = useState(false);
    
    const handleMenuClick = () => {
        setMenuInView(!menuInView)
    }
    const handleMenuOptionClick = (url) => {
        navigate(url)
    }
    return (
        <header ref={headerRef}>
            <Logo onClick={() => handleMenuOptionClick('/')}/>
            <ul id="menu-nav" className={menuInView ? 'active-menu' : 'inactive-menu'}>
                <li className={activeMenuOption === 0 ? 'active-menu-option' : ''} onClick={() => handleMenuOptionClick('/')}>Home</li>
                <li className={activeMenuOption === 1 ? 'active-menu-option' : ''} onClick={() => handleMenuOptionClick('/services')}>Services</li>
                <li className={activeMenuOption === 2 ? 'active-menu-option' : ''} onClick={() => handleMenuOptionClick('/budget-calculator')}>Budget Calculator</li>
            </ul>
            <button onClick={handleMenuClick}>
                {menuInView ? 
                <Close />
                : 
                <HamburgerBars/>
                }
            </button>
           
        </header>
    )
}

export default Header;