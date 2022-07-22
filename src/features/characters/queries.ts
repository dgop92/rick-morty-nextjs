import { gql } from "@apollo/client";

export const ALL_EPISODE_CHARACTERS = gql`
  query EpisodeCharacters($id: ID!) {
    episode(id: $id) {
      characters {
        id
        name
        status
        gender
        image
      }
    }
  }
`;
