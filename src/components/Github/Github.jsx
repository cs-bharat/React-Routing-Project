import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // hooks useLoaderData //
const data = useLoaderData()

// const [data , setData] = useState([]);
// useEffect(()=> {
//    fetch("https://api.github.com/users/cs-bharat")
//    .then((response) => response.json())
//    .then((data) => {
//     console.log(data);
//       setData(data);
//    })

// }, [])

  return (
    <div className="bg-gray-800">
        <h2 className="text-white text-3xl p-4">Github Name : {data.name}</h2>
     <div className="data flex justify-center items-center flex-wrap gap-8">
        <img src={data.avatar_url} alt="github picture" width={200}  />
        <p className="text-white text-lg">Followers : {data.followers}</p>
        <p className="text-white text-lg">Following : {data.following}</p>
    </div>
    </div>
  )
}

export default Github

// optimize way to fetch data on routing == (Loader) //
export const gitHubInfoLoader = async()=>{
   const response  = await fetch("https://api.github.com/users/cs-bharat")
   return response.json();
}