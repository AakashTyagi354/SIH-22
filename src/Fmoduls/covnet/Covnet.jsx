import React from 'react'
import Analysics from '../ARLSTM/arlstmChart/Analysics'
import "./covnet.css"
import { NavLink } from 'react-router-dom'
function Covnet() {

  return (
    <div className='arlstm'>
      <div className="arlstmTop">
        <div className="arlstmBtn">
          <NavLink to='/covnetweek' >W</NavLink>
          <NavLink to='/covnetmonth' >M</NavLink>
          <NavLink to='/covnetsixmonth' >6M</NavLink>
          <NavLink to='/covnetyear' >Y</NavLink>
          <NavLink to='/covnetfiveyear' >5Y</NavLink>
        </div>
      </div>
      <div className="arlstmBottom">bottom</div>
    </div>
  )
}

export default Covnet