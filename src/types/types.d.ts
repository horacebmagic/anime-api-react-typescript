export interface Routes {
  name: string;
  path: string;
  component: any;
  exact: boolean;
  props?: {
    title: string;
  };
}

export interface TopAnimeUpcomingHandler {
  top: [];
}

export interface TopAnimeUpcoming {
  mal_id: number;
  rank: number;
  title: string;
  url: string;
  image_url: string;
  type: string;
  episodes?: number;
  start_date: string;
  end_date?: string;
  members: number;
  score: number;
}

export interface DaySchedule {
  monday?: [];
  tuesday?: [];
  wednesday?: [];
  thursday?: [];
  friday?: [];
  saturday?: [];
  sunday?: [ ];
}

export interface AnimeSchedule {
  mal_id: number;
  url: string;
  title: string;
  image_url: string;
  synopsis: string;
  type: string;
  airing_start: string;
  episodes?: number;
  members: number;
  genres: [];
  source: string;
  producers: [];
  score?: number;
  licensors?: [];
  r18: boolean;
  kids: boolean;
}

export interface AnimeSeasonHandler {
  anime: [];
}

export interface AnimeSeason extends AnimeSchedule {
  continuing: boolean;
}