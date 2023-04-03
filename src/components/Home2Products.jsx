import React from "react";
import HomeTable1 from "../assets/HomeTable1.png";
import HomeCauch from "../assets/Homecauch.png";
import { useNavigate } from "react-router-dom";
const Home2Products = () => {
    const navigate = useNavigate();

    const navigateProduct1 = () => navigate("/8");
    const navigateProduct2 = () => navigate("/6");
    return (
        <div className="home-2-products">
            <div className="home-2-products-card">
                <img className="hometable-img" src={HomeTable1} alt="" />
                <div className="home-2-text">
                    <h4>Side Table</h4>
                    <button onClick={navigateProduct1}>View More</button>
                </div>
            </div>
            <div className="home-2-products-card">
                <img className="hometable-img" src={HomeCauch} alt="" />
                <div className="home-2-text cauch">
                    <h4>Side Table</h4>
                    <button onClick={navigateProduct1}>View More</button>
                </div>
            </div>
        </div>
    );
};

export default Home2Products;
