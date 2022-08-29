import React, { useContext } from "react";
import { GlobalContext } from "../../Context";
// import { v4 as uuidv4 } from uuidv4;
// import "./Form.css";

const Form = () => {
    const store = useContext(GlobalContext)
    const {submitHandler, myText, changeHandler} = store
   return (
     <div className="formContainer">
       <h4>Add new transaction</h4>
       <hr className="formLine" />
       <p>Text</p>
       <form onSubmit={submitHandler}>
         <input
           type="text"
           name="text"
           value={myText.text}
           placeholder="Enter text..."
           onChange={(e) => changeHandler(e)}
         />
         <div>
           <h4>Amount</h4>
           <p>(negative-expense, positive-income)</p>
           <input
             type="number"
             name="amount"
             value={myText.amount}
             placeholder="Enter amount..."
             onChange={(e) => changeHandler(e)}
           />

           <div>
             <button className="btn" type="submit">
               Add transaction
             </button>
           </div>
         </div>
       </form>
     </div>
   );
};
 
export default Form