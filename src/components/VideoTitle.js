import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute  bg-gradient-to-r from black'>
        <h1 className='text-5xl text-white font-bold'>{title}</h1>
        <p className='py-6 text-lg text-white w-3/4 line-clamp-2'>{overview}</p>
        <div>
            <button className=' p-4 px-12 bg-white text-black mx-2 text-xl rounded-lg hover:bg-opacity-80'>▶Play</button>
            <button className='p-4 px-12 bg-gray-500 bg-opacity-50 text-white mx-2 text-xl rounded-lg'>ℹ️More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle