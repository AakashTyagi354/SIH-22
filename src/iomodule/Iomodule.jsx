import React from 'react'
import { NavLink } from 'react-router-dom'
import Analytics from './input/charts/Analysics'
import "./iomodule.css"


function Iomodule() {
  return (
    <div className='iomodule'>
         <div className="iomoduleTop">
             <div className="iomodulebtn">
                 <NavLink className="btnSummary" to="/iomodule">summary</NavLink>
                 <NavLink className="btnForcasting" to="/output">forcasting</NavLink>
             </div>
         </div>
         <div className="iomoduleBottom">
           <Analytics/>
         </div>
    </div>
  )
}

export default Iomodule