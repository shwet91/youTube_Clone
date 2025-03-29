import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from './ui/button'

function Store() {

    const data = useSelector((state) => state.auth.userData)


  return (
    <div>
      <Button onClick={()=> console.log(data)} >Test Store Variables</Button>
    </div>
  )
}

export default Store