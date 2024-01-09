import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Features from "./Components/Features/Features";
import Partners from "./Components/Partners/Partners";
import JoinUs from "./Components/JoinUs/JoinUs";
import Feedback from "./Components/Feedback/Feedback";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Features />
      <Partners />
      <JoinUs />
      <Feedback />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
