import React from "react";
import ourIGbanner from "../assets/ourIGbanner.png";
const IGBanner = () => {
    return (
        <div className="igbanner-container">
            <img className="igbanner-img" src={ourIGbanner} alt="" />
            <div className="igbanner-txt">
                <h1>Our Instagram</h1>
                <p>Follow our store on Instagram</p>
                <button>Follow Us</button>
            </div>
        </div>
    );
};

export default IGBanner;
