import React from "react";
import Asgaardsofa1 from "../assets/Asgaardsofa1.png";
import { useNavigate } from "react-router-dom";

const Asgardsofahome = () => {
    const navigate = useNavigate();

    const navigateProduct = () => navigate("/7");
    return (
        <div className="asgardsofahome">
            <img src={Asgaardsofa1} alt="" />
            <div className="asgard-text">
                <h5>New Arrivals</h5>
                <h2>Asgaard Sofa</h2>
                <button onClick={navigateProduct}>Order Now</button>
            </div>
        </div>
    );
};

export default Asgardsofahome;
