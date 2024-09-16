import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
  const searchedMoie=useSelector((store)=>store.gpt.searchResult)
  
  if(!searchedMoie || searchedMoie?.length===0) return
  
  return (
      <div className='bg-black bg-opacity-80 bg-gradient-to-t from-black flex flex-col'>
      <MovieList title={"Search Result:"} movies={searchedMoie} isSearchResult={true}/>
    </div>
  )
}

export default GptMovieSuggestions