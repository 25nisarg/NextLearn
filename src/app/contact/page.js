"use client"
// import React from 'react'
import { handleSubmit } from '../../../action/form'

const Contact = () => {
  
  return (
    <div className='flex gap-2'>
      <form action={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" className='border-2 border-black m-2' name="name" id="name" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input  type="password" className='border-2 border-black m-2' name="password" id="password" />
        </div>
        <div>
          <button className='border-2 border-black p-2'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
