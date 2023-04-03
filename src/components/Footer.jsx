import React from "react";

const Footer = () => {
    return (
        <div className="footer-content">
            <div className="footer-left">
                <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
            <div className="footer-right">
                <div className="footer-links">
                    <h3>Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h3>Help</h3>
                    <ul>
                        <li>Payment Opsion</li>
                        <li>Returns</li>
                        <li>Privacy Policies</li>
                    </ul>
                </div>
                <div>
                    <h3>Newsletter</h3>
                    <div>
                        <form>
                            <input className="footer-email" type="email" />
                            <button className="footer-subscribe-btn">
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
