import React, { useContext, useEffect } from "react";
import "../User/User.css";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import './ProductList.css'
// import { productData } from "../../graphData";
import { MoviesContext } from "./../../Context/MovieContext/MovieContext";
import { deleteMovies, getMovies } from "./../../Context/MovieContext/MovieApi";

const ProductList = () => {
  const { movies, dispatch } = useContext(MoviesContext);


  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  // console.log("moviesdata is : "+ [movies]);
  // console.log(data);

  const handleDelete = (id) => {
 deleteMovies(id , dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "movies",
      headerName: "Movies",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="muitable_style">
            <img className="muitable_image" src={params.row.moviethmb} alt="" />
            {params.row.moviename}
          </div>
        );
      },
    },

    {
      field: "movies.movieLogo",
      headerName: "Duration & Age Limit",

      width: 170,
      renderCell: (params) => {
        return (
          <div className="muitable_style">
          
            <span style={{marginRight:"12px"}}>{params.row.movieDuration  }</span>
             <h5>(+{params.row.ageLimit})</h5>
          </div>
        );
      },
    },
    {
      field: "movietype",
      headerName: "MovieType",

      width: 80,
    },
    {
      field: "movieReleasedate",
      headerName: "Movie Release",

      width: 150,
    },
    {
      field: "isSeries",
      headerName: "Series",

      width: 70,
    },
    
    {
      field: "movies._id",
      headerName: "Action",
      width: 180,
      renderCell: (params) => {

       
        return (
          <div className="muitable_row">
         
        
            <Link to={{ pathname : "/product/"+ params.row._id }}  state={{ movie: params.row }} >
              
              <button className="muitable_button"> Edit</button>
            </Link>
            <AiOutlineDelete
              fontSize={"20px"}
              color={"black"}
              cursor={"pointer"}
              onClick={() => handleDelete(params.row._id)}
            />

          
          </div>
        );
      },
    },
  ];

  return (
    <div className="userlist">
      <span>list of Products</span>
      <DataGrid
        disableSelectionOnClick={true}
        rows={movies}
        columns={columns}
        pageSize={8}
        // rowsPerPageOptions={[5]}
        rowsPerPageOptions={[5]}
        getRowId= {(r) => r._id}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
