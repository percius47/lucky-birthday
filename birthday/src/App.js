import "./App.css";
import happy from "../src/happy.svg";
 import sad from "../src/sad.svg";
import React, { useState } from 'react'
import Close from "../src/close.png"
import {animateScroll as scroll} from "react-scroll";

let luckynum=0,dateInput=""
function App() {
const [output,setOutput]=useState(["",""]);
const [alert,setAlert]=useState("block");
const [outputDiv,showOutputDiv]=useState("none");

function top(){
  scroll.scrollToTop();
}

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
  
  setOutput(["Whoa! You're one lucky person!", happy]);
  showOutputDiv("block");
}
else{
  setOutput(["Oops! That is not lucky.",sad]);
  showOutputDiv("block");
}

}
  return (
    <div className="App">

<div className="alertBar"style={{display:`${alert}`}}>    
      <p><span style={{textDecoration:"underline"}}>Privacy Notice!
      </span> We do not store your data.
      
      <img src={Close}
      alt="close"
      onClick={()=>{
        setAlert("none");
        
      }        
      }
      
      style={{cursor:"pointer"}}
      />
           
            </p>
</div>
      <div className="nav">
        <h1>Lucky or Not!?</h1>
      </div>
      <div className="content">
      <form 
      onSubmit={submitHandler}
      
      className="card">
        
        <label >Your Date of Birth:</label>
        <input type="date" className="date" required
        onChange={(e)=>{
          dateInput=e.target.value;
        }}
        />
        <label >Your Lucky Number:</label>
        <input type="number" className="num" min="1" step="1"
        required
        onChange={(e)=>{
        luckynum=e.target.value;
        }}
        />
          <button type="submit" 
          className="checkBtn"
         
          >Check</button>
      </form>

        <div className="output" style={{display:`${outputDiv}`}}>
          <h3>Result:</h3>
          <span className="text">{output[0]}</span>
          <img src={output[1]} alt="happy/sadimg" className="outputImg" />
        </div>
        </div>
        
        {/* content */}
        <div className="footer">
          <div className="links">
          <a className="linkedIn" href="https://linkedin.com/in/prashantworks47">LinkedIn</a>
          <a className="twitter" href="https://twitter.com/percius25">Twitter</a>
         <span className="privacy"
          onClick={()=>{
              top();
              setAlert("block");
          }}
          style={{cursor:"pointer"}}
          >Privacy Notice</span>
           </div>
          <small> Copyright.© 2021 ™</small> 
        </div>
    </div>
  )
}

export default App
