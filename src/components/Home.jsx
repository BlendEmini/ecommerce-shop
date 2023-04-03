import React from "react";
import Navbar from "./Navbar";
import OurblogHome from "./OurblogHome";
import Footer from "./Footer";
import IGBanner from "./IGBanner";
import Asgardsofahome from "./Asgardsofahome";
import Home2Products from "./Home2Products";
import HomeHero from "./HomeHero";
const Home = () => {
    return (
        <div>
            <Navbar />
            <HomeHero />
            <Home2Products />
            <Asgardsofahome />
            <OurblogHome />
            <IGBanner />
            <Footer />
        </div>
    );
};

export default Home;
