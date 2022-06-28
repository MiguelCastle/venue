import React from "react";

const ContactInfo = () => {
    return (
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
    )
}

export default ContactInfo;