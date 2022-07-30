import { useState } from "react";
import {createUseStyles} from "react-jss"
import "antd/dist/antd.css";


// Sub Components
import  MyGraph  from "./Graphs";
import DropdownSelector from "./Menu";
import lstmarlstmcovnetttvtttvoutput  from "./lstmarlstmcovnetttvtttvoutput";

const useStyles = createUseStyles(() => ({
  container: {
    color: '#fff',
    padding: '1rem',
    transition: '0.3s ease-in-out',
    width: '1200px',
    height: '400px',
    display:'flex',
    flexDirection:'column',
    position:'relative'
  },
}));

function Analyticslstmarlstmcovnetttvtttv() {
  const classes = useStyles()
  const [data, setData] = useState(lstmarlstmcovnetttvtttvoutput.Today);

  const fetchCustomData = (key) => {
    setData(lstmarlstmcovnetttvtttvoutput[key]);
  };

  return (
    <div className={classes.container}>
   
      <DropdownSelector fetchCustomData={fetchCustomData} />
      <MyGraph data={data} />
    </div>
  );
}

export default Analyticslstmarlstmcovnetttvtttv;