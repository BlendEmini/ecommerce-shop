import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import ShippingBanner from "./ShippingBanner";
import BlogFirstPic from "../assets/blog-1.png";
import BlogSecondPic from "../assets/blog-2.png";
import BlogThirdPic from "../assets/blog-3.png";
import BlogCards from "./BlogCards";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
import SearchIcon from "../assets/searchicon.png";
import { useState } from "react";
const data = [
    {
        id: 1,
        image: BlogFirstPic,
        publishedBy: "Admin",
        publishedDate: "14 Oct 2022",
        category: "Wood",
        title: "Going all-in with millennial design",
        textContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        btnText: "Read More",
    },
    {
        id: 2,
        image: BlogSecondPic,
        publishedBy: "Admin",
        publishedDate: "14 Oct 2022",
        category: "Handmade",
        title: "Exploring new ways of decorating",
        textContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        btnText: "Read more",
    },
    {
        id: 3,
        image: BlogThirdPic,
        publishedBy: "Admin",
        publishedDate: "14 Oct 2022",
        category: "Wood",
        title: "Handmade pieces that took time to make",
        textContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        btnText: "Read More",
    },
    {
        id: 4,
        image: BlogFirstPic,
        publishedBy: "Admin",
        publishedDate: "14 Oct 2022",
        category: "Handmade",
        title: "Handmade ",
        textContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        btnText: "Read More",
    },
    {
        id: 5,
        image: BlogThirdPic,
        publishedBy: "Admin",
        publishedDate: "14 Oct 2022",
        category: "Wood",
        title: "Handmade pieces that took time to make",
        textContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        btnText: "Read More",
    },
    {
        id: 6,
        image: BlogThirdPic,
        publishedBy: "Admin",
        publishedDate: "14 Oct 2022",
        category: "Wood",
        title: "Handmade pieces that took time to make",
        textContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        btnText: "Read More",
    },
    {
        id: 7,
        image: BlogThirdPic,
        publishedBy: "Admin",
        publishedDate: "14 Oct 2022",
        category: "Wood",
        title: "Handmade pieces that took time to make",
        textContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        btnText: "Read More",
    },
];

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(3);
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = data.slice(firstPostIndex, lastPostIndex);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const { category } = data;
    const asideData = data.slice(0, 6);
    console.log(asideData);
    const [handmadeFilt] = data.filter(
        ({ category }) => category === "Handmade"
    );
    console.log(handmadeFilt);
    const [search, setSearch] = useState("");
    const handmade = data.find(({ category }) => category === "Handmade");
    const wood = data.find(({ category }) => category === "Wood");
    const [woodFilter, setwoodFilter] = useState(false);
    const [handmadeFilter, sethandmadeFilter] = useState(false);
    const [allFilter, setallFilter] = useState(true);

    return (
        <>
            <Navbar />
            <Banner />
            <div className="blog">
                <div className="blog-content">
                    <div className="blog-cards">
                        {allFilter
                            ? currentPosts
                                  .filter((card) => {
                                      return search.toLowerCase() === ""
                                          ? card
                                          : card.category
                                                .toLowerCase()
                                                .includes(search);
                                  })
                                  .map((card) => (
                                      <BlogCards card={card} key={card.id} />
                                  ))
                            : null}

                        {/* {woodFilter
                            ? [wood].map((card) => (
                                  <BlogCards card={wood} key={wood.id} />
                              ))
                            : null}
                        {handmadeFilter
                            ? [handmadeFilt].map((card) => (
                                  <BlogCards
                                      card={handmadeFilt}
                                      key={handmadeFilt.id}
                                  />
                              ))
                            : null} */}
                    </div>
                    <div className="blog-right-part">
                        <div className="blog-filter-category">
                            <input
                                onChange={(e) => setSearch(e.target.value)}
                                type="text"
                            />
                            <img src={SearchIcon} alt="" />
                            <h3>Categories</h3>
                            <div className="filterbtns">
                                <button className="filterBtn">Crafts</button>
                                <button className="filterBtn">Design</button>
                                <button
                                    // onClick={() => {
                                    //     sethandmadeFilter(true);
                                    //     setallFilter(false);
                                    //     setwoodFilter(false);
                                    // }}
                                    className="filterBtn"
                                >
                                    Handmade
                                </button>
                                <button className="filterBtn">Interior</button>
                                <button
                                    // onClick={() => {
                                    //     sethandmadeFilter(false);
                                    //     setallFilter(false);
                                    //     setwoodFilter(true);
                                    // }}
                                    className="filterBtn"
                                >
                                    Wood
                                </button>
                            </div>
                        </div>
                        <div className="recent-posts">
                            <h3>Recent Posts</h3>
                            {asideData.map((item) => (
                                <div key={item.id} className="Recent-posts-box">
                                    <div>
                                        <img src={item.image} alt="" />{" "}
                                    </div>
                                    <div>
                                        <h6>{item.title} </h6>
                                        <p>{item.publishedDate} </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {allFilter ? (
                    <Pagination
                        postsPerPage={postPerPage}
                        totalPosts={data.length}
                        paginate={paginate}
                    />
                ) : null}
                <ShippingBanner />
                <Footer />
            </div>
        </>
    );
};

export default Blog;
