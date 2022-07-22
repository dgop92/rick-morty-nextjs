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

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      gender
      image
    }
  }
`;

export const GET_CHARACTERS_BY_IDS = gql`
  query Characters($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      status
      gender
      image
    }
  }
`;
