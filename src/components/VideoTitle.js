import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] md:pt-[10%] lg:pt-[20%] md:px-10 lg:px-20 absolute  bg-gradient-to-r from black'>
        <h1 className='text-2xl ml-2 md:ml-0 md:text-3xl lg:text-5xl text-white font-bold'>{title}</h1>
        <p className='pt-6 hidden md:inline-block text-white w-3/4 line-clamp-2'>{overview}</p>
        <div>
            <button className='p-1 px-3 m-2 md:p-4 md:px-12 bg-white text-black mx-4 md:mx-2 md:text-xl rounded-lg hover:bg-opacity-80'>▶Play</button>
            <button className='hidden md:inline-block p-4 px-12 bg-gray-500 bg-opacity-50 text-white mx-2 text-xl rounded-lg'>ℹ️More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle