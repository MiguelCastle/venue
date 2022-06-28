import React, { useEffect, useState } from 'react';
import Header from '../../common/header/Header';
import { useNavigate } from "react-router-dom";
import Footer from '../../common/footer/Footer';
import ContactInfo from '../../common/contact-info/ContactInfo';
const EVENT_PRICES = {
    "birthday-parties": 400,
    "corporate-meeting": 600,
    "family-celebration": 350,
    "graduation-prom": 1250,
    "masquerade-party": 300,
    "anniversary": 1000
}
const FOOD_PRICES = {
    "banquet": 1500,
    "reception": 800,
    "picnic": 600,
    "coffee-break": 300,
    "buffet": 500
}
const SERVICES_PRICES = {
    "cocktail-bar": 800,
    "music-program": 400,
    "photographer": 1000,
    "transport-services": 300,
    "staff": 500,
    "decor": 400
}
const BudgetCalculator = () =>{
    const PRICE_PER_PERSON = 10;
    let navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState(0);
    const [eventSelected, setEventSelected] = useState();
    const [checkedServices, setCheckedServices] = useState({});
    const [eventDate, setEventDate] = useState();
    const [foodSelected, setFoodSelected] = useState();
    const [numberOfPeople, setNumberOfPeople] = useState(0);

    useEffect(() => {
        let new_total = 0;
        // adding event selected
        eventSelected ? new_total += EVENT_PRICES[eventSelected] : new_total += 0
        // adding the number of people
        let total_people;
        numberOfPeople ? total_people = PRICE_PER_PERSON * numberOfPeople : total_people = 0
        new_total += total_people;
        // adding the food service they selected
        foodSelected ? new_total+= FOOD_PRICES[foodSelected] : new_total+= 0
        // adding additional services
        for(const [value] of Object.entries(checkedServices)){
            new_total += value
        }
        setTotalPrice(new_total)
    }, [eventSelected, checkedServices, numberOfPeople, foodSelected])

    const handleEventChange = (event) => {
        setEventSelected(event.target.value)
    }

    const handleFoodChange = (event) => {
        setFoodSelected(event.target.value)
    }

    const handleServiceSelect = (event) => {
        const service = event.target.value;
        const newCheckedServices = checkedServices;
        if(checkedServices.hasOwnProperty(service)){
            delete newCheckedServices[service];
        } else {
            newCheckedServices[service] = SERVICES_PRICES[service]
        }
        console.log('uodating checked evices')
        console.log(newCheckedServices)
        setCheckedServices({...newCheckedServices})
    }

    const handleRedirect = (e, url) => {
        e.preventDefault();
        navigate(url)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        alert('submitting form') 
    }
    return (
        <>
            <Header index={2}/>
            <main>
                <section className='intro budget-calc-intro'>
                    <h2 className='lg-header'>Budget Calculator</h2>
                    <div>
                        <p class="redirect-p" onClick={(e) => handleRedirect(e, '/')}>
                            Home
                        </p>
                        <span>/</span>
                        <p>Budget Calculator</p>
                    </div>
                </section>
                <section className='budget-calc-section'>
                    <h2 className='lg-header'>Calculate Your Party Budget!</h2>
                    <div className="event-form-wrapper">
                        <form action="#" onSubmit={(event) => handleFormSubmit(event)}>
                            <label htmlFor="event-type" id="event-label">
                                KIND OF EVENT
                            <select name="event-type" id="event-select" onChange={(event) => handleEventChange(event)}>
                                <option value="">Select your event</option>
                                <option value="birthday-parties">Birthday Parties</option>
                                <option value="corporate-meeting">Corporate Meeting</option>
                                <option value="family-celebration">Family Celebration</option>
                                <option value="graduation-prom">Graduation & Prom Nights</option>
                                <option value="masquerade-party">Masquerade Parties</option>
                                <option value="anniversary">Anniversaries</option>
                            </select>
                            </label>
                            <label htmlFor="date" id="event-date-label" value={eventDate} onChange={(event) => {setEventDate(event.target.value);console.log(event.target.value)}}>
                                DATE (MM/DD/YYYY)
                                <input type="date" id="event-date-input" name="date" onChange={(event) => {setEventDate(event.target.value);console.log(event.target.value)}}/>
                            </label>
                            <label htmlFor="number-of-people" id="event-people-label">
                                NUMBER OF PEOPLE
                                <input type="number" id="event-peope-input" name="number-of-people" placeholder='10' onChange={(event) => {setNumberOfPeople(event.target.value);console.log(event.target.value)}}/>
                            </label>
                            <label htmlFor="food" id="event-food-label">
                                TYPE OF FOOD
                                <select name="food" id="event-food-select" onChange={(event) => {handleFoodChange(event)}}>
                                    <option value="Not required">Not required</option>
                                    <option value="banquet">Banquet</option>
                                    <option value="reception">Reception</option>
                                    <option value="picnic">Picnic</option>
                                    <option value="coffee-break">Coffee break</option>
                                    <option value="buffet">Buffet counter</option>
                                </select>
                            </label>
                            <label htmlFor="additional-services" id="event-additional-services">
                                ADDITIONAL SERVICES
                                <ul className="additional-services-list" id="event-additional-services-list">
                                    <label htmlFor="additional-service">
                                        <input onChange={(event)=> handleServiceSelect(event)} type="checkbox" name="additional-service" value="cocktail-bar" id="" />
                                        Cocktail bar
                                    </label>
                                    <label htmlFor="additional-service">
                                        <input onChange={(event)=> handleServiceSelect(event)} type="checkbox" name="additional-service" value="music-program" id="" />
                                        Music program
                                    </label>
                                    <label htmlFor="additional-service">
                                        <input onChange={(event)=> handleServiceSelect(event)} type="checkbox" name="additional-service" value="photographer" id="" />
                                        Photographer
                                    </label>
                                    <label htmlFor="additional-service">
                                        <input onChange={(event)=> handleServiceSelect(event)} type="checkbox" name="additional-service" value="transport-services" id="" />
                                        Transport services
                                    </label>
                                    <label htmlFor="additional-service">
                                        <input onChange={(event)=> handleServiceSelect(event)} type="checkbox" name="additional-service" value="staff" id="" />
                                        Staff for the event
                                    </label>
                                    <label htmlFor="additional-service">
                                        <input onChange={(event)=> handleServiceSelect(event)} type="checkbox" name="additional-service" value="decor" id="" />
                                        Decor
                                    </label>
                                </ul>
                            </label>
                        </form>
                        <p className="total-budget">{totalPrice ? totalPrice : '0'}</p>
                    </div>
                </section>
                <section className="intro budget-banner">
                    <h2 className='lg-header'>We opened in 2013. We bring you only good surprices</h2>
                    <button className='md-btn main-blue-btn'>RESERVE EVENT</button>
                </section>
                <ContactInfo/>
                <Footer/>
            </main>
        </>
    )
}

export default BudgetCalculator;