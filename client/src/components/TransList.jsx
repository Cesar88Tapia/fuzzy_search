import React from "react";
import Transactions from "./Transactions.jsx";

const TrnasList = (props) => (
  <div className="Transaction-List">
    {props.list.map((transactions, index) => <Transactions transactions={transactions} key={index} />)}
  </div>
)

export default TransList;
