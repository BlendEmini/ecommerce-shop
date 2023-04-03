import React from "react";
import BlogFirstPic from "../assets/ourblogpic1.png";
import BlogSecondPic from "../assets/ourblogpic2.png";
import BlogThirdPic from "../assets/ourblogpic3.png";
import { useNavigate } from "react-router-dom";
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
        title: "Going all-in with millennial design",
        textContent:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        btnText: "Read More",
    },
];
const OurblogHome = () => {
    const navigate = useNavigate();
    const navigateBlog = () => navigate("/blog");

    return (
        <div className="containerourbloghome">
            <h1>Our Blogs</h1>
            <p>
                Find a bright ideal to suit your taste with our great selection
            </p>
            <div className="ourbloghome">
                {data.map((data) => (
                    <div key={data.id} className="container-ourbloghome">
                        <img
                            className="ourblogimgs"
                            width={393}
                            src={data.image}
                            alt=""
                        />
                        <p>{data.title} </p>
                        <button onClick={navigateBlog}>
                            {" "}
                            <h6> {data.btnText} </h6>
                        </button>
                        <div className="ourbloghome-prgf">
                            <p>5 min</p>
                            <p> {data.publishedDate} </p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={navigateBlog} className="btn-view-all-blog">
                <h6> View All Post </h6>
            </button>
        </div>
    );
};

export default OurblogHome;
