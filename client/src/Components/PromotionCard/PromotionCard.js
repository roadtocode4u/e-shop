import React from "react";
import "./PromotionCard.css";

function PromotionCard() {
  return (
    <>
      <div className="header">
       <h1 className="text-center promotion-card-heading">Business solutions for all your online selling needs</h1>
      </div>
      <div className="row1-container">
        <div className="box box-down cyan">
          <h3>Track your business</h3>
          <p>Track your sales data, transactions and manage your inventoryfrom anywhere</p>
          <img
            src="https://assets.codepen.io/2301174/icon-supervisor.svg"
            alt=""
          />
        </div>

        <div className="box red">
          <h3>Payment</h3>
          <p>
          Get the payment hassel-free right in your account with multiple payment options
          </p>
          <img
            src="https://assets.codepen.io/2301174/icon-team-builder.svg"
            alt=""
          />
        </div>

        <div className="box box-down blue">
          <h3>Delivery</h3>
          <p>
          Manage all your deliveries seamlessly with third-party integrations...
          </p>
          <img
            src="https://assets.codepen.io/2301174/icon-calculator.svg"
            alt=""
          />
        </div>
      </div>
      <div className="row2-container">
        <div className="box orange">
          <h3>Online Store</h3>
          <p>Take your business online with your own e-commerce website. Grow and Expand!</p>
          <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default PromotionCard;
