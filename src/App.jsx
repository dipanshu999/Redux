import React, { useState } from 'react'
import 'react-redux'
import { useDispatch, useSelector } from 'react-redux'


export default function App() {
  const {users}=useSelector(state=>state)
  console.log(users)

  return (
    <div className=''>
        {
          users.map((item,index)=> (<h1 className='text-blue-500 text-xl' key={index}> {item.firstname} </h1>))
        }
    </div>
  )
}
