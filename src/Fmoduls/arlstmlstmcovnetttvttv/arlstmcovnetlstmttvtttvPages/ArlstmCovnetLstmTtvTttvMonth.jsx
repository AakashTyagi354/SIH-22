import React from 'react'
import ArlstmCovnetLstmTtvTttvAMonth from '../arlstmcovnetlstmttvtttvChart/ArlstmCovnetLstmTtvTttvAMonth'
import { NavLink } from 'react-router-dom';
function ArlstmCovnetLstmTtvTttvMonth() {
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
                    <NavLink to='/arlstmcovnetlstmttvtttvweek' >W</NavLink>
                        <NavLink to='/arlstmcovnetlstmttvtttvmonth' >M</NavLink>
                        <NavLink to='/arlstmcovnetlstmttvtttvsixmonth' >6M</NavLink>
                        <NavLink to='/arlstmcovnetlstmttvtttvyear' >Y</NavLink>
                        <NavLink to='/arlstmcovnetlstmttvtttvfiveyear' >5Y</NavLink>
                    </div>
                </div>
                <div className="arlstmBottom">
                    <ArlstmCovnetLstmTtvTttvAMonth />
                </div>
            </div>
        </div>
    )
}

export default ArlstmCovnetLstmTtvTttvMonth