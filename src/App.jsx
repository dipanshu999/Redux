import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterUser,originalUser, sortUser } from './store/reducer/UserSlice'


export default function App() {
  const dispatch=useDispatch()
  const {users}=useSelector(state=>state.UserSlice)
  console.log(users)

  return (
    <>
      <div className='flex gap-4 flex-wrap w-[80vw] mx-auto mt-12 font-semibold border shadow-xl p-2 h-[18em]'>
          {
            users.map((item,index)=> (<h1 className='text-blue-500 text-3xl' key={index}> {item.firstname} </h1>))
          } 
      </div>

  <div className='flex gap-4'>
      <button onClick={()=>dispatch(filterUser())} className='bg-red-400 mx-auto block p-2 rounded-md mt-8 text-xl font-medium'>
        Filter
      </button>

      <button onClick={()=>dispatch(originalUser())} className='bg-green-400 mx-auto block p-2 rounded-md mt-8 text-xl font-medium'>
        Original
      </button>
      
      <button onClick={()=>dispatch(sortUser())} className='bg-blue-400 mx-auto block p-2 rounded-md mt-8 text-xl font-medium'>
        Sort
      </button>
  </div>
      
    </>
  )

}
