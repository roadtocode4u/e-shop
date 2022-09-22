import React from "react";
import "./LandingPage.css";
import FeatureCard from "../FeatureCard/FeatureCard";
import NavBar from "../NavBar/NavBar";

import VegetableImg from "./img/allVegetable.jpg";
// import ShopImg from "./img/allShop.jpg";
// import ClothsImg from "./img/allCloths.jpg";
import KichenImg from "./img/pinksKichen.jpg";

import FoodDrinkImg from "./img/food-drink.jpg";
import BeautyImg from "./img/beauty.webp";
import ElectronicImg from "./img/electronics.webp";
import JewelaryImg from "./img/jewelry.webp";

const headerImage = Math.floor(Math.random() * 2) ? VegetableImg : KichenImg;

function LandingPage() {
  return (
    <>
    <NavBar />
      <div className="consumer">
        <br />
        <div className="container">
          <div className="row start-division">
            <div className="col-md-6 p-4 start-text">
              <h1 className="head-h2 mt-4 text-light">
                Stop selling. Start helping.
              </h1>
              <p className="paragraph mt-3">
                Shoppe-Savvy is the perfect solution for your e-commerce
                website, which is easy to build and maintain. No technical
                knowledge is needed. Register now and start selling your
                products in minutes.
              </p>

              <form className="mt-4">
                <input
                  className="btn-placeholder me-2"
                  type="search"
                  placeholder="Enter your email address"
                />
                <button className="btn-search mt-2" type="submit">
                  <b>Search</b>
                </button>
              </form>

              <p className="paragraph-content mt-2">
                Try Shoppe-Savvy free for 14 days, register now! No credit card
                required.
              </p>
            </div>
            <div className="col-md-6 ">
              <br />

              <img
                className="img-fluid mx-auto d-block header-img"
                src={headerImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="consumer-one">
        <div className="container">
          <h1>
            <b>Grow your business by taking it online</b>
          </h1>
          <h5>
            We provide a online platform for you to sell your products online
            and reach it to every home, increase customer base and manage your
            business.
          </h5>

          <div className="row mt-4">
            <div className="col-md-3 col-sm-6 col-xs-12 imagetiles">
              <img src={BeautyImg} className="img-responsive  my-2" />
              <h5 className="text-center">Beauty</h5>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12 imagetiles">
              <img
                src={FoodDrinkImg}
                className="img-responsive  my-2"
                alt="food and drink"
              />
              <h5 className="text-center">Beauty Food and Drinks</h5>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-12 imagetiles">
              <img src={ElectronicImg} className="img-responsive " />
              <h5 className="text-center">Electronics</h5>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 imagetiles">
              <img src={JewelaryImg} className="img-responsive" />
              <h5 className="text-center">Jewellary</h5>
            </div>
          </div>
        </div>
      </div>

      <FeatureCard />
    </>
  );
}

export default LandingPage;
