import { gql } from "@apollo/client";

export const ALL_EPISODES = gql`
  query AllEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episodeSeason: episode
      }
    }
  }
`;
