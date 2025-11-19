import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      I am home page
      <Image src={"https://images.unsplash.com/photo-1763142045649-9adea5c4805a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={300} height={300} alt='Hello'></Image>
      
    </div>
  )
}

export default page
