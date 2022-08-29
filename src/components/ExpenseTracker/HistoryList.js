import React, { useContext } from "react";
import { GlobalContext } from "../../Context";

const HistoryList = () => {
    const store = useContext(GlobalContext)
    const { list, cancelItemHandler } = store;
  return (
    <div className="expenseHistory">
      <div className="history">
        <h4>History</h4>
      </div>
      <hr className="historyLine" />
      <div class="historyContainer">
        {list.length > 0
          ? list.map((item) => (
            <div className="historyCards" key={item.id}>
              
                <p className="textitem">{item.text}</p>
                <p className="numberitem">{item.amount}</p>
                <button
                  style={{ cursor: "pointer", color:"red" }}
                  onClick={(e) => cancelItemHandler(e, item.id)}>
                  X
                </button>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default HistoryList