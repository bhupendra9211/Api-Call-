import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

interface dataProps{
  title:string;
  id:number;
}

function App(){
  const [data,setData] = useState<dataProps[]>([])
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(response => response.json())
  //   // .then(response => console.log(response))
  //   .then(response => setData(response as dataProps[]))
  // },[])
  useEffect(()=>{
    axios.get<dataProps[]>('https://jsonplaceholder.typicode.com/todos')
    .then(response => setData(response.data))
    
  },[])
  
  return (
    <div className="App">
      <h1>This is Api call test</h1>
      {/* {data.map((data) =>(data.title) )} */}
      {data.map(data => <li key={data.id}>{data.title}</li> )}
    </div>
  );
}

export default App;
