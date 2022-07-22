import { gql } from "@apollo/client";

export const COMMON_CHARACTER_FIELDS = gql`
  fragment commonFields on Character {
    id
    name
    status
    gender
    image
  }
`;

export const ALL_EPISODE_CHARACTERS = gql`
  ${COMMON_CHARACTER_FIELDS}
  query EpisodeCharacters($id: ID!) {
    episode(id: $id) {
      characters {
        ...commonFields
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  ${COMMON_CHARACTER_FIELDS}
  query GetCharacter($id: ID!) {
    character(id: $id) {
      ...commonFields
    }
  }
`;

export const GET_CHARACTERS_BY_IDS = gql`
  ${COMMON_CHARACTER_FIELDS}
  query Characters($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      ...commonFields
    }
  }
`;
