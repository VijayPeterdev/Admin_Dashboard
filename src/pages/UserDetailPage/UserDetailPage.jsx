import { Button } from "@mui/material";
import React from "react";
import "./UserDetailPage.css";
import DetailShowCard from "./../../components/DetailShowCard/DetailShowCard";
import DetailEditCard from './../../components/DetailEditCard/DetailEditCard';
import { Link } from "react-router-dom";

const UserDetailPage = () => {
  return (
    <div className="userdetail_container">
      <div className="userdetail_row">
        <h3>Edit User</h3>
        <Link to={"/user/newuser"}>
        <Button  className="create_btn"  variant="contained"> Create</Button>
        </Link>
   
      </div>

      {/* ================= split  user section ================ */}

      <div className="userdeatilscard_holder">
        <DetailShowCard />
        <DetailEditCard/>
      </div>
    </div>
  );
};

export default UserDetailPage;
