import React from 'react'
import VideoCard from '@/components/Card'

function Home() {
  return (
    <div className='w-full h-full bg-slate-900 '>
      <h1 className='text-white text-center text-8xl' >This is Home</h1>

      {/* <div className='flex justify-between flex-wrap gap-3 '>

      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>

      </div> */}

<div className="flex flex-wrap justify-around">

  <VideoCard></VideoCard>
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
      <VideoCard></VideoCard>
</div>



      </div>
  )
}

export default Home