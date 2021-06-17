import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DaySchedule, AnimeSchedule } from '../types/types';
import Imagecard from '../components/ImageCard';
import SelectOption from '../components/SelectOption';

interface Props {
  title: string;
}

const Schedule: React.FC<Props> = ({ title }) => {
  useEffect(() => {
    document.title = title; 
  });

  const [animes, setAnime] = useState<AnimeSchedule[]>();
  const [filter, setFilter] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const days: Array<string> = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const today = days[new Date().getDay()];
  
  filter === undefined && setFilter(today);

  useEffect(() => {
    const getAnime = async (): Promise<void> => {
      setIsLoading(true);
      const endpoint: string = `https://api.jikan.moe/v3/schedule/${filter}`;
      await axios
        .get<DaySchedule>(endpoint)
        .then(res => {
          switch (filter) {
            case 'monday': {
              setAnime(res.data.monday);
              break;
            }
            case 'tuesday': {
              setAnime(res.data.tuesday);
              break;
            }
            case 'wednesday': {
              setAnime(res.data.wednesday);
              break;
            }
            case 'thursday': {
              setAnime(res.data.thursday);
              break;
            }
            case 'friday': {
              setAnime(res.data.friday);
              break;
            }
            case 'saturday': {
              setAnime(res.data.saturday);
              break;
            }
            case 'sunday': {
              setAnime(res.data.sunday);
              break;
            }
            default: {
              console.log('404');
              break;
            }
          }
          setIsLoading(false);
        }).catch(err => {
          err.response.status === 400 && console.log('404 not found');
        });
    }
    getAnime();
  }, [filter]);

  return (
    <div>
      <div className="flex flex-row gap-3">
        <div className="text-xl capitalize">{ title }</div>
        <React.Fragment>
          <SelectOption data={ days } setFilter={ setFilter } val={ filter } />
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

export default Schedule