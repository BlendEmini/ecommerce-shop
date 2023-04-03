import React, { useState } from "react";

import cartIcon from "../assets/cart-logo.png";
import heartIcon from "../assets/heart-icon.png";
import searchIcon from "../assets/search-icon.png";
import accountIcon from "../assets/account-icon.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartNav from "./CartNav";
import CartContext from "../CartContext";
const Navbar = () => {
    const navigate = useNavigate();

    const navigateCart = () => navigate("/cart");
    const navigateHome = () => navigate("/");
    const navigateContact = () => navigate("/contact");
    const navigateShop = () => navigate("/shop");
    const { items, cartNav, setCartNav } = useContext(CartContext);
    return (
        <div className="navi">
            <div className="navbar">
                <div className="navbar-links">
                    <h6 onClick={navigateHome}>Home</h6>

                    <h6 onClick={navigateShop}>Shop</h6>
                    <h6>About</h6>
                    <h6 onClick={navigateContact}>Contact</h6>
                </div>

                <div className="navbar-icons">
                    <img src={accountIcon} alt="" srcset="" />
                    <img src={searchIcon} alt="" srcset="" />
                    <img src={heartIcon} alt="" srcset="" />
                    <img
                        onClick={() => setCartNav(true)}
                        src={cartIcon}
                        alt=""
                        srcset=""
                    />
                    {cartNav ? <CartNav /> : null}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
