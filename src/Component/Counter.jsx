import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../Redux/Counterslice'

function Counter() {
 

  const dispatch = useDispatch()
  const count = useSelector((state)=>state.Counterslice.count)

  const [amount,setAmount] = useState(0)

  const settingInput = () =>{
    if(amount){
      dispatch(incrementByAmount(Number( amount)))
      setAmount(0)
    }
    else{
      alert("No data")
    }
  }

  return (
    <div>
    <h1> Counter App</h1>
    <span className='fs-3'>
    Count is : {count}
    </span>
    <div className='mt-5'>
    <button onClick={() => {dispatch(increment())}} className='btn text-white btn-secondary mx-2'>Increment</button>
    <button onClick={() => {dispatch(reset())}} className='btn text-white btn-secondary mx-2'>Reset</button>
    <button onClick={() => {dispatch(decrement())}} className='btn text-white btn-secondary mx-2'> Decrement</button>
    </div>

    <div>
    <input onChange={e=>setAmount(e.target.value)} value={amount|| "" } className='mt-4 bg-light rounded form-control' placeholder=' Enter the amount to incremenrt' type="text" />
    <br />
    <button onClick={settingInput} className='btn mt-2 btn-warning '>Submit</button>
    </div>
    </div>
  )
}

export default Counter
