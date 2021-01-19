
import React, { Component, useState } from 'react';
import './App.css';
import Demo1 from './component/Demo1/Demo1';
import Demo2 from './component/Demo2';
import Demo3 from './component/Demo3';





 function App() {
  const [value , setValue]  = useState([
    { name : "loc", age:21},
    { name : "tham", age:21},
    { name : "thuy", age:21},
  ])
  const changeValue = (event) => {
    setValue([
      { name : event.target.value, age:1},
      { name : event.target.value, age:3},
      { name : event.target.value, age:2}
    ])
  }
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <Demo1/>
      
        <Demo2
         name={value[0].name}
         changed ={changeValue}
         age ={value[0].age}> My favourite: play game</Demo2>
        <Demo2 
        name={value[1].name}
        changed ={changeValue} 
        age ={value[1].age}> My favourite: play game</Demo2>
        <Demo2
         name={value[2].name}
         changed ={changeValue}
         age ={value[2].age}> My favourite: play game</Demo2>
        <Demo3></Demo3>
      </div>
      
    );
  
}

export default App;
