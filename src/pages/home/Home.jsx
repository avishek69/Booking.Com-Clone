import React from "react";
import Featured from "../../components/featured/Featured";
import FeProperties from "../../components/featuredProperties/FeProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css" 

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
      <Featured/>
      <h1 className="homeTitle"> Browse by Property Type</h1>
      <PropertyList/>
      <h1 className="homeTitle"> Homes Guests Love</h1>
      <FeProperties/>
      <MailList/>
      <Footer/>
      </div>
    </div>
  );
};

export default Home;
