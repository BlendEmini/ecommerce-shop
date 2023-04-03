import React from "react";
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
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import Banner from "./Banner";
import ShippingBanner from "./ShippingBanner";
import Footer from "./Footer";
import Pagination from "./Pagination";
const shopProductsData = [
    {
        id: 1,
        image: Maskgroup1,
        title: "Trenton modular sofa_3",
        price: "Rs. 25,000.00",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
    },
    {
        id: 2,
        image: Maskgroup2,
        title: "Trenton modular sofa_3",
        price: "Rs. 22,000.00",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
    },
    {
        id: 3,
        image: Maskgroup3,
        title: "Trenton modular sofa_3",
        price: "Rs. 23,000.00",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
    },
    {
        id: 4,
        image: Maskgroup4,
        title: "Trenton modular sofa_3",
        price: "Rs. 24,000.00",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
    },
    {
        id: 5,
        image: Maskgroup5,
        title: "Trenton modular sofa_3",
        price: "Rs. 25,000.00",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
    },
    {
        id: 6,
        image: Maskgroup6,
        title: "Trenton modular sofa_3",
        price: "Rs. 26,000.00",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
    },
    {
        id: 7,
        image: Maskgroup7,
        title: "Trenton modular sofa_3",
        price: "Rs. 21,000.00",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
    },
    {
        id: 8,
        image: Maskgroup8,
        title: "Trenton modular sofa_3",
        price: "Rs. 27,000.00",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
    },
    {
        id: 9,
        image: Maskgroup9,
        title: "Trenton modular sofa_3",
        price: "Rs. 24,000.00",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
    },
    {
        id: 10,
        image: Maskgroup10,
        title: "Trenton modular sofa_3",
        price: "Rs. 29,900.00",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
    },
    {
        id: 11,
        image: Maskgroup11,
        title: "Trenton modular sofa_3",
        price: "Rs. 26,000.00",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
    },
    {
        id: 12,
        image: Maskgroup12,
        title: "Trenton modular sofa_3",
        price: "Rs. 22,000.00",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
    },
    {
        id: 13,
        image: Maskgroup13,
        title: "Trenton modular sofa_3",
        price: "Rs. 25,000.00",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
    },
    {
        id: 14,
        image: Maskgroup14,
        title: "Trenton modular sofa_3",
        price: "Rs. 24,000.00",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
    },
    {
        id: 15,
        image: Maskgroup15,
        title: "Trenton modular sofa_3",
        price: "Rs. 28,000.00",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit natus est a cum voluptatem consectetur provident nisi? Incidunt ullam possimus veniam itaque.",
        size: ["L", "XL", "XS"],
    },
];
const ShopProducts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(12);
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = shopProductsData.slice(firstPostIndex, lastPostIndex);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    console.log(currentPage);
    return (
        <>
            <Navbar />
            <Banner />
            <Link to={`shop/${shopProductsData.id}`}>
                <div className="Shop-Products">
                    {currentPosts.map((shopProductsData) => (
                        <ProductCard
                            key={shopProductsData.id}
                            shopProductsData={shopProductsData}
                        />
                    ))}
                </div>
            </Link>
            <div id="pagination-products">
                <Pagination
                    postsPerPage={postPerPage}
                    totalPosts={shopProductsData.length}
                    paginate={paginate}
                />
            </div>
            <ShippingBanner />
            <Footer />
        </>
    );
};

export default ShopProducts;
