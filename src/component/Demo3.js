import React,{useState} from'react';

function  Demo3() {
    const [count,setCount] = useState(0);
    return(
      <div>
          <p> click di {count} </p>
          <button onClick={() => setCount(count + 1)}> click ne</button>
      </div>  
    );
}

export default Demo3;