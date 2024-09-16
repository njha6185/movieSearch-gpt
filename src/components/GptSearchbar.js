import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LANG_CONSTANT } from '../constants/languageConst'
import getGPTResponse from '../utils/bardAi'
import { searchMovie } from '../utils/searchMovieWithName'
import { addSearchResult } from '../store/GPTSlice'

const GptSearchbar = () => {
  const dispatch=useDispatch()
  const lang = useSelector((store)=>store.appConfig.lang)
  const [isSearchCompleted,setIsSearchCompleted]=useState(false)
  const gptSearchtext = useRef(null)
  const [errorMsg, setErrorMsg]=useState(null)
  let promiseAll=[]
  const handleGPTSearchClick=async()=>{
    setIsSearchCompleted(true)
    dispatch(addSearchResult([]))
    const userSearchData = gptSearchtext.current.value
    if(userSearchData){
      setErrorMsg(null)
      const prompttext = `Act as a Movie Recommendation system and suggest some movie for the query : ${userSearchData}. only give me names of 5 movie comma separated like format example, example: movie1, sholay, Don, Friends. If no result is there return [] or ''`
      const bardResponse=await getGPTResponse(prompttext)
      if(!bardResponse || bardResponse.length===0){
        setErrorMsg("Please Enter better search text no result found!!!")
      }
      bardResponse.map((name)=>{
        promiseAll.push(searchMovie(name))
      })
      const resMovie = await Promise.all(promiseAll)
      
      
      dispatch(addSearchResult(resMovie.flat()));
      
    }else{
      setErrorMsg("Enter Search Text")
    }
    setIsSearchCompleted(false)
  }
  return (
    <div className='pb-[1%] pr-[9%] pt-[9%] pl-[9%] justify-center'>
        <form className='px-[15%] grid grid-cols-12' onSubmit={(e)=>{e.preventDefault()}}>
            <input ref={gptSearchtext} type='text' className='p-4 m-4 col-span-9' placeholder={LANG_CONSTANT[lang].gptSearchPlaceHolder}/>
            <button className='col-span-3 py-4 px-4 m-4 bg-red-700 text-white rounded-lg'
            onClick={handleGPTSearchClick}
            >
              {isSearchCompleted?"Searching..":LANG_CONSTANT[lang].search}
            </button>
        </form>
        {errorMsg && <p className='bg-red-700 bg-gradient-to-r from-red-200 text-center text-black font-bold rounded-lg p-2'>{errorMsg}</p>}
    </div>
  )
}

export default GptSearchbar