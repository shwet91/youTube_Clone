import React from 'react'
import VideoPlayer from '@/components/VideoSection/VideoPlayer'
import VideoDescription from '@/components/VideoSection/VideoDescription'

function VideoPlay() {
  return (
    <div className='flex w-full items-center p-5 flex-wrap flex-col' >
        {/* <h1 className='text-center text-6xl text-white' >This is video Player</h1> */}

        <div className='w-3/4 m-5' >
            {/* VideoPlayer */}
            <VideoPlayer></VideoPlayer>
        </div>

        <div className='w-3/4'>
            {/* description */}
            <VideoDescription></VideoDescription>
        </div>

    </div>
  )
}

export default VideoPlay