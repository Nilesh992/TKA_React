import React, { useEffect, useState } from 'react'


function Counter() {
    let [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(null);

    let inc = () => {
        setCounter(counter+1);
        if (timer) clearTimeout(timer);
    const newTimer = setTimeout(() => {
      setCounter(0);
    }, 1000);
    setTimer(newTimer);

    }
    let dec = () => {
       if(counter>0){
         setCounter(counter-1);
       }
    }
    useEffect(() => {
    return () => clearTimeout(timer);
  }, [timer]);
    return (
        <div>
            <button onClick={inc}>+</button> <br />
            <h1>{counter}</h1>
            <button onClick={dec}>-</button>
        </div>
    )
}

export default Counter
