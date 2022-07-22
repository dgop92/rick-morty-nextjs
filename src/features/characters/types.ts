export type CharacterStatus = "Alive" | "Dead" | "unknown";
export type CharacterGender = "Male" | "Female" | "Genderless" | "unknown";

export interface Character {
  id: string;
  name: string;
  status: CharacterStatus;
  gender: CharacterGender;
  image: string;
}

export interface EpisodeCharactersResponseData {
  episode: {
    characters: Character[];
  };
}

export interface GetCharacterResponseData {
  character: Character;
}

export interface CharactersByIdResponseData {
  charactersByIds: Character[];
}

export interface DetailVars {
  id: string;
}

export interface CharactersDetailVars {
  ids: string[];
}
