import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Analysicslstmcovnetttvtttv from './lstmcovnetttvtttvCharts/Analysicslstmcovnetttvtttv'

function Olstmcovnetarlstmttv() {
    const [lstm, setLstm] = useState(null);
    const [covnet, setCovnet] = useState(null);
    const [ttv, setTtv] = useState(null);
    const [tttv, setTttv] = useState(null);
    const [arlstm, setArlstm] = useState(null);

    let plot;


    const lstmChange = () => {
        // setChange(!change);
        // console.log(change);
        setLstm(true);



    };
    const covnetChange = () => {
        // setCovnetChange(!covnetChange);
        setCovnet(true);

        // console.log(covnetChange);

    }
    const ttvChange = () => {
        setTtv(true);

    }
    const tttvChange = () => {
        setTttv(true);

    }
    const arlstmChange = () => {
        setArlstm(true);

    }

    // if( lstmChange == true && change == true && ttvChange == true ){
    //    way = "/arlstmcovnetweek"
    // }else if (lstmChange == true && change == true){
    //     way = "/covnetweek"
    // }else{
    //   way= "/covnetmonth"
    // }
    switch (true) {

        case (lstm == true && arlstm == true && covnet == true && ttv == true && tttv == true): plot = "/olstmarlstmcovnetttvtttv";
        break;
        case (lstm == true && arlstm == true && covnet == true && ttv == true ): plot = "/olstmarlstmcovnetttv";
        break;
        case (arlstm == true && covnet == true && tttv == true && ttv == true ): plot = "/oarlstmcovnetttvtttv";
        break;
        case (lstm == true && arlstm == true && ttv == true && tttv == true ): plot = "/olstmarlstmttvtttv";
        break;
        case (lstm == true && covnet == true && ttv == true && tttv == true ): plot = "/olstmcovnetttvtttv";
        break;
    
        case (arlstm == true && covnet == true && ttv == true): plot = "/oarlstmcovnetttv";
        break;
        case (covnet == true && ttv == true && tttv == true): plot = "/ocovnetttvtttv";
        break;
        case (lstm == true && arlstm == true && ttv == true): plot = "/olstmarlstmttv";
        break;
        case (lstm == true && arlstm == true && tttv == true): plot = "/olstmarlstmtttv";
        break;
        case (lstm == true && covnet == true && ttv == true): plot = "/olstmcovnetttv";
        break;
        case (lstm == true && covnet == true && tttv == true): plot = "/olstmcovnettttv";
        break;
        case (lstm == true && ttv == true && tttv == true): plot = "/olstmttvtttv";
        break;
        case (arlstm == true && ttv == true && tttv == true): plot = "/oarlstmttvtttv";
        break;
       
    
        case (lstm == true && covnet == true): plot = "/olstmcovnet";
        break;
        case (lstm == true && arlstm == true): plot = "/olstmarlstm";
        break;
        case (arlstm == true && covnet == true): plot = "/oarlstmcovnet";
        break;
        case (covnet == true && ttv == true): plot = "/ocovnetttv";
        break;
        case (ttv == true && tttv == true): plot = "/ottvtttv";
        break;
        case (lstm == true && ttv == true): plot = "/olstmttv";
        break;
        case (lstm == true && tttv == true): plot = "/olstmtttv";
        break;
        case (arlstm == true && ttv == true): plot = "/oarlstmttv";
        break;
        case (arlstm == true && tttv == true): plot = "/oarlstmtttv";
        break;
        case (covnet == true && tttv == true): plot = "/ocovnettttv";
        break;
     
        case (arlstm == true): plot = "/oarlstm";
        break;
     
        case (covnet == true): plot = "/ocovnet";
        break;
     
        case (ttv == true): plot = "/ottv";
        break;
     
        case (tttv == true): plot = "/otttv";
        break;
    
        case (lstm == true): plot = "/olstm";
        break;
     
        default:  plot = "/ocovnet"
     }
    return (
        <div>
            <div className="iomoduleTop">
                <div className="iomodulebtn">
                    <NavLink className="btnSummary" to="/iomodule">summary</NavLink>
                    <NavLink className="btnForcasting" to="/output">forcasting</NavLink>
                </div>
                <div className="iomoduleCheckbox">
                <input type="checkbox" onClick={lstmChange} /> LSTM
                    <input type="checkbox" onClick={ttvChange} /> TTV
                    <input type="checkbox" onClick={tttvChange} /> TTTV
                    <input type="checkbox" onClick={covnetChange} /> convet
                    <input type="checkbox" onClick={arlstmChange} /> ARLSTM
                    <NavLink className="checkBtn" to={plot}>submit</NavLink>
                </div>
            </div>
            <div className="iomoduleBottom">
                
                <Analysicslstmcovnetttvtttv/>
            </div>
        </div>
    )
}

export default Olstmcovnetarlstmttv