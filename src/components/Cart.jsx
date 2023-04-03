import React, { useState } from "react";
import Banner from "./Banner";
import CartContext from "../CartContext";
import ShippingBanner from "./ShippingBanner";
import Footer from "./Footer";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const Cart = () => {
    // const { item } = useContext(CartContext);

    const navigate = useNavigate();
    const navigateCheckout = () => navigate("/checkout");

    const {
        items,
        totalOfAllProducts,
        totalPrice,
        setTotalPrice,
        productInCart,
        setProductInCart,
    } = useContext(CartContext);
    const { image, price, title } = { items };

    return (
        <>
            <Navbar />
            <Banner />
            <div className="cart-comp">
                <div id="cartprod">
                    <div className="cart-desc">
                        <h3>Product</h3>
                        <h3>Price</h3>
                        <h3>Quantity</h3>
                        <h3>Subtotal</h3>
                    </div>
                    {items.map((item) => (
                        <div className="item-rendered-cart" sty>
                            <img
                                className="item-cart-img"
                                src={item.image}
                                alt=""
                            />
                            {setProductInCart(() => item.title)}
                            <p id="prod-in-cart-res">{productInCart}</p>

                            <p>Rs.{parseInt(item.price)}.00 </p>

                            <h4>{item.quantity} </h4>
                            {setTotalPrice(
                                () =>
                                    parseInt(item.price) *
                                    parseInt(item.quantity)
                            )}

                            <h3>
                                Rs.{item.price * item.quantity}
                                .00
                            </h3>
                        </div>
                    ))}
                </div>
                <div className="cart-total">
                    <h1>Cart Total</h1>
                    <div className="flex">
                        <h3>Subtotal</h3>
                        <p>Rs.{totalOfAllProducts} </p>
                    </div>
                    <div className="flex">
                        <h3>Total</h3>
                        <h4>Rs.{totalOfAllProducts} </h4>
                    </div>
                    <button onClick={navigateCheckout}>Check Out</button>
                </div>
            </div>
            <ShippingBanner />
            <Footer />
        </>
    );
};

export default Cart;
