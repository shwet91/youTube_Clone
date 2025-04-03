import React, { useEffect } from 'react'
import VideoCard from '@/components/Card'
import { useState } from 'react'
import { simpleFetch } from '@/backend/simpleFetch'
import api from '@/backend/api'

function Home() {


const [videos, setVideos] = useState([]);
const [loading, setLoading] = useState(false);
const [hasLoggedForCurrentBottom, setHasLoggedForCurrentBottom] = useState(false);

// Fetch data function
const fetchVideos = async () => {
  if (loading) return; // Prevent duplicate requests
  setLoading(true);

  try {
    const response = await simpleFetch({
      url: api.videoRecomendations,
      method: 'GET',
    });

    let anotherResponse;
    await Promise.all( response.data.map(async (e ) => {
         anotherResponse = await simpleFetch({
         url : `${api.getAnyUser}/${e.owner}`,
         method : "GET"
    });
     e.avatar = anotherResponse.data.avatar
    e.channelName = anotherResponse.data.fullName
    }))


    setVideos((prevVideos) => [...prevVideos, ...response.data]); // Append new videos
    console.log('Fetched Videos:', response.data);
  } catch (error) {
    console.error('Error fetching videos:', error);
  } finally {
    setLoading(false);
  }
};


// const fetchVideos = async () => {
//     if (loading) return; // Prevent duplicate requests
//     setLoading(true);
  
//     try {
//       const response = await simpleFetch({
//         url: api.videoRecomendations,
//         method: 'GET',
//       });
    
//       // Create an array of promises for fetching user data
//       const videosWithUserData = await Promise.all(
//         response.data.map(async (video) => {
//           const userResponse = await simpleFetch({
//             url: `${api.getAnyUser}/${video.owner}`,
//             method: "GET"
//           });
          
//           // Return a new object with all original properties plus the new ones
//           return {
//             ...video,
//             avatar: userResponse.data.avatar,
//             channelName: userResponse.data.fullName
//           };
//         })
//       );
    
//       setVideos((prevVideos) => [...prevVideos, ...videosWithUserData]);
//       console.log('Fetched Videos:', videosWithUserData);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     } finally {
//       setLoading(false);
//     }
//    };



useEffect(() => {

  fetchVideos()
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      if (!hasLoggedForCurrentBottom) {
        fetchVideos();
        setHasLoggedForCurrentBottom(true);
      }
    } else {
      setHasLoggedForCurrentBottom(false);
    } 
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [hasLoggedForCurrentBottom]);

 
const click = () => {
  console.log("clicked :" , videos)
}


  return (
    <div className='w-full h-full bg-slate-900 '>
      <h1 className='text-white text-center text-8xl' >This is Home</h1>

      <button onClick={click} >Click me</button>


<div className="flex flex-wrap justify-around">


      {
        Array.from(videos).map((e ) => {
           return <VideoCard
            thumbnail={e.thumbnail}
            title={e.title}
            views={e.views}
            duration={e.duration}
            uploadedAt={e.uploadedAt}
            channelName={e.channelName}
            channelAvatar={e.avatar}
            videoId = {e._id}
             ></VideoCard>

        })
      }
</div>



      </div>
  )
}

export default Home