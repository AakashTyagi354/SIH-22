
// import React, { useState, useEffect } from 'react'


// const Fetch = () => {


//   const [users, setUsers] = useState([])

//   const fetchData = () => {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify({
//       "time_span": "month",
//       "model": [
//         "AR LSTM",
//         "LSTM"
//       ]
//     });

//     var requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow'
//     };

//     fetch("http://localhost:5000/multiple", requestOptions)
//       .then(response => response.text())
//       .then(result => console.log(result))
//       .then(data => {
//         setUsers(data)
//         console.log(data);
        
//       })
//       .catch(error => console.log('error', error));

     
//   }

 
// const json = JSON.parse(users);

//   useEffect(() => {
//     fetchData()
//   }, [])
  
//   return (
//    <>
//    hello
  
//    {/* {console.log(json)} */}


//    </>

     
   
//   );
// }



// export default Fetch





// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "time_span": "month",
//   "model": [
//     "AR LSTM",
//     "LSTM"
//   ]
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// var aakash  = [];

// fetch("http://localhost:5000/multiple", requestOptions)
//   .then(response => {
//         response.json()
//   })
//   .then(data => {
   
//     // aakash[0] = data.results[0]
//      console.log(data);
     
//   })

//   .catch(error => console.log('error', error));

  
//     //  console.log(auth.results[0].LSTM)
//   //  console.log(aakash)
   

// // const api_url = 
// //       "http://localhost:5000/multiple";
  
// // // Defining async function
// // async function getapi(url) {
    
// //     // Storing response
// //     const response = await fetch(url);
    
// //     // Storing data in form of JSON
// //     var data = await response.json();
// //     console.log(data);
// //     // if (response) {
// //     //     hideloader();
// //     // }
// //     // show(data);
// // }
// // // Calling that async function
// // getapi(api_url);

