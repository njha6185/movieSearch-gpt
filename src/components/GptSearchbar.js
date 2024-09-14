import React from 'react'
import { useSelector } from 'react-redux'
import { LANG_CONSTANT } from '../constants/languageConst'

const GptSearchbar = () => {
  const lang = useSelector((store)=>store.appConfig.lang)
  return (
    <div className='p-[9%] justify-center'>
        <form className='px-[15%] grid grid-cols-12'>
            <input type='text' className='p-4 m-4 col-span-9' placeholder={LANG_CONSTANT[lang].gptSearchPlaceHolder}/>
            <button className='col-span-3 py-4 px-4 m-4 bg-red-700 text-white rounded-lg'>
              {LANG_CONSTANT[lang].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchbar