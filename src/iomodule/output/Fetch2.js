import { useEffect } from 'react';
import {myObj} from "./global"

export let data;
function Fetch2() {

  useEffect( async () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        "time_span": "week",
        "model": ["LSTM", "ConvNet", "T2V", "T2Vtransfomer", "basic_transfomer"]
    })

    };


  let result = await fetch('http://localhost:5000/forcast',requestOptions)
  data = await result.json()
   
  // console.log(data)
  },[]);

  return (
    <div className="App">
      {console.log("data")}
    </div>
  );
}

export default Fetch2;