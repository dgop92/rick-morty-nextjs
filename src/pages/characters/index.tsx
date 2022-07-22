import type { GetStaticProps, NextPage } from "next";
import Stack from "@mui/material/Stack";
import { CharacterContainer } from "@features/characters/components/CharacterContainer";
import {
  Character,
  CharactersByIdResponseData,
  CharactersDetailVars,
} from "@features/characters/types";
import { GET_CHARACTERS_BY_IDS } from "@features/characters/queries";
import { PrimaryTitle } from "@components/PrimaryTitle";
import { apolloClient } from "@/lib/apolloClient";

interface CharactersPagesProps {
  characters: Character[];
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apolloClient.query<
    CharactersByIdResponseData,
    CharactersDetailVars
  >({
    query: GET_CHARACTERS_BY_IDS,
    variables: { ids: [1, 2, 3, 4, 5].map((id) => id.toString()) },
  });

  return {
    props: {
      characters: data.charactersByIds,
    },
  };
};

const CharactersPage: NextPage<CharactersPagesProps> = ({ characters }) => {
  return (
    <Stack alignItems="center" sx={{ my: 2 }}>
      <PrimaryTitle sx={{ my: 4 }}>Main Characters</PrimaryTitle>
      <CharacterContainer characters={characters} />
    </Stack>
  );
};

export default CharactersPage;
