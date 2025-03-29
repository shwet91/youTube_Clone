



import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

function VideoChannelSection() {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <div className='w-full bg-slate-800'>
      <div className='p-4 sm:p-5'>
        <div className='flex flex-col sm:flex-row relative w-full items-center justify-between gap-4'>
          {/* Channel section */}
          <div className='flex items-center space-x-4 sm:space-x-6 w-full'>
            {/* Profile Image */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1741851374411-9528e6d2f33f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D" 
                alt="Profile" 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Channel Info */}
            <div className='flex-grow'>
              <p className='text-white text-sm sm:text-base'>Channel Name</p>
              <p className='text-white text-xs sm:text-sm opacity-70'>Total Subscribers</p>
            </div>

            {/* Buttons Container */}
            <div className='flex items-center space-x-2 sm:space-x-4'>
              <button className="bg-rose-800 text-white text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-rose-700 transition-colors">
                Subscribe
              </button>
              <button className="bg-rose-800 text-white text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-rose-700 transition-colors">
                Like
              </button>
            </div>
          </div>
        </div>

        {/* Description Toggle */}
        <div className='mt-4'>
          <button 
            onClick={() => setShowDescription(!showDescription)}
            className='flex items-center justify-center w-full text-white bg-slate-700 py-2 rounded hover:bg-slate-600 transition-colors'
          >
            {showDescription ? (
              <>
                <ChevronUp className='mr-2' size={20} />
                Hide Description
              </>
            ) : (
              <>
                <ChevronDown className='mr-2' size={20} />
                Show Description
              </>
            )}
          </button>

          {/* Description Content */}
          {showDescription && (
            <div className='mt-4 p-4 bg-slate-700 rounded text-white text-sm'>
              <p>
                This is a sample video description. Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className='mt-4 flex items-center space-x-4'>
                <p className='text-xs opacity-70'>Published: March 28, 2025</p>
                <p className='text-xs opacity-70'>Views: 10,342</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VideoChannelSection




















