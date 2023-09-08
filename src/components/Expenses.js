import {React, useState} from "react";
import "./css/Expense.css";
export default function Expenses() {
    const [item, setItem] = useState("");
    const [amount, setAmount]  = useState("");

    // function for taking the value of item name and amount
    const addItemsFun=()=>{
if(amount==="" || item===""){
  console.log("The Input Is Not Empty");
  return false;
}else{
  console.log(amount , item);
}
    }
  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-2 offset-10">
          <button className="btn btn-warning seeAllExpense">
            See All Expenses
          </button>
        </div>
      </div>
      {/* main heading start here */}
      <div className="row mt-5" style={{border:'1px solid white', padding:5, boxShadow:'2px 4px 5px grey'}}>
      <div className="col-6">
        <input
          type="text"
          value={item} onChange={(e)=>{setItem(e.target.value)}}
          placeholder="Information About The Expense"
          className="addItems" style={{padding:4, textIndent:10}} 
        />
      </div>
        <div className="col-3">
        <input type="number" value={amount} onChange={(e)=>(setAmount(e.target.value))} placeholder="Amount" style={{width:200, padding:5, textIndent:10}} />
        </div>

        <div className="col-3">
        <button className="btn btn-danger" style={{width:200, justifySelf:'center'}} onClick={addItemsFun}>Add + </button>
        </div>
      </div>
    </div>
  );
}
