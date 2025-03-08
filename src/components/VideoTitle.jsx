import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="absolute top-0 left-0 pt-44 pl-24 bg-gradient-to-r from-black text-white w-full overflow-hidden aspect-video " >
      <h1 className="text-6xl font-bold ">{title}</h1>
      <p className="text-lg py-6 w-1/3 ">{overview}</p>

      <div className="">
        <button className="bg-white/50 text-black text-xl px-12 h-14 font-semibold cursor-pointer rounded-xl hover:opacity-70 ">
          ▶Play
        </button>
        <button className="bg-gray-500/50 text-white text-xl px-12 mx-2 h-14 font-semibold cursor-pointer rounded-xl hover:opacity-70">
          ℹMore Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle
