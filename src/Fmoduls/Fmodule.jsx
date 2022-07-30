import React, { useState } from 'react'
import Arlstm from './ARLSTM/Arlstm';
import "./fmodule.css"
import ArlstmWeek from './ARLSTM/arlstmPages/ArlstmWeek';
import { NavLink } from 'react-router-dom';

function Fmodule() {
  // const [covnetchange, setCovnetChange] = useState(false);
  const [change, setChange] = useState(null);
  const [lstmChange, setlstmChange] = useState(null);
  const [ttvChange, setttvChange] = useState(null);


 


  let way;
 

  const handleChange = () => {
      // setChange(!change);
      // console.log(change);
      setlstmChange(true);

     
      console.log(lstmChange);
  };
  const covnetChange = () =>{
    // setCovnetChange(!covnetChange);
      setChange(true);
      console.log(change)
    // console.log(covnetChange);
   
  }
  const handleTTV = () =>{
    setttvChange(true);
    console.log(ttvChange)
  }
  if( lstmChange == true && change == true && ttvChange == true ){
     way = "/arlstmcovnetweek"
  }else if (lstmChange == true && change == true){
      way = "/covnetweek"
  }else{
    way= "/covnetmonth"
  }

  return (
    <div className='fmodule'>
      <div className="moduleTop">
        <div className="checkbox">
          <input type="checkbox" onClick={handleChange}/> LSTM
          <input type="checkbox" onChange={handleTTV} /> TTV
          <input type="checkbox" /> TTTV
          <input type="checkbox" onChange={covnetChange} /> convet
          <input type="checkbox" /> ARLSTM

          <NavLink className="modulebtn" to={way}>refresh</NavLink>
        </div>


      </div>
      <div className="moduleBottom">
         {/* <Arlstm/> */}
         {/* {covnetChange ?  "changed covnet" : "un-checked covnet"} <br />
         {change ?  "changed lstm" : "un-checked lstm"} */}
         hello
         {lstmChange}
      </div>
    </div>
  )
}

export default Fmodule