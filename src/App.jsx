import React from 'react'
import 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { addByValue, decrement, increment } from './store/reducer/counterSlice'

export default function App() {
  const dispatch=useDispatch()
  const {value} = useSelector(state=>state.counter)
  console.log(value)


  return (
    <div className=''>
      <p className='text-4xl font-bold text-red-500'>Hii there how are you, we are learning redux toolkit</p>  
      <p className='text-3xl text-center mt-8'>Counter: {value}</p>

      <button onClick={()=>dispatch(increment())} className='mx-auto mt-4 bg-red-400 p-2 block border'>Increment</button>
      <button onClick={()=>dispatch(decrement())} className='mx-auto mt-4 bg-green-400 p-2 block border'>Decrement</button>
      <button onClick={()=>dispatch(addByValue(5))} className='mx-auto mt-4 bg-blue-400 p-2 block border'>Add by 5</button>
    
    </div>
  )
}
