import React, { useState } from "react";
import Banner from "../components/Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useContext } from "react";
import CartContext from "../CartContext";
import ShippingBanner from "./ShippingBanner";

// const states = countries.states;
const Checkout = () => {
    const alertTimeout = setTimeout(() => {
        setAlert(false);
    }, 3000);
    const [bankTransfer, setBankTransfer] = useState(false);
    const [cashTransfer, setCashTransfer] = useState(false);
    const [totalItemPrice, setTotalItemPrice] = useState(0);
    const [alert, setAlert] = useState(false);
    const {
        items,
        setItems,
        totalOfAllProducts,
        totalPrice,
        setTotalPrice,
        productInCart,
        setProductInCart,
    } = useContext(CartContext);
    return (
        <>
            <Navbar />
            <Banner />

            <div className="Checkout-Content">
                {alert ? (
                    <div id="alert-alert">
                        <div
                            id="alert-contact"
                            class="alert alert-success"
                            role="alert"
                        >
                            Order Has Been Placed Succesfully !
                        </div>
                    </div>
                ) : null}
                <div className="Billing-details-left">
                    <h1>Billing Details</h1>
                    <div>
                        <div className="First-Last-Name-txt">
                            <h3>First Name</h3> <h4>Last Name</h4>{" "}
                        </div>
                        <div className="First-Last-Name-input-box">
                            <input
                                className="First-Last-Name-input"
                                type="text"
                            />
                            <input
                                className="First-Last-Name-input"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="checkout-billingDetails">
                        <h4>Company Name (Optional)</h4>
                        <input type="text" />
                        <h4>Country / Region</h4>
                        <select name="" id="">
                            <option placeholder="Sri Lanka"></option>
                            {/* {countries.map((value) => (
                                <option
                                    key={value.country_id}
                                    value={value.country_name}
                                    id={value.country_id}
                                >
                                    {value.country_name}{" "} */}
                            {/* </option>
                            ))} */}
                        </select>

                        <h4>Street address</h4>
                        <input type="text" />

                        <h4>Town / City</h4>
                        <input type="text" />
                        <h4>Province</h4>
                        <select name="" id="">
                            <option>
                                <p>Western Province</p>{" "}
                            </option>
                            {/* {countries.map((value) => (
                                <option
                                    value={value.states.state_name}
                                    key={value.states.state_id}
                                >
                                    {value.states.state_name}
                                </option>
                            ))} */}
                        </select>
                        <h4>ZIP code</h4>
                        <input type="number" />
                        <h4>Phone</h4>
                        <input type="number" />
                        <h4>Email adress</h4>
                        <input type="email" />
                        <input
                            type="text"
                            placeholder="Additional Information"
                        />
                    </div>
                </div>
                <div className="checkout-subtotal">
                    <div className="checkout-flex">
                        <h4>Product</h4>
                        <h4>Subtotal</h4>
                    </div>
                    {items.map((item) => (
                        <div className="checkout-flex">
                            <p>{item.title}</p>
                            {setTotalPrice(() => item.price * item.quantity)}
                            <h6>Rs.{item.price * item.quantity} </h6>
                        </div>
                    ))}
                    <div className="checkout-flex">
                        <h6>Subtotal</h6>
                        <h6>Rs.{totalOfAllProducts} </h6>
                    </div>
                    <div className="checkout-flex">
                        <h6>Total</h6>
                        <h3>Rs.{totalOfAllProducts} </h3>
                    </div>
                    <span className="checkout-line"></span>
                    <form className="form" action="submit">
                        <div className="radio-content">
                            <input
                                type="radio"
                                name="radioo"
                                id=""
                                onClick={() => {
                                    setBankTransfer(true);
                                    setCashTransfer(false);
                                }}
                            />
                            <h4>Direct Bank Transfer</h4>
                        </div>
                        <div>
                            {bankTransfer ? (
                                <p>
                                    Make your payment directly into our bank
                                    account. Please use your Order ID as the
                                    payment reference. Your order will not be
                                    shipped until the funds have cleared in our
                                    account.
                                </p>
                            ) : null}
                        </div>

                        <div className="radio-content">
                            <input
                                type="radio"
                                name="radioo"
                                id=""
                                onClick={() => {
                                    setCashTransfer(true);
                                    setBankTransfer(false);
                                }}
                            />
                            <h4>Cash on Delivery</h4>
                        </div>

                        <div>
                            {cashTransfer ? (
                                <p>
                                    Make your payment directly into when you
                                    recieve your product
                                </p>
                            ) : null}
                        </div>
                    </form>
                    <p>
                        Your personal data will be used to support your
                        experience throughout this website, to manage access to
                        your account, and for other purposes described in our{" "}
                        <b> privacy policy.</b>
                    </p>
                    <div className="btn-divorder">
                        <button
                            onClick={() => {
                                setItems([]);
                                if (items.length !== 0) {
                                    setAlert(true);
                                    alertTimeout();
                                }
                            }}
                            className="btn-placeorder"
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
            {/* <ShippingBanner /> */}
            <Footer />
        </>
    );
};

export default Checkout;
