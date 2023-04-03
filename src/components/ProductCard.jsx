import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ shopProductsData }) => {
    return (
        <div id="products-shop-link">
            <Link id="link" to={`/${shopProductsData.id}`}>
                <div className="shop-product-card">
                    <img
                        className="shop-product-img"
                        src={shopProductsData.image}
                        alt=""
                    />
                    <p>{shopProductsData.title}</p>
                    <h5>{shopProductsData.price}</h5>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
