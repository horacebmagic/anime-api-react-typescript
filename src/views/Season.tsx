import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Imagecard from '../components/ImageCard';
import SelectOption from '../components/SelectOption';
import { AnimeSeason, AnimeSeasonHandler } from '../types/types';

interface Props {
  title: string;
}

const Season: React.FC<Props> = ({ title }) => {
  useEffect(() => {
    document.title = title
  });

  const [seasons, setSeason] = useState<string[]>();
  const [currentSeason, setCurrentSeason] = useState<string>();
  const [years, setYears] = useState<number[]>();
  const [currentYear, setCurrentYear] = useState<number>();
  const [animes, setAnimes] = useState<AnimeSeason[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false); 

  useEffect(() => {
    const initialSeasons: string[] = ['winter','spring','summer','fall']; 
    setSeason(initialSeasons);
  }, []);

  useEffect(() => {
    const getSeason = (): void => {
      const date: Date = new Date();
      let season: string = '';
      if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) {
        season = 'winter';
      } else if (date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4) {
        season = 'spring';
      } else if (date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7) {
        season = 'summer';
      } else if (date.getMonth() === 8 || date.getMonth() === 9 || date.getMonth() === 10) {
        season = 'fall';
      }
      setCurrentSeason(season);
    }
    getSeason();
  }, []);

  useEffect(() => {
    const generateYears = (): void => {
      const now = new Date().getUTCFullYear();
      const years: number[] = Array(now - (now - 20)).fill('').map((v, idx) => now - idx) as number[];
      setCurrentYear(now);
      setYears(years);
    }
    generateYears();
  }, []);

  useEffect(() => {
    if (currentYear !== undefined && currentSeason !== undefined) {
      const getAnimes = async (year: number, season: string): Promise<void> => {
        setIsLoading(true);
        const endpoint: string = `https://api.jikan.moe/v3/season/${year}/${season}`;
        await axios
          .get<AnimeSeasonHandler>(endpoint)
          .then(res => {
            setAnimes(res.data.anime);
            setIsLoading(false);
          })
      }
      getAnimes(currentYear, currentSeason);
    }
  }, [currentYear, currentSeason]);

  return (
    <div>
      <div className="flex flex-row gap-3">
        <div className="text-xl capitalize">{ title }</div>
        <React.Fragment>
          <SelectOption data={ years } setFilter={ setCurrentYear } val={ currentYear } />
          <SelectOption data={ seasons } setFilter={ setCurrentSeason } val={ currentSeason } />
          {isLoading &&
            <span>
              Loading...
            </span>
          }
        </React.Fragment>
      </div>
      {animes?.map(anime => (
        <Imagecard key={ anime.mal_id } type='AnimeSchedule' AnimeSchedule={ anime } />
      ))}
    </div>
  )
}

export default Season