import React from 'react'
// useParams hook //
import { useParams } from 'react-router-dom'

function User(){
    // dynamic value get in url //
    // url me pass ki id ko web page per show karna //
    const {userId} = useParams()
    return(
        <div className='bg-gray-800 text-white text-3xl p-4'>User : {userId}</div>
    )
}

export default User
