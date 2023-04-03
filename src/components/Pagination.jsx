import React from "react";
import BlogCards from "./BlogCards";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="pagination-div">
            {pageNumbers.map((number) => (
                <li key={number} className="pageitem">
                    <a
                        onClick={() => paginate(number)}
                        href="#"
                        className="page-link"
                    >
                        {number}
                    </a>
                </li>
            ))}
        </div>
    );
};

export default Pagination;
