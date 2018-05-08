import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos,handleClick}) => {
    const videoItems = videos.map( (video,index) =>{
         return <VideoListItem 
                    key = {video.etag}
                    video = {video}
                    handleClick = {() => handleClick(index)} />;
    });
    
    return(
        <ul className="col-md-4 list-group" >
            {videoItems}
        </ul>
    );
}

export default VideoList;
