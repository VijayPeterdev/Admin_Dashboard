import React from "react";
import "./DetailShowCard.css";
import { FaRegUser } from 'react-icons/fa';
import {BsCalendarMinus} from "react-icons/bs"
import { BiMobileAlt } from "react-icons/bi";
import { FiMail } from 'react-icons/fi';
import { GrLocation } from "react-icons/gr";

const DetailShowCard = ({user}) => {
  return (
    <div className="detailshowcard">
      <div className="detailcard">
        <img
          src={user.userimage}
          alt=""
          className="profile__pic"
        />
        <span className="bold">{user.username}</span>
       
      </div>

      <span className="account__details">Account Details</span>
      <span className="account__info"><FaRegUser/>{user.username}</span>
     
      <span className="account__details">Contact Details</span>
      <span className="account__info"><BiMobileAlt/>{user.phonenumber}</span>
      <span className="account__info"><FiMail/>{user.email}</span>
     

      
    </div>
  );
};

export default DetailShowCard;
