import React from 'react';
import  pizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'
function Contact(props) {
    return (
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage: `url(${pizzaLeft})`}}></div>
            <div className="rightSide">
                <h1>CONTACT US</h1>

                <form id="contact-form" method="POST">
                    <label htmlFor="name"> Full Name</label>
                    <input name="name" placeholder="Enter full name..." type="text" autoFocus/>
                    <label htmlFor="email">Email</label>
                    <input name="name" placeholder="Email..." type="email"/>
                    <label htmlFor="message">Message</label>
                    <textarea name="" id="" cols="30" rows="6" placeholder="Enter message" required></textarea>
                    <button type="submit">Send Message</button>

                </form>
            </div>

        </div>
    );
}

export default Contact;