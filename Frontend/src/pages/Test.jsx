import React from 'react'
import { useSelector } from 'react-redux'
import Store from '@/components/Store'


function Test() {
    const userData = useSelector((state) => state.auth.userData)

    
  return (
    <div className='text-white ' >
        <h1>This is test</h1>
        <h1> the : {userData.fullName}</h1>
      <p>
        {
            JSON.stringify(userData)
        }
      </p>
      <Store></Store>
    </div>
  )
}

export default Test