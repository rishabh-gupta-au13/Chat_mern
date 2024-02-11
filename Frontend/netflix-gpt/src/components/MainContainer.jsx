import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';





const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies);
    if(movies==null){
        return
    }
    const {original_title,overview}=movies[0];
  return (
    <div>MainContainer
     <VideoTitle title={original_title} overview={overview}/>
    <VideoBackground/>
   
    </div>

  )
}

export default MainContainer