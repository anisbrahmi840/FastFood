import React from 'react';
import {Instagram, Twitter,  Facebook, LinkedIn} from "@mui/icons-material";

function Footer(props) {
    return (
        <div className="footer">
            <div className="socialMedia">
            <Instagram />
            <Twitter />
            <Facebook />
            <LinkedIn />
            </div>
            <p>&copy; 2022 PIZZA@order.com</p>
        </div>
    );
}

export default Footer;