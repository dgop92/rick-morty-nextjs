export interface InfoData {
  count: number;
  pages: number;
  next: number;
  prev: number;
}

export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episodeSeason: string;
}

export interface FilterEpisode {
  name: string;
  episode: string;
}

export interface EpisodeResponseData {
  episodes: {
    info: InfoData;
    results: Episode[];
  };
}

export interface EpisodeVarsData {
  page: number;
  filter?: FilterEpisode;
}
