import React from 'react';
import { Clock, Eye } from 'lucide-react';

const VideoCard = ({ 
  thumbnail = "/api/placeholder/640/360",
  title = "Video Title Goes Here",
  views = "1.2M",
  duration = "10:45",
  uploadedAt = "2 weeks ago",
  channelName = "Channel Name",
  channelAvatar = "/api/placeholder/40/40"
}) => {
  return (
    <div className="w-full max-w-sm bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Thumbnail with duration */}
      <div className="relative">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-2 py-1 rounded">
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {duration}
          </span>
        </div>
      </div>
      
      {/* Video info */}
      <div className="p-3">
        <div className="flex gap-3">
          {/* Channel avatar */}
          <div className="flex-shrink-0">
            <img 
              src={channelAvatar} 
              alt={channelName}
              className="w-10 h-10 rounded-full"
            />
          </div>
          
          {/* Video details */}
          <div className="flex-1">
            <h3 className="text-white font-medium line-clamp-2 mb-1">
              {title}
            </h3>
            <p className="text-gray-400 text-sm">
              {channelName}
            </p>
            <div className="flex items-center text-gray-400 text-xs mt-1">
              <span className="flex items-center gap-1">
                <Eye size={14} />
                {views} views
              </span>
              <span className="mx-1">•</span>
              <span>{uploadedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;