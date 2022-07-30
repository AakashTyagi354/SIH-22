import React from 'react'
import CovnetAFiveYear from '../covnetChart/CovnetAFiveYear';
import { NavLink } from 'react-router-dom';

function CovnetFiveYear() {
    return (
        <div className='CovnetFiveYear'>
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
                        <NavLink to='/covnetweek' >W</NavLink>
                        <NavLink to='/covnetmonth' >M</NavLink>
                        <NavLink to='/covnetsixmonth' >6M</NavLink>
                        <NavLink to='/covnetyear' >Y</NavLink>
                        <NavLink to='/covnetfiveyear' >5Y</NavLink>
                    </div>
                </div>
                <div className="arlstmBottom">
                    <CovnetAFiveYear />
                </div>
            </div>
        </div>
    )
}

export default CovnetFiveYear