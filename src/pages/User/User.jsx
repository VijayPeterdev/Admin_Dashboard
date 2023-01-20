import React, { useContext, useEffect, useState} from "react";
import "./User.css";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { tabledata } from "../../graphData";
import { UserContext } from "./../../Context/UserContext/UserContext";
import { getAllUser } from "./../../Context/UserContext/UserApi";

const User = () => {

  const { users, dispatch } = useContext(UserContext);
  const [usersData,setUsersData] = useState(users);

  useEffect(() => {
    getAllUser(dispatch);
  },[dispatch]);


  // console.log("get Al user is :"+users);

  const handleDelete = (id) => {
    setUsersData(usersData.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "username",
      headerName: "Username",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="muitable_style">
            <img
              className="muitable_image"
              src={params.row.userimage}
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

      width: 200,
    },
    {
      field: "phonenumber",
      headerName: "Phone Number",
      width: 150,
    },
    {
      field: "isAdmin",
      headerName: "isAdmin",
      width: 100,
    },
    {
      field: "users",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="muitable_row">
            <Link to={"/user/" + params.row._id} state={{ userdata: params.row }} >
              {" "}
              <button className="muitable_button"> Edit</button>
            </Link>
            <AiOutlineDelete
              fontSize={"20px"}
              cursor={"pointer"}
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userlist">
      <span>list of user</span>
      <DataGrid
        disableSelectionOnClick={true}
        rows={usersData}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId= {(r) => r._id}
      />
    </div>
  );
};

export default User;
