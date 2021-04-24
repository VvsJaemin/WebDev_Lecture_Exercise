
import React, { useState } from 'react'


const Counter =()=> {
  

    const [count, setCount ] = useState(10)
    const onIncrement =()=> {setCount(count+1)}
    const onDecreament =()=>{setCount(count-1)}
    return(
      <>
      <h1>카운트 : {count} </h1>
      <button onClick={onIncrement}>증가</button>
      <button onClick={onDecreament}>감소</button>
      </>
    )

}

export default Counter;
