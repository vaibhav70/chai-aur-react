import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams();
  return (
    <div className='text-center bg-gray-400 p-3 text-xl'>User: {userid}</div>
  )
}

export default User