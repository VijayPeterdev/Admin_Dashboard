import React from "react";
import "./DetailShowCard.css";
import { FaRegUser } from 'react-icons/fa';
import {BsCalendarMinus} from "react-icons/bs"
import { BiMobileAlt } from "react-icons/bi";
import { FiMail } from 'react-icons/fi';
import { GrLocation } from "react-icons/gr";

const DetailShowCard = () => {
  return (
    <div className="detailshowcard">
      <div className="detailcard">
        <img
          src="https://www.greatandhra.com/newphotos10/kgf2_101649933206.jpg"
          alt=""
          className="profile__pic"
        />
        <div className="row">
          <span className="bold">Vijay Peter</span>
          <span>Software Engineer</span>
        </div>
      </div>

      <span className="account__details">Account Details</span>
      <span className="account__info"><FaRegUser/>Vijaypeter</span>
      <span className="account__info"><BsCalendarMinus/>23/06/1998</span>
      <span className="account__details">Contact Details</span>
      <span className="account__info"><BiMobileAlt/>8610570243</span>
      <span className="account__info"><FiMail/>vijaypeter1998@gmail.com</span>
      <span className="account__info"><GrLocation/>Trichy , Tamilnadu </span>

      
    </div>
  );
};

export default DetailShowCard;
