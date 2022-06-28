import React from "react";
import ContactForm from "../../../common/forms/ContactForm";


const ContactSection = () => {
    return (
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
    )
}

export default ContactSection;