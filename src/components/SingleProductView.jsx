import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../CartContext";
import Maskgroup1 from "../assets/ShopImg/Maskgroup1.png";
import Maskgroup2 from "../assets/ShopImg/Maskgroup2.png";
import Maskgroup3 from "../assets/ShopImg/Maskgroup3.png";
import Maskgroup4 from "../assets/ShopImg/Maskgroup4.png";
import Maskgroup5 from "../assets/ShopImg/Maskgroup5.png";
import Maskgroup6 from "../assets/ShopImg/Maskgroup6.png";
import Maskgroup7 from "../assets/ShopImg/Maskgroup7.png";
import Maskgroup8 from "../assets/ShopImg/Maskgroup8.png";
import Maskgroup9 from "../assets/ShopImg/Maskgroup9.png";
import Maskgroup10 from "../assets/ShopImg/Maskgroup10.png";
import Maskgroup11 from "../assets/ShopImg/Maskgroup11.png";
import Maskgroup12 from "../assets/ShopImg/Maskgroup12.png";
import Maskgroup13 from "../assets/ShopImg/Maskgroup13.png";
import Maskgroup14 from "../assets/ShopImg/Maskgroup14.png";
import Maskgroup15 from "../assets/ShopImg/Maskgroup15.png";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import RelatedProducts from "./RelatedProducts";
import Footer from "./Footer";

const shopProductsData = [
    {
        id: 1,
        image: Maskgroup1,
        title: "Trenton modular sofa_3",
        price: 2500000,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
        color: ["Blue", "Black", "Red"],
    },
    {
        id: 2,
        image: Maskgroup2,
        title: "Trenton modular sofa_3",
        price: 2200000,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
        color: ["Blue", "Black", "Red"],
    },
    {
        id: 3,
        image: Maskgroup3,
        title: "Trenton modular sofa_3",
        price: 230000,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
        color: ["Blue", "Black", "Red"],
    },
    {
        id: 4,
        image: Maskgroup4,
        title: "Trenton modular sofa_3",
        price: 2400000,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
        color: ["Blue", "Black", "Red"],
    },
    {
        id: 5,
        image: Maskgroup5,
        title: "Trenton modular sofa_3",
        price: 2500000,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
        color: ["Blue", "Black", "Red"],
    },
    {
        id: 6,
        image: Maskgroup6,
        title: "Trenton modular sofa_3",
        price: 2600000,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
        color: ["Blue", "Black", "Red"],
    },
    {
        id: 7,
        image: Maskgroup7,
        title: "Asgaard Sofa",
        price: 2100000,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
        color: ["Blue", "Black", "Red"],
    },
    {
        id: 8,
        image: Maskgroup8,
        title: "Trenton modular sofa_3",
        price: 2700000,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
        color: ["Blue", "Black", "Red"],
    },
    {
        id: 9,
        image: Maskgroup9,
        title: "Trenton modular sofa_3",
        price: 2400000,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
        color: ["Blue", "Black", "Red"],
    },
    {
        id: 10,
        image: Maskgroup10,
        title: "Trenton modular sofa_3",
        price: 2990000,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
        color: ["Blue", "Black", "Red"],
    },
    {
        id: 11,
        image: Maskgroup11,
        title: "Trenton modular sofa_3",
        price: 2600000,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
        color: ["Blue", "Black", "Red"],
    },
    {
        id: 12,
        image: Maskgroup12,
        title: "Trenton modular sofa_3",
        price: 2200000,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
        color: ["Blue", "Black", "Red"],
    },
    {
        id: 13,
        image: Maskgroup13,
        title: "Trenton modular sofa_3",
        price: 2500000,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
        color: ["Blue", "Black", "Red"],
    },
    {
        id: 14,
        image: Maskgroup14,
        title: "Trenton modular sofa_3",
        price: 2400000,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
        color: ["Blue", "Black", "Red"],
    },
    {
        id: 15,
        image: Maskgroup15,
        title: "Trenton modular sofa_3",
        price: 2800000,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
        color: ["Blue", "Black", "Red"],
    },
];
const SingleProductView = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSize] = useState("");
    let pathId = window.location.pathname.split("/");
    const Id = pathId[1];

    const singleProductData = shopProductsData.find(
        ({ id }) => id.toString() === Id
    );
    // console.log(singleProductData);
    const { id, image, title, price, text, size, color } = singleProductData;
    const { addToCart } = useContext(CartContext);
    return (
        <>
            {" "}
            <Navbar />
            <div className="singleproductpath-header">
                <h4>Home </h4> <strong>{">"}</strong>
                <h4>Shop </h4>
                <strong>{">"}</strong>
                <h4>|</h4>
                <h3>{singleProductData.title}</h3>
            </div>
            <div className="singleProductPage">
                <div>
                    <img id="single-page-img" src={image} alt="" />
                </div>
                <div className="product-info">
                    <div id="tpt">
                        <h2>{title}</h2>
                        <h4>{price}</h4>
                        <p>{text}</p>
                    </div>
                    <h5>Size</h5>
                    <div className="size-btns">
                        <span>
                            <button onClick={() => setSize("L")}>
                                {size[0]}
                            </button>
                        </span>
                        <span>
                            <button onClick={() => setSize("XL")}>
                                {size[1]}
                            </button>
                        </span>
                        <span>
                            <button onClick={() => setSize("XS")}>
                                {size[2]}
                            </button>
                        </span>
                    </div>
                    <h5>Color</h5>
                    <div id="color-btns">
                        <span>
                            <button id="blue" type="radio" value={color[0]} />
                        </span>
                        <span>
                            <button id="black" type="radio" value={color[1]} />
                        </span>
                        <span>
                            <button id="yellow" type="radio" value={color[2]} />
                        </span>
                    </div>
                    <div className="quantity-cart">
                        <div className="quantityBtns">
                            <button
                                className="quantityplusminus"
                                onClick={() => setQuantity(quantity - 1)}
                            >
                                -
                            </button>
                            <h6>{quantity}</h6>
                            <button
                                className="quantityplusminus"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>
                        </div>

                        <button
                            onClick={() =>
                                addToCart(quantity, price, image, title)
                            }
                            id="addtocartbtn"
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            <RelatedProducts shopProductsData={shopProductsData} />
            <Footer />
        </>
    );
};
export default SingleProductView;
