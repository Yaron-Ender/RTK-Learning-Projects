
import { useState } from "react"
import { increment,decrement,incrementByAmount,selectCount,incrementAsync} from "./counterSlice"
import { useSelector,useDispatch } from "react-redux"

const Counter = () => {
  const [incrementAmount,setIncrementAmount]=useState('2')
const count = useSelector(selectCount)//access to the state -> function that leave on the counterSlice and it's returning back the the value of the property "numberValue"

//another way for useSelector
 const Count = useSelector(state=>state.counter.numberValue)
 const status = useSelector(state=>state.counter.status)
 console.log(Count,status)
 const incrementValue = Number(incrementAmount)||0
 const dispatch= useDispatch()
  return (
    <div>
        <button style={{backgroundColor:'pink'}}
         onClick={()=>{dispatch(increment())}}>+</button>
        <button style={{backgroundColor:'pink'}}
         onClick={()=>{dispatch(decrement())}}>-</button>
        <br />
        <br />
        <span>{count}</span>
        <input type="text"
        value={incrementAmount}
        onChange={(e)=>{setIncrementAmount(e.target.value)}}
        />
        <button 
        // incrementValue is the payload
        onClick={()=>{dispatch(incrementByAmount(incrementValue))}}
        >Add Amount</button>
        <button 
        onClick={()=>{dispatch(incrementAsync())}}
        >Add Async</button>
        <br /><br />
        {status=='idle'&&
        <p>the statsu is idle</p>
        }
        {status=='loading'&&
        <p>Loading...</p>
        }
    </div>
  )
}

export default Counter