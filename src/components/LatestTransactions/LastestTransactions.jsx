import React from "react";
import "./LastestTransactions.css";
import TransactionsRow from "./TransactionsRow/TransactionsRow";

const LastestTransactions = () => {
  return (
    <div className="LastestTransactions">
      <h3 className="table_title">LastestTransactions</h3>
      <div className="LastestTransactions__container">
        <div className="transaction__table">
          <table className="table">
            <thead className="table_head">
           
              <th className="table_head">Customer</th>
              <th className="table_head">Date</th>
              <th className="table_head">Amount</th>
              <th className="table_head">Status</th>
              <th>View</th>
              <>
                <TransactionsRow
                  TransactionAmount={"200"}
                  status={"pending"}
                  profilepic={
                    "https://www.koimoi.com/wp-content/new-galleries/2022/04/kgf-chapter-2-mania-grips-ktaka-police-resort-to-lathi-charge-to-control-yash-fans-001.jpg"
                  }
                  TransactionDate={"23 Jun 2022"}
                  username={"Vijay Peter"}
                />
                <TransactionsRow
                  TransactionAmount={"200"}
                  status={"approved"}
                  profilepic={
                    "https://www.koimoi.com/wp-content/new-galleries/2022/04/kgf-chapter-2-mania-grips-ktaka-police-resort-to-lathi-charge-to-control-yash-fans-001.jpg"
                  }
                  TransactionDate={"23 Jun 2022"}
                  username={"Vijay Peter"}
                />
                <TransactionsRow
                  TransactionAmount={"200"}
                  status={"cancel"}
                  profilepic={
                    "https://www.koimoi.com/wp-content/new-galleries/2022/04/kgf-chapter-2-mania-grips-ktaka-police-resort-to-lathi-charge-to-control-yash-fans-001.jpg"
                  }
                  TransactionDate={"23 Jun 2022"}
                  username={"Vijay Peter"}
                />
                <TransactionsRow
                  TransactionAmount={"200"}
                  status={"approved"}
                  profilepic={
                    "https://www.koimoi.com/wp-content/new-galleries/2022/04/kgf-chapter-2-mania-grips-ktaka-police-resort-to-lathi-charge-to-control-yash-fans-001.jpg"
                  }
                  TransactionDate={"23 Jun 2022"}
                  username={"Vijay Peter"}
                />

                <TransactionsRow
                  TransactionAmount={"200"}
                  status={"pending"}
                  profilepic={
                    "https://www.koimoi.com/wp-content/new-galleries/2022/04/kgf-chapter-2-mania-grips-ktaka-police-resort-to-lathi-charge-to-control-yash-fans-001.jpg"
                  }
                  TransactionDate={"23 Jun 2022"}
                  username={"Vijay Peter"}
                />
                <TransactionsRow
                  TransactionAmount={"200"}
                  status={"cancel"}
                  profilepic={
                    "https://www.koimoi.com/wp-content/new-galleries/2022/04/kgf-chapter-2-mania-grips-ktaka-police-resort-to-lathi-charge-to-control-yash-fans-001.jpg"
                  }
                  TransactionDate={"23 Jun 2022"}
                  username={"Vijay Peter"}
                />
              </>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LastestTransactions;
