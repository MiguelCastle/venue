import React from "react";
import { ReactComponent as Logo } from '../../../assets/svgs/diamond-hall-logo.svg';

const Footer = () => {
    return (
        <footer className="flex-col">
            <Logo/>
            <p>This is a simple website - cmsmasters © 2022 / All Rights Reserved </p>
        </footer>
    )
}

export default Footer;