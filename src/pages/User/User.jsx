import React, { useState } from "react";
import "./User.css";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { tabledata } from "../../graphData";

const User = () => {

  const [data, setData] = useState(tabledata);

  const handleDelete = ( id ) =>{

    setData(   data.filter(item => item.id !== id ) );
  }


  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "Username",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="muitable_style">
            <img
              className="muitable_image"
              src="https://m.media-amazon.com/images/M/MV5BZDNlNzBjMGUtYTA0Yy00OTI2LWJmZjMtODliYmUyYTI0OGFmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX1000_.jpg"
              alt=""
            />
            {params.row.username}
          </div>
        );
      },
    },

    {
      field: "email",
      headerName: "Email",

      width: 240,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
    },
    {
        field: "transactions",
        headerName: "Transactions",
        width: 200,
     
        
      },
    {
      field: "Action",
      headerName: "Transactions",
      width: 200,
      renderCell: (params) => {
        return <div className="muitable_row">

 <Link to={"/user/"+params.row.id}> <button className="muitable_button"> Edit</button></Link>  
<AiOutlineDelete fontSize={"20px"} cursor={"pointer"} onClick={() => handleDelete(params.row.id)} />

            
        </div>;
      },
    },
  ];

  

  return (
    <div className="userlist">
      <span>list of user</span>
      <DataGrid
      
      disableSelectionOnClick ={true}
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default User;
