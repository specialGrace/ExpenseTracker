import React, { useContext } from "react";
import { GlobalContext } from "../../Context";
import './Balance.css'

const Balance = () => {
  const store = useContext(GlobalContext);
  const { income, expense } = store

  return (
    <div className="balanceContainer">
      <div className="balance">
        <h4>YOUR BALANCE</h4>
        <h3>${income+expense}</h3>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>INCOME</th>
              {/* <div className="borderLine"></div> */}
              <th className="expenseCard">EXPENSES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="qty">${income}</td>

              <td className="expense">${expense}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Balance;
