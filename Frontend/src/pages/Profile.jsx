import React, { useState } from 'react'
import { Camera, Settings, Watch } from 'lucide-react'

import { useSelector } from 'react-redux'

function YouTubeProfile() {
  const [activeTab, setActiveTab] = useState('Videos')
  const [bio] = useState('Content creator | Tech Enthusiast | Sharing my journey')

  const userData = useSelector((state) => state.auth.userData)

  const renderTabContent = () => {
    switch(activeTab) {
      case 'Watch History':
        return (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-neutral-900 rounded-lg overflow-hidden">
                <img 
                  src={`/api/placeholder/300/200?${item}`} 
                  alt={`Watched Video ${item}`} 
                  className="w-full h-32 object-cover"
                />
                <div className="p-2">
                  <p className="text-sm truncate">Video Title Goes Here</p>
                  <p className="text-xs text-neutral-400">Channel Name</p>
                  <p className="text-xs text-neutral-500 mt-1">Watched 2 days ago</p>
                </div>
              </div>
            ))}
          </div>
        )
      case 'About':
        return (
          <div className="mt-6 space-y-4 text-neutral-300">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Channel Description</h3>
              <p>{bio}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Details</h3>
              <p>Joined: March 2023</p>
              <p>Country: United States</p>
            </div>
          </div>
        )
      default:
        return <div className="mt-6 text-neutral-400">No content for this tab</div>
    }
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Cover Photo Section */}
      <div className="relative h-48 sm:h-64 bg-neutral-900">
        <img 
          src={userData.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover opacity-70"
        />
        <button className="absolute bottom-4 right-4 bg-black/60 p-2 rounded-full hover:bg-black/80 transition-colors">
          <Camera className="text-white" size={24} />
        </button>
      </div>

      {/* Profile Header */}
      <div className="container mx-auto px-4 -mt-16 sm:-mt-20 relative">
        <div className="flex flex-col sm:flex-row items-center sm:items-end space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Profile Picture */}
          <div className="relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-black overflow-hidden">
              <img 
                src={userData.avatar} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              <button className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Camera className="text-white" size={32} />
              </button>
            </div>
          </div>

          {/* Profile Info */}
          <div className="text-center sm:text-left flex-grow">
            <h1 className="text-2xl sm:text-3xl font-bold">{userData.fullName}</h1>
            <p className="text-neutral-400 text-sm">@channelhandle</p>
            <div className="text-neutral-300 text-sm mt-2">
              {bio}
            </div>
          </div>

          {/* Profile Actions */}
          <div className="flex space-x-4">
            <button className="bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-full transition-colors">
              Customize Avatar
            </button>
            <button className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-full transition-colors">
              <Settings size={20} />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 flex justify-center sm:justify-start space-x-6 text-neutral-400">
          <div className="text-center">
            <p className="text-white font-bold text-lg">242</p>
            <p className="text-sm">Subscribers</p>
          </div>
          <div className="text-center">
            <p className="text-white font-bold text-lg">1,542</p>
            <p className="text-sm">Total Views</p>
          </div>
          <div className="text-center">
            <p className="text-white font-bold text-lg">52</p>
            <p className="text-sm">Videos</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-8 border-b border-neutral-800">
          <nav className="flex space-x-6 justify-center sm:justify-start">
            {['Videos', 'Playlists', 'Watch History', 'About'].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`
                  text-neutral-400 hover:text-white pb-3 
                  ${activeTab === tab 
                    ? 'border-b-2 border-white text-white' 
                    : 'border-b-2 border-transparent'}
                  transition-colors
                `}
              >
                {tab === 'Watch History' ? (
                  <span className="flex items-center">
                    <Watch size={16} className="mr-2" /> Watch History
                  </span>
                ) : (
                  tab
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div>
          {renderTabContent()}
        </div>
      </div>
    </div>
  )
}

export default YouTubeProfile