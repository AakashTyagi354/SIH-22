import React from 'react'
import ArlstmASixMonth from '../arlstmChart/ArlstmASixMonth'
import { NavLink } from 'react-router-dom';
function ArlstmSixMonth() {
    return (
        <div className='ArlstmSixMonth'>
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
                        <NavLink to='/arlstmweek' >W</NavLink>
                        <NavLink to='/arlstmmonth' >M</NavLink>
                        <NavLink to='/arlstmsixmonth' >6M</NavLink>
                        <NavLink to='/arlstmyear' >Y</NavLink>
                        <NavLink to='/arlstmfiveyear' >5Y</NavLink>
                    </div>
                </div>
                <div className="arlstmBottom">
                    <ArlstmASixMonth/>
                </div>
            </div>
        </div>
    )
}

export default ArlstmSixMonth