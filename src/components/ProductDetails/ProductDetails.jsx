import React from "react";
import "./ProductDetails.css";

const ProductDetails = () => {
  return (
    <div className="product__details_info">
      <div className="product__row">
        <img
          className="product__image"
          src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTFTUa3iqDd041N9DqSTITseg3CNo-Tlj3QvywVfLNudkzvweiCUoON7OWjSKeIXvG0VyY2YRaOl6VQCQ&usqp=CAc"
          alt="productimage"
        />
        <div>
          <span className="product_title">Iphone 13 Pro Max</span>
          <div className="overview">
            <div className="details__info">
              <h5>id : </h5>
              <span className="align"> 123</span>
            </div>
            <div className="details__info">
              <h5>Sales : </h5>
              <span className="">500</span>
            </div>
            <div className="details__info">
              <h5>active : </h5>
              <span className="">Yes</span>
            </div>
            <div className="details__info">
              <h5>InStock : </h5>
              <span className="">123</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
