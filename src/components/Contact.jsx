import React from "react";
import { useState } from "react";
import locationicon from "../assets/location.png";
import phoneicon from "../assets/phoneicon.png";
import clockicon from "../assets/clockicon.png";
import Banner from "./Banner";
import ShippingBanner from "./ShippingBanner";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {
    const alertTimeout = setTimeout(() => {
        setAlert(false);
    }, 3000);
    const [name, setName] = useState("");
    const [alert, setAlert] = useState(false);
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const submitForm = function (e) {
        e.preventDefault();
    };
    const emailParams = {
        name,
        email,
        subject,
        message,
    };

    return (
        <>
            <Navbar />
            <Banner />
            {alert ? (
                <div id="alert-alert">
                    <div
                        id="alert-contact"
                        class="alert alert-success"
                        role="alert"
                    >
                        Email has been send succesfully !
                    </div>
                </div>
            ) : null}
            <div className="contact">
                <div className="contact-text-top">
                    <h3>Get In Touch With Us</h3>
                    <p>
                        For More Information About Our Product & Services.
                        Please Feel Free To Drop Us An Email. Our Staff Always
                        Be There To Help You Out. Do Not Hesitate!
                    </p>
                </div>
                <div className="contact-content">
                    <div className="contact-left">
                        <div className="contact-box">
                            <div className="contact-box-img">
                                <img src={locationicon} alt="" />
                            </div>
                            <div className="contact-box-text">
                                <h4>Adress</h4>
                                <p>
                                    236 5th SE Avenue, New York NY10000, United
                                    States
                                </p>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="contact-box-img">
                                <img src={phoneicon} alt="" />
                            </div>
                            <div className="contact-box-text">
                                <h4>Phone</h4>
                                <p>
                                    Mobile: +(84) 546-6789 Hotline: +(84)
                                    456-6789
                                </p>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="contact-box-img">
                                <img src={clockicon} alt="" />
                            </div>
                            <div className="contact-box-text">
                                <h4>Working Time</h4>
                                <p>
                                    Monday-Friday: 9:00 - 22:00 Saturday-Sunday:
                                    9:00 - 21:00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-right">
                        <h6 className="contact-small-txt">Your Name</h6>
                        <form onSubmit={submitForm}>
                            <input
                                className="contact-right-name e"
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Abc"
                                type="text"
                            />

                            <h6 className="contact-small-txt">Email address</h6>

                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                className="contact-right-name"
                                placeholder="abc@def.com"
                                type="email"
                            />

                            <h6 className="contact-small-txt">Subject</h6>

                            <input
                                onChange={(e) => setSubject(e.target.value)}
                                className="contact-right-name"
                                placeholder="This is an opsional"
                                type="text"
                            />

                            <h6 className="contact-small-txt">Message</h6>

                            <input
                                onChange={(e) => setMessage(e.target.value)}
                                className="contact-right-message"
                                placeholder="Hi! I'd like to ask about"
                                type="text"
                            />
                        </form>
                        {console.log({ name, email, subject, message })}
                        <button
                            onClick={() => {
                                setAlert(true);
                                alertTimeout();
                            }}
                            className="contact-right-btn"
                        >
                            Submit
                        </button>
                    </div>
                </div>

                <ShippingBanner />
                <Footer />
            </div>
        </>
    );
};

export default Contact;
