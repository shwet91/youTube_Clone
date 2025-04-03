



import React, { useEffect, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { simpleFetch } from '@/backend/simpleFetch'
import api from '@/backend/api'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from "sonner"

function VideoChannelSection() {
  const [showDescription, setShowDescription] = useState(false)
  const { videoId } = useParams()
    const [ owner , setOwner] = useState({})
    const [ ownerStats , setOwnerStats ] = useState({})
      const [ videoData , setVideoData] = useState({})
      const userData = useSelector((state) => state.auth.userData)
      const [ isSubscribed , setIsSubscribed ] = useState(false)

      const navigate = useNavigate()

  useEffect(() => {
    const fetchOwner = async () => {

       const response = await simpleFetch({
            url : `${api.getVideoById}/${videoId}`,
            method : "GET"
          })
          setVideoData(response.data)

      const fetchOwner = await simpleFetch({
            url : `${api.getAnyUser}/${response.data.owner}`,
            method : "GET"
          })
          await setOwner(fetchOwner.data)
      
      const fetchOwnerStats = await simpleFetch({
            url : `${api.ChannelStats}/${response.data.owner}`,
            method : "GET"
          })
          setOwnerStats(fetchOwnerStats.data)

          const subscribersList = await simpleFetch({
            url : `${api.getUserSubscribers}/${fetchOwner.data._id}`,
            method : "POST"
          })
         console.log(subscribersList.data)
         subscribersList.data.map((e) => {
          if(e.subscriber === userData._id){
            setIsSubscribed(true)
          }else {
            setIsSubscribed(false)
          }
         })

    }

    fetchOwner()

    
  } , [videoId])

  const deleteVideo = async() => {
    console.log("started")
    const response = await simpleFetch({
      url : `${api.getVideoById}/${videoId}`,
      method : "DELETE"
    })

    console.log(response)

    if(response.success){
      toast(`video Deleted`)
      navigate("/")
    }
  }

  const toggleSubscribe = async () => {
    console.log("toggleSubscribe")

    const toggleSubscription = await simpleFetch({
      url : `${api.toggleSubscription}/${owner._id}`,
      method : "POST"
    })

    console.log(toggleSubscription)
    setIsSubscribed((prev) => !prev)
  }

  const toggleLike = async() => {
    console.log("liked")
  }


  return (
    <div className='w-full bg-slate-800'>
      <button className='bg-white' onClick={() => console.log(userData._id , owner._id )} >Click me</button>
      <div className='p-4 sm:p-5'>
        <div className='flex flex-col sm:flex-row relative w-full items-center justify-between gap-4'>
          {/* Channel section */}
          <div className='flex items-center space-x-4 sm:space-x-6 w-full'>
            {/* Profile Image */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src={owner.avatar}
             // src="https://images.unsplash.com/photo-1741851374411-9528e6d2f33f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D" 
                alt="Profile" 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Channel Info */}
            <div className='flex-grow'>
              <p className='text-white text-sm sm:text-base'>{owner.fullName}</p>
              <p className='text-white text-xs sm:text-sm opacity-70'>{ownerStats.totalSubscribers} Subscribers</p>
              {/* <button className="bg-rose-800 text-white text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-rose-700 transition-colors">
              Subscribe
              </button> */}
            </div>

            {/* Buttons Container */}
            {/* <div className='flex items-center space-x-2 sm:space-x-4'>
              <button className="bg-rose-800 text-white text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-rose-700 transition-colors">
                Subscribe
              </button>
              <button className="bg-rose-800 text-white text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-rose-700 transition-colors">
                Like
              </button>
            </div> */}
            {
              owner._id !== userData._id ?             <div className='flex items-center space-x-2 sm:space-x-4'>
              <button onClick={toggleSubscribe} className="bg-rose-800 text-white text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-rose-700 transition-colors">
                { isSubscribed ? "unsubscribe" : "subscribe"}
              </button>
              <button onClick={toggleLike} className="bg-rose-800 text-white text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-rose-700 transition-colors">
                Like
              </button>
            </div> : 
              
              <div className='flex items-center space-x-2 sm:space-x-4'>
              <button onClick={() => navigate(`/editVideo/${videoId}`)} className="bg-rose-800 text-white text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-rose-700 transition-colors">
                Edit
              </button>
              <button onClick={deleteVideo}  className="bg-rose-800 text-white text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-rose-700 transition-colors">
                Delete
              </button>
            </div>
            }
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

                {videoData.description}
              </p>
              <div className='mt-4 flex items-center space-x-4'>
                <p className='text-xs opacity-70'>Published: {videoData.createdAt}</p>
                <p className='text-xs opacity-70'>Views: {videoData.views}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VideoChannelSection




















