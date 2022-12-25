import { Button } from "@mui/material";
import React from "react";
import "./ProductEdit.css";
import SalesPerformance from "./../../components/SalesPerformance/SalesPerformance";
import ProductDetails from "./../../components/ProductDetails/ProductDetails";
import ProductInputEdit from './../../components/ProductInputEdit/ProductInputEdit';
import { Link } from "react-router-dom";

const ProductEdit = () => {
  return (
    <div className="productedit">
      <div className="row">
        <h3>Products</h3>
        <Link to={"/product/create"}>
      
        <Button className="mui_btn" variant="contained">
          Create
        </Button>
          
        </Link>
      </div>
      <div className="grid__view">
        <SalesPerformance />
        <ProductDetails />
      </div>
      <ProductInputEdit/>
    </div>
  );
};

export default ProductEdit;
