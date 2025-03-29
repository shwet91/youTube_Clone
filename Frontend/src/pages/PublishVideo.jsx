import React from 'react'
import UploadVideo from '@/components/VideoSection/UploadVideo'

function PublishVideo() {
  return (
    <div className='w-full h-full bg-slate-900 flex items-center justify-center flex-col gap-5' >
      <h1 className='text-gray-500 text-center text-4xl' >Upload Video</h1>

      <UploadVideo></UploadVideo>

    </div>
  )
}

export default PublishVideo