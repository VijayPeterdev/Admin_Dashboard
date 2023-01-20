import React from "react";
import "./ProductDetails.css";

const ProductDetails = ({ movie }) => {
  console.log("movie details final data 🎥 :" + movie);
  return (
    <div className="product__details_info">
      <div className="product__row">
        <img
          className="product__image"
          src={movie.moviethmb}
          alt="productimage"
        />
        <div>
          <span className="product_title">{movie.moviename}</span>
          <div className="overview">
            <div className="details__info">
              <span className="align">
                {" "}
                <h5> Movie id:</h5> {movie._id}
              </span>
            </div>
            <div className="details__info">
              <h5>Movie Type </h5>
              <span className="">{movie.movietype}</span>
            </div>
            <div className="details__info">
              <h5>Movie Logo </h5>
              <img className="movie_logo_view" src={movie.movieLogo} alt="" />
            </div>
            <div className="details__info">
              <h5>Movie Duration : </h5>
              <span className="">{movie.movieDuration}</span>
            </div>
          </div>
        </div>
        <div className="row3">
          <div className="details__info">
            <h5>isSeries : </h5>
            <span className=""><h5>{movie.isSeries.toString()}</h5></span>
          </div>

       
          <div className="details__info">
            <h5>Age Limit : </h5>
            <span   className="outline_border">+{ movie.ageLimit}</span>
          </div>
          <div className="details__info">
            <h5>Create : </h5>
            <span className="">{ movie.createdAt}</span>
          </div>
          <div className="details__info">
            <h5>Last Update : </h5>
            <span className="">{ movie.updatedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
