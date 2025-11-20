"use client"
import React from 'react'
// import Image from 'next/image'


const page = () => {
  const handleClick = async () => {
    let data = {
      name:"Nisarg",
      role:"Coder"
    }
    let a = await fetch("/api/add", { method: "Post", headers: { "Content-type": "application/json", }, body: JSON.stringify(data), })
    let res = await a.json()
    console.log(res)
  }
  return (
    <div>
      <h1 className='text-2xl text-center'>Next JS API Routes Demo</h1>
      <button className='bg-red-300 border-2 rounded-lg p-2' onClick={handleClick}>Click ME</button>
      I am home page

      {/* <Image src={"https://images.unsplash.com/photo-1763142045649-9adea5c4805a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={300} height={300} alt='Hello'></Image> */}

    </div>
  )
}

export default page
