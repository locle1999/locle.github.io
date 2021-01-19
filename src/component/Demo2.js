import React from 'react';


const  hi = (props) => {
    return <div> 
    <h1 > chào {props.name} {props.age} !!!</h1>
    <p>{props.children}</p>
    <input type ="text" onChange={props.changed} value={props.name}></input>
    </div>
    ;
}

export default hi;