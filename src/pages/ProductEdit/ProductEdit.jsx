import { Button } from "@mui/material";
import React from "react";
import "./ProductEdit.css";
// import SalesPerformance from "./../../components/SalesPerformance/SalesPerformance";
import ProductDetails from "./../../components/ProductDetails/ProductDetails";
import ProductInputEdit from './../../components/ProductInputEdit/ProductInputEdit';
import { Link, useLocation } from "react-router-dom";

const ProductEdit = () => {


  const location  =useLocation();

  const movie = location.state.movie;
  console.log("movie edit details 🎥 :"+movie);
 




  return (
    <div className="productedit">
      <div className="row">
        <h3>Movie</h3>
        <Link to={"/product/create"} >
      
        <Button className="mui_btn" variant="contained">
          Create
        </Button>
          
        </Link>
      </div>
      <div className="grid__view">
        {/* <SalesPerformance /> */}
        <ProductDetails movie={movie}/>
      </div>
      <ProductInputEdit  movie={movie} />
    </div>
  );
};

export default ProductEdit;
