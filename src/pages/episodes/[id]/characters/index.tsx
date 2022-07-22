import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { CharacterContainer } from "@features/characters/components/CharacterContainer";
import {
  Character,
  EpisodeCharactersResponseData,
  DetailVars,
} from "@features/characters/types";
import { ALL_EPISODE_CHARACTERS } from "@features/characters/queries";
import { apolloClient } from "@/lib/apolloClient";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface EpisodeCharactersProps {
  characters: Character[];
}

export const getServerSideProps: GetServerSideProps<
  EpisodeCharactersProps,
  IParams
> = async (ctx) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { id } = ctx.params!;

  const { data } = await apolloClient.query<EpisodeCharactersResponseData, DetailVars>({
    query: ALL_EPISODE_CHARACTERS,
    variables: { id },
  });

  return {
    props: {
      characters: data.episode.characters,
    },
  };
};

const EpisodeCharactersPage: NextPage<EpisodeCharactersProps> = ({ characters }) => {
  return (
    <Stack alignItems="center" sx={{ my: 2 }}>
      <Typography
        variant="h2"
        component="h1"
        align="center"
        sx={{ fontFamily: "titleFontFamily", my: 4, fontWeight: "bold" }}
      >
        Episode&apos;s Characters
      </Typography>
      <CharacterContainer characters={characters} />
    </Stack>
  );
};

export default EpisodeCharactersPage;
