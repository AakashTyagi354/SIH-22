import React from 'react'
import Analysics from '../ARLSTM/arlstmChart/Analysics'
import "./arlstm&covnetLstmTtvTttv.css"
import { NavLink } from 'react-router-dom'
function ArlstmCovnetLstmTtvTttv() {

  return (
    <div className='arlstm'>
       <div className="arlstmTop">
            <div className="arlstmBtn">
                 <NavLink to='/arlstmweek' >W</NavLink>
                 <NavLink to='/arlstmmonth' >M</NavLink>
                 <NavLink to='/arlstmsixmonth' >6M</NavLink>
                 <NavLink to='/arlstmyear' >Y</NavLink>
                 <NavLink to='/arlstmfiveyear' >5Y</NavLink>
            </div>
       </div>
       <div className="arlstmBottom">bottom</div>
    </div>
  )
}

export default ArlstmCovnetLstmTtvTttv