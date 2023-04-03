import React from "react";

const BlogCards = ({ card }) => {
    return (
        <div className="blog-cards-each">
            <div>
                <img
                    className="blog-cards-img"
                    src={card.image}
                    alt="BlogPic"
                />
            </div>
            <div className="blog-info">
                <div>
                    <h4>{card.publishedBy}</h4>
                </div>
                <div>
                    <h4>{card.publishedDate} </h4>
                </div>
                <div>
                    {" "}
                    <h4>{card.category} </h4>{" "}
                </div>
            </div>
            <div className="blog-title">
                <h3>{card.title} </h3>
            </div>
            <div className="blog-paragraph">
                <p>{card.textContent}</p>
            </div>
            <div>
                <button className="blog-btn">{card.btnText}</button>
            </div>
        </div>
    );
};
export default BlogCards;
