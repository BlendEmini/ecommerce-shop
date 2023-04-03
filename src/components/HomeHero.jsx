import React from "react";
import HomeHeroCauch from "../assets/HomeHeroCauch.png";
import { useNavigate } from "react-router-dom";
const HomeHero = () => {
    const navigate = useNavigate();

    const navigateShop = () => navigate("/shop");
    return (
        <>
            <div className="HomeHero">
                <div className="HomeHeroTxt">
                    <h2>Rocket Single Sitter</h2>
                    <button onClick={navigateShop}>Shop Now</button>
                </div>
                <img className="homeheroimg" src={HomeHeroCauch} alt="" />
            </div>
        </>
    );
};

export default HomeHero;
