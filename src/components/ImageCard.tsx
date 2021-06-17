import React from 'react'
import { AnimeSchedule, TopAnimeUpcoming } from '../types/types'

interface Props {
  type: string;
  anime?: any;
  AnimeSchedule?: AnimeSchedule;
  TopAnimeUpcoming?: TopAnimeUpcoming;
}

const Imagecard: React.FC<Props> = ({ type, anime, AnimeSchedule, TopAnimeUpcoming }) => {
  switch (type) {
    case 'TopAnimeUpcoming': {
      anime = TopAnimeUpcoming;
      break;
    }
    case 'AnimeSchedule': {
      anime = AnimeSchedule;
      break;
    }
  }
  return (
    <div className="mt-5 flex flex-row">
      <img 
        className="w-1/5 flex object-cover cursor-pointer rounded rounded-r-none" 
        src={ anime.image_url }
        alt={ anime.title } />
      <div className="bg-gray-800 p-2 w-1/2 text-gray-300 bg-opacity-30 cursor-pointer rounded rounded-l-none">
        <div className="truncate">
          <span className="text-xl font-semibold">{ anime.title }</span>
        </div>
        {type === 'AnimeSchedule' && (
          <div className="h-32 overflow-ellipsis overflow-hidden">
            <span className="text-xs">{ anime.synopsis }</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Imagecard