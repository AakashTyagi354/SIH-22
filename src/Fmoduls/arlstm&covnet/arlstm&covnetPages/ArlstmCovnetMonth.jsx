import React from 'react'
import ArlstmCovnetAMonth from '../arlstm&covnetChart/ArlstmCovnetAMonth'
import { NavLink } from 'react-router-dom';
function ArlstmCovnetMonth() {
    return (
        <div className='ArlstmMonth'>
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
                    <ArlstmCovnetAMonth />
                </div>
            </div>
        </div>
    )
}

export default ArlstmCovnetMonth