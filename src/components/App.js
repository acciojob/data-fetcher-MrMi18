import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [isvissible, setIsvissible] = useState(true);
  const [apidata, setApidata] = useState(null);
  const [err , setErr] = useState("")

  useEffect(()=>{ 
    axios({
      url: 'https://dummyjson.com/products/',
      module : "Get",    
    })
    .then(response=>{
      let res = JSON.stringify(response.data);
      setIsvissible(false);
      setApidata(res);
      console.log("Fetched Data: ",res);
    })
    .catch(function (error) {
        let err = JSON.stringify(error.message);
        console.log(err);
        setErr(err);
    });
  },[])

 return (
    <div>
      { isvissible && <p>loading...</p>}
      { err && <p>{err}</p>}            
      { !isvissible && <h1>Data Fetched from API</h1>}
      {apidata}     
    </div>
  );
};