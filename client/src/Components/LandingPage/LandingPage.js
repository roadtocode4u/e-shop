import React from "react";
import "./LandingPage.css";
import LandingImg from "./img/DeliverBoy.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function LandingPage() {
  return (
    <>
      <div className="consumer">
        <div className="navbar-fixed">
          <nav className="navbar navbar-expand-lg navbar-heading">
            <div className="container-fluid">
              <a className="navbar-brand menu-color" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item ">
                    <a
                      className="nav-link active menu-color"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link menu-color" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link menu-color" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle menu-color"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown link
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-4">
              <h1 className="head-h1 mt-5 text-light">
                Stop selling. Start helping.
              </h1>
              <p className="paragraph mt-4">
                Try one of the most powerful platforms on the market for free.
                No technical knowledge needed.
              </p>

              <form className="p-2">
                <input
                  className="btn-placeholder me-3"
                  type="search"
                  placeholder="Enter your email address"
                />
                <button className="btn-search" type="submit">
                  <b>Search</b>
                </button>
              </form>

              <p className="paragraph-content mt-4">
                Try Shopify free for 14 days, no credit card required. By
                entering your email, you agree to receive marketing emails from
                Shopify.
              </p>
            </div>
            <div className="col-md-6 p-5 mt-5">
              <div className="card shawdow-lg w-100">
                <div>
                  <img
                    src={LandingImg}
                    alt=""
                    className="img-fluid mx-auto d-block header-display-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="consumer-one">
        <div className="container">
          <h1>Bring your business online</h1>
          <p>
            Create an ecommerce website backed by powerful tools that help you
            find customers, drive sales, and manage your day-to-day.
          </p>
          <h4>Explore more examples </h4>
        </div>
      </div>

      {/* Swiper Content-1 */}
      <div className="consumer-two">
        <div className="container">
          <h1 className="text-center">Features</h1>
          <div className="col-md-12">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className="card card-border">
                  <div className="card-body">
                    <p className="card-text">
                      <h5>Secure timely payment</h5>
                      Funds are deposited directly to your bank account every 7
                      days, including for pay on delivery order
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card card-border">
                  <div className="card-body">
                    <p className="card-text">
                      <h5>Easy of starting</h5>
                      From product photography to hassle free delivery and
                      returns management
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card card-border">
                  <div className="card-body">
                    <p className="card-text">
                      <h5>Real-time Order Tracking Option</h5> Real-time
                      visibility enables the customer to experience order flow
                      and purchase through fulfillment.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card card-border">
                  <div className="card-body">
                    <p className="card-text">
                      <h5>Mange business on the go</h5>
                      With the shoppe-Savvy App you can mange your
                      business,solve issues,and respond to customers anywhere,
                      anythime.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card card-border">
                  <div className="card-body">
                    <h5>Deliver your products</h5>
                    <p className="card-text">
                      Use Fulfillment by Shoppe-Savvy services for shipping your
                      products to any part of the world. You can also choose
                      other shipping methods
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card card-border">
                  <div className="card-body">
                    <p className="card-text">
                      <h5>One Click to Add to Cart</h5>
                      Add to cart is one of the most defining features of an
                      e-commerce site. It helps the business to grow and give
                      customers the chance to buy the product in one click.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              ...
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
