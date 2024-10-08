import React from 'react'

const Giftpage = () => {
  return (
    <div>
         <header className='bg-blue-500 h-4/6 py-2 -mt-8 rounded-b-3xl'>
    <h1 className='text-4xl font-semibold text-black'>Birthday Presents</h1>
  </header>

  <input type='text' placeholder="What's your name"/>
  
  <div className='mt-3 gifts flex flex-col flex-wrap gap-y-5 mr-auto ml-auto'>
    <div className='bg-contain bg-no-repeat bg-center bg-[url("https://www.apple.com/v/airpods/v/images/overview/airpods_max__f265q4g4ddym_medium.png")]'><p className='text-8xl font-semibold'>Airpods Max</p><img className='' /></div>
    <p className='text-4xl '>10 different items from the carrefour bakery</p>
   <div className='relative ml-auto mr-auto w-56 rounded-xl '>
     <video autoPlay loop muted className='absolute inset-0 w-full rounded-3xl h-full object-cover'>
       <source src="Snapinsta.app_video_311225624_1671068646760513_8669167342873962774_n.mp4" type="video/mp4" />
       Your browser does not support the video tag.
     </video>
    <div className='relative z-10 p-8 text-white'>
      <p className='text-4xl font-semibold'>Chicken Socks</p>
    </div>
  </div>
      <p className='text-4xl font-light'>Mtb Bike</p>
    <p className='text-6xl font-medium'>All weather tent</p>
    <div className='bg-contain rounded-xl bg-no-repeat pt-12 pb-12    bg-[url("/sake.png")]'><p className='text-3xl text-slate-400 font-semibold '>Japanese sake 😭</p></div>
    {/* <p className='text-6xl font-medium'>Japanese sake 😭</p> */}
    <p className='text-6xl font-medium'> 1 Bitcoin</p>
    <p className='text-xl font-light'>Ox tail</p>

  </div>

  {/* item2 */}
    </div>
  )
}

export default Giftpage