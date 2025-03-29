import React from 'react'
import { Button } from '../ui/button'
import { simpleFetch } from '@/backend/simpleFetch'
import api from '@/backend/api'

function Logout() {

    const logoutHandler = async() => {

        const response = await simpleFetch({
            url : api.LogoutUser , 
            method : "Post" 
        })

        console.log(response)
    }

  return (

    <div>
     <Button onClick={logoutHandler} >LogOut</Button>
    </div>
  )
}

export default Logout