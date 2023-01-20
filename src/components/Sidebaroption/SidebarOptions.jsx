import React from "react";
import "./SidebarOptions.css";
import {
  TbBrandGoogleAnalytics,
  TbFileAnalytics,
  TbLayoutDashboard,
} from "react-icons/tb";
import {
  MdAttachMoney,
  MdOutlineDynamicFeed,
  MdOutlineWorkOutline,
  MdReport,
} from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

import { BiMessageSquareDetail, BiMoviePlay, BiTransferAlt } from "react-icons/bi";
import { GrAnalytics } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SidebarOptions = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__menu">
          <span className="menu__title">Dashboard</span>
          <div className="menu__options">
            <ul className="menu__options__list">
              <Link to={"/"}>
                <li className="option">
                  <TbLayoutDashboard /> Home
                </li>
              </Link>

              <li className="option">
                <TbBrandGoogleAnalytics /> Analytics
              </li>

              <li className="option">
                <MdAttachMoney /> Sales
              </li>
            </ul>
          </div>
        </div>

        {/* menu section 2 */}

        <div className="sidebar__menu">
          <span className="menu__title">Quick Menu</span>
          <div className="menu__options">
            <ul className="menu__options__list">
              <Link to={"/user"}>
                <li className="option">
                  <FaRegUser /> User
                </li>
              </Link>
              <Link to={"/movies"}>
                <li className="option">
                  <BiMoviePlay/> Movies
                </li>
              </Link>

              <li className="option">
                <BiTransferAlt /> Transactions
              </li>
              <li className="option">
                <TbFileAnalytics /> Reports
              </li>
            </ul>
          </div>
        </div>

        {/* menu section 3 */}
        <div className="sidebar__menu">
          <span className="menu__title">Notification</span>
          <div className="menu__options">
            <ul className="menu__options__list">
              <li className="option">
                <FiMail /> Mail
              </li>
              <li className="option">
                <MdOutlineDynamicFeed /> Feedback
              </li>

              <li className="option">
                <BiMessageSquareDetail />
                Message{" "}
              </li>
            </ul>
          </div>
        </div>

        {/* menu section4 */}

        <div className="sidebar__menu">
          <span className="menu__title">Staff</span>
          <div className="menu__options">
            <ul className="menu__options__list">
              <li className="option">
                <MdOutlineWorkOutline /> Manage
              </li>
              <li className="option">
                <IoAnalyticsOutline /> Analytics
              </li>

              <li className="option">
                <MdReport />
                Report
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarOptions;
