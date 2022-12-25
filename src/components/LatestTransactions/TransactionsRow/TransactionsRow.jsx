import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import "./TransactionsRow.css";

const TransactionsRow = ({
  status,
  profilepic,
  TransactionAmount,
  TransactionDate,
  username,
}) => {
  return (
    <>
      <tr>
        <td className="table_profile">
          <img
            className="table_profile_pic"
            src={profilepic}
            alt="profilepic"
          />

          <span className="username_table">{username} </span>
        </td>
        <td>{TransactionDate}</td>
        <td>₹ {TransactionAmount}</td>
        <td >
          <button className={"table_button " + status}>{status} </button>
        </td>
        <td>
          <AiOutlineEye />{" "}
        </td>
      </tr>
    </>
  );
};

export default TransactionsRow;
