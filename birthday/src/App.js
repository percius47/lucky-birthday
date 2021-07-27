import "./App.css";
import happy from "../src/happy.svg";
 import sad from "../src/sad.svg";
import React, { useState } from 'react'

let luckynum=0,dateInput=""
function App() {
const [output,setOutput]=useState(["",""]);
const [alert,setAlert]=useState("block");
const [outputDiv,showOutputDiv]=useState("none");

function submitHandler(e){

  e.preventDefault();
console.log(luckynum,dateInput);
const date=dateInput.split("-");
console.log(date);
let sum=0;
date.map((string) => {
  //to access each number in string and add into sum
  for (let i = 0; i < string.length; i++) {
    sum = sum + Number(string[i]);
  
  }
});
if(sum%luckynum===0){
  
  setOutput(["Dayum you lucky fella1", happy]);
  showOutputDiv("block");
}
else{
  setOutput(["Hard luck my man!",sad]);
  showOutputDiv("block");
}

}
  return (
    <div className="App">

<div className="alertBar"style={{display:`${alert}`}}>
      Privacy Notice! We do not store your data.
      <span
      onClick={()=>{
        setAlert("none");
      }        
      }
      role="img" aria-labelledby="crossIcon">
              &#10060;
            </span>
</div>
      
      <form 
      onSubmit={submitHandler}
      
      className="card">
        <input type="date" className="date" required
        onChange={(e)=>{
          dateInput=e.target.value;
        }}
        />
        <input type="number" className="num" min="1" step="1"
        onChange={(e)=>{
        luckynum=e.target.value;
        }}
        />
          <button type="submit" >Check</button>
      </form>
        <div className="output" style={{display:`${outputDiv}`}}>
          <span className="text">{output[0]}</span>
          <img src={output[1]} alt="happy/sadimg" className="outputImg" />
        </div>
    </div>
  )
}

export default App
