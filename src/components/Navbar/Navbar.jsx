import React, { useContext } from "react";
import "./Navbar.css"
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { Logout } from "../../Context/AuthContext/AuthAction";

const Navbar = () => {
const user = true;
const {  dispatch } = useContext(AuthContext);


const logoutHandler = (e) => {
  dispatch(Logout());


  
};

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__left">
          <div className="logo">
            {" "}
            விஜய் <span style={{ color: "red" }}> Admin App</span>
          </div>
        </div>
        <div className="navbar__right">
          <div className="notification__badge">
            <IoMdNotificationsOutline />
            <span className="badge__count">2</span>
          </div>

          <div className="notification__badge">
            <RiGlobalLine />
            <span className="badge__count">10</span>
          </div>

          <FiSettings  style={{cursor:"pointer"}} />

          <img className="profile__pic" src="https://m.economictimes.com/thumb/msid-90912686,width-1200,height-900,resizemode-4,imgsize-80284/kgf-2-is-rewriting-record-books-adarsh-said-in-his-tweet-.jpg" alt="profileimg" />
       {user? <button       onClick={logoutHandler}   className="signout_btn">Signout</button> : <div></div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
