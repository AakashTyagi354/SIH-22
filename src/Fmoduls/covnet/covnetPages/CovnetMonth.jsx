import React, { useState } from 'react'
import CovnetAMonth from '../covnetChart/CovnetAMonth'
import { NavLink } from 'react-router-dom';
function CovnetMonth() {
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
        <div className='CovnetMonth'>
            <div className="moduleTop">
                <div className="checkbox">
                    <input type="checkbox" onClick={handleChange}/> LSTM
                    <input type="checkbox" onChange={handleTTV}  /> TTV
                    <input type="checkbox" /> TTTV
                    <input type="checkbox" onChange={covnetChange} /> convet
                    <input type="checkbox" /> ARLSTM

                    <NavLink className="modulebtn" to={way} >refresh</NavLink>
                </div>


            </div>
            <div className="moduleBottom">
                <div className="arlstmTop">
                    <div className="arlstmBtn">
                        <NavLink to='/covnetweek' >W</NavLink>
                        <NavLink to='/covnetmonth' >M</NavLink>
                        <NavLink to='/covnetsixmonth' >6M</NavLink>
                        <NavLink to='/covnetyear' >Y</NavLink>
                        <NavLink to='/covnetfiveyear' >5Y</NavLink>
                    </div>
                </div>
                <div className="arlstmBottom">
                    <CovnetAMonth />
                </div>
            </div>
        </div>
    )
}

export default CovnetMonth