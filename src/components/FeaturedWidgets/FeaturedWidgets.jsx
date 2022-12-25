import React from "react";
import "./FeaturedWidgets.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GrBasket } from "react-icons/gr";
import {GrMoney} from "react-icons/gr"

const FeaturedWidgets = () => {
  return (
    <div className="featuredwidgets">
      <div className="analytics__card">
        <div className="card__holder">
          <div className="card__content">
            <span className="card__title">Revenue  <FaRegMoneyBillAlt fontSize={"30px"}/> </span>
            <div className="card__row">
              <span className="value"> $2,500</span>
              <span>
                -11.4 <AiOutlineArrowDown style={{ color: "red",fontSize:"20px" ,fontWeight:"bold" }} />{" "}
              </span>
            </div>
            <span>Compare to last Month</span>
          </div>
        </div>

 {/* card2 */}
 <div className="card__holder"  style={{backgroundImage: "linear-gradient( 89.2deg,  rgba(5,120,190,1) 3.3%, rgba(119,217,211,1) 97.8% )"}}>
          <div className="card__content">
            <span className="card__title">Sales <GrBasket  fontSize={"24px"} color={"white"} /> </span>
            <div className="card__row">
              <span className="value"> $2,500</span>
              <span>
                -11.4 <AiOutlineArrowUp style={{ color: "green" ,fontSize:"20px" ,fontWeight:"bold" }} />{" "}
              </span>
            </div>
            <span>Compare to last Month</span>
          </div>
        </div>

        {/* card3 */}
        <div className="card__holder"  style={{backgroundImage: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(241,180,47,1) 0%, rgba(234,149,11,1) 90% )"}}>
          <div className="card__content">
            <span className="card__title">Cost <GrMoney  fontSize={"24px"} color={"white"} />  </span>
            <div className="card__row">
              <span className="value"> $2,500</span>
              <span>
                -11.4 <AiOutlineArrowDown style={{ color: "red" ,fontSize:"20px" ,fontWeight:"bold" }} />{" "}
              </span>
            </div>
            <span>Compare to last Month</span>
          </div>
        </div>


      </div>
    </div>
  );
};

export default FeaturedWidgets;
