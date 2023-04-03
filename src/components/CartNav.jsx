import React from "react";
import { useContext } from "react";
import CartContext from "../CartContext";
import cartIcon from "../assets/cart-logo.png";
import { useNavigate } from "react-router-dom";
const CartNav = () => {
    const navigate = useNavigate();
    const {
        items,
        totalOfAllProducts,
        setCartNav,
        totalPrice,
        setTotalPrice,
        productInCart,
        setProductInCart,
    } = useContext(CartContext);
    const navigateCheckout = () => navigate("/checkout");

    const navigateCart = () => navigate("/cart");
    // const { items } = useContext(CartContext);
    return (
        <div className="cart-nav">
            <div className="cart-nav-header">
                <h1>Shopping Cart</h1>
                <img
                    width={18}
                    onClick={() => setCartNav(false)}
                    height={18}
                    src={cartIcon}
                    alt=""
                />
            </div>

            {items.map((item) => (
                <div className="cart-nav-prod" sty>
                    <img className="cart-nav-img" src={item.image} alt="" />
                    <div>
                        <p>{item.title}</p>
                        <h3>
                            {item.quantity} x Rs.{item.price}.00{" "}
                        </h3>
                    </div>
                </div>
            ))}
            <div className="cart-nav-sub">
                <h5>Subtotal</h5>
                <h4>Rs.{totalOfAllProducts}.00 </h4>
            </div>
            <div className="cart-nav-btns">
                <button onClick={navigateCart}>View Cart</button>
                <button onClick={navigateCheckout}>Checkout</button>
            </div>
        </div>
    );
};

export default CartNav;
