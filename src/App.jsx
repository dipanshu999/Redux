import React, { useState } from 'react'
import { filterUser } from './store/reducer/UserSlice'
import { useDispatch, useSelector } from 'react-redux'


export default function App() {
  const dispatch=useDispatch()
  const {users}=useSelector(state=>state.UserSlice)
  console.log(users)

  return (
    <>
      <div className='flex gap-4 flex-wrap w-[80vw] mx-auto mt-12 font-semibold'>
          {
            users.map((item,index)=> (<h1 className='text-blue-500 text-3xl' key={index}> {item.firstname} </h1>))
          } 
      </div>

      <button onClick={()=>dispatch(filterUser())} className='bg-red-400 mx-auto block p-2 rounded-md mt-8 text-xl font-medium'>
        Filter
      </button>
      
    </>
  )

}
