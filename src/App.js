import "./index.css";
import React from "react";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Checkout from "./components/Checkout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ShopProducts from "./components/ShopProducts";
import SingleProductView from "./components/SingleProductView";
import RelatedProducts from "./components/RelatedProducts";
import Cart from "./components/Cart";
import { CartProvider } from "./CartContext";
function App() {
    return (
        <div className="App">
            <div>
                <CartProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/shop" element={<ShopProducts />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route
                                path="/:id"
                                element={<SingleProductView />}
                            />
                            <Route
                                path="/related"
                                element={<RelatedProducts />}
                            />
                        </Routes>
                    </BrowserRouter>
                </CartProvider>
            </div>
        </div>
    );
}

export default App;
