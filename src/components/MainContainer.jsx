import React from 'react'
import { useSelector } from 'react-redux'
import VideoTrailer from './VideoTrailer'
import VideoTitle from './VideoTitle'

const MainContainer = () => {


    const movies = useSelector((store) => store.movies?.nowPlayingMovies)

    if(!movies) return;

    const mainMovie = movies[0]
    const {title,overview,id} = mainMovie
    
  return (
    <div className=''>
      <VideoTrailer id={id}></VideoTrailer>
      <VideoTitle title={title} overview={overview}></VideoTitle>
    </div>
  )
}

export default MainContainer
