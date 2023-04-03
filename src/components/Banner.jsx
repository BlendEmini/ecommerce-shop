import React from "react";
import BannerImg from "../assets/banner-img.png";
import icon from "../assets/small-icon.png";

const banner = () => {
    const path = window.location.pathname.split("/");

    return (
        <div className="banner-content">
            <img className="banner-img" src={BannerImg} alt="" srcset="" />
            <div className="banner-icon-aps">
                <div className="banner-txt">
                    <img src={icon} alt="" />
                    <h1> {path} </h1>
                    <div className="banner-txt-path">
                        <h5>
                            {" "}
                            <b>Home</b>
                        </h5>{" "}
                        <h5>&gt; {path} </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default banner;
