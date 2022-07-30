import React from 'react'
import ArlstmCovnetAFiveYear from '../arlstm&covnetChart/ArlstmCovnetAFiveYear';



import { NavLink } from 'react-router-dom';

function ArlstmCovnetLstmFiveYear() {
    return (
        <div className='ArlstmYear'>
            <div className="moduleTop">
                <div className="checkbox">
                    <input type="checkbox" /> LSTM
                    <input type="checkbox" /> TTV
                    <input type="checkbox" /> TTTV
                    <input type="checkbox" /> convet
                    <input type="checkbox" /> ARLSTM

                    <div className="modulebtn" >refresh</div>
                </div>


            </div>
            <div className="moduleBottom">
                <div className="arlstmTop">
                    <div className="arlstmBtn">
                        <NavLink to='/arlstmcovnetweek' >W</NavLink>
                        <NavLink to='/arlstmcovnetmonth' >M</NavLink>
                        <NavLink to='/arlstmcovnetsixmonth' >6M</NavLink>
                        <NavLink to='/arlstmcovnetyear' >Y</NavLink>
                        <NavLink to='/arlstmcovnetfiveyear' >5Y</NavLink>
                    </div>
                </div>
                <div className="arlstmBottom">
                    <ArlstmCovnetAFiveYear  />
                </div>
            </div>
        </div>
    )
}

export default ArlstmCovnetLstmFiveYear