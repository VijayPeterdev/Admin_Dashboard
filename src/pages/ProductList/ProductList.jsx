import React, { useState } from "react";
import "../User/User.css";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { productData } from "../../graphData";



const ProductList = () => {

    const [data , setData] = useState(productData);

    const handleDelete = ( id ) =>{

        setData(   data.filter(item => item.id !== id ) );
      }
    


    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        {
          field: "name",
          headerName: "Product",
          width: 230,
          renderCell: (params) => {
            return (
              <div className="muitable_style">
                <img
                  className="muitable_image"
                  src={params.row.img}
                  alt=""
                />
                {params.row.name}
              </div>
            );
          },
        },
    
        {
          field: "price",
          headerName: "Product Price",
    
          width: 240,
        },
        {
          field: "status",
          headerName: "Status",
          width: 100,
        },
        {
            field: "stock",
            headerName: "Stocks",
            width: 100,
         
            
          },
        {
          field: "Action",
          headerName: "Transactions",
          width: 200,
          renderCell: (params) => {
            return <div className="muitable_row">
    
     <Link to={"/product/"+params.row.id}> <button className="muitable_button"> Edit</button></Link>  
    <AiOutlineDelete fontSize={"20px"} cursor={"pointer"} onClick={() => handleDelete(params.row.id)}   />
    
                
            </div>;
          },
        },
      ];
    
      



  return (
    <div className="userlist">
      <span>list of Products</span>
      <DataGrid
        disableSelectionOnClick={true}
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
