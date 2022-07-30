import React from 'react'
import ArlstmCovnetLstmTtvAFiveYear from '../arlstmcovnetlstmttvChart/ArlstmCovnetLstmTtvAFiveYear';

import { NavLink } from 'react-router-dom';

function ArlstmCovnetLstmTtvYear() {
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
                        <NavLink to='/arlstmcovnetlstmttvweek' >W</NavLink>
                        <NavLink to='/arlstmcovnetlstmttvmonth' >M</NavLink>
                        <NavLink to='/arlstmcovnetlstmttvsixmonth' >6M</NavLink>
                        <NavLink to='/arlstmcovnetlstmttvyear' >Y</NavLink>
                        <NavLink to='/arlstmcovnetlstmttvfiveyear' >5Y</NavLink>
                    </div>
                </div>
                <div className="arlstmBottom">
                    <ArlstmCovnetLstmTtvAFiveYear  />
                </div>
            </div>
        </div>
    )
}

export default ArlstmCovnetLstmTtvYear