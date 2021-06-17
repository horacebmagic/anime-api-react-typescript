import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TopAnimeUpcoming, TopAnimeUpcomingHandler } from '../types/types';
import Imagecard from '../components/ImageCard';

interface Props {
  title: string;
}

const Home: React.FC<Props> = ({ title }) => {
  useEffect(() => {
    document.title = title; 
  });

  const [animes, setAnime] = useState<TopAnimeUpcoming[]>();

  const getAnime: any = async () => {
    const endpoint: string = 'https://api.jikan.moe/v3/top/anime/1/upcoming';
    await axios
      .get<TopAnimeUpcomingHandler>(endpoint)
      .then(res => {
        setAnime(res.data.top);
      });
  }
  
  useEffect(() => {
    getAnime();
  }, []);

  return (
    <div>
      <span className="text-xl">Top Anime Upcoming</span>
      {animes && animes.length > -1 && animes.map(anime => (
        <Imagecard key={ anime.mal_id } type='TopAnimeUpcoming' TopAnimeUpcoming={ anime } />
      ))}
    </div>
  )
}

export default Home