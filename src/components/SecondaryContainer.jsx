import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)    
    return (
      <div className=' bg-black '>
        <div className='-mt-80 relative z-20 px-10'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}></MovieList>
        <MovieList title={"Top Rated"} movies={movies.topratedMovies}></MovieList>
        <MovieList title={"Popular"} movies={movies.popularMovies}></MovieList>
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies}></MovieList>
        </div>
      </div>
    );
}

export default SecondaryContainer
