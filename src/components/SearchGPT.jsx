import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG } from '../utils/constants'

const SearchGPT = () => {
  return (
    <div>
      
         <div className="absolute">
                <img
                  className="brightness-50"
                  src={BG}
                  alt=""
                />
              </div>
      <GptSearchBar></GptSearchBar>
      <GptMovieSuggestion></GptMovieSuggestion>
    </div>
  )
}

export default SearchGPT
