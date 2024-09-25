import React from 'react'
import { Link } from 'react-router-dom'

const LandingBoxes = () => {
  return (
    <div>
      <div className='container ml-auto mr-auto max-w-md'>
        <p>I figured it would be easier to list all the gifts I want for any occasion—not just birthdays, parties, or weddings. This just saves everyone time on planning surprise gifts that I may or may not like. If you get me anything from this list, I will absolutely love both you and the item. Each item’s size is  based on how much I really want it. Much love ❤️</p>
      </div>
      <Link to='/gifts'>
      <p className=' p-5 text-3xl rounded-lg bg-blue-50 shadow'>Antony Macharia</p>
      </Link>
      <Link to='upload'><p className='fixed mt-auto bottom-0 right-0'>Upload</p></Link>
    </div>
  )
}

export default LandingBoxes