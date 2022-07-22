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

export interface EpisodeCharactersVars {
  id: string;
}
