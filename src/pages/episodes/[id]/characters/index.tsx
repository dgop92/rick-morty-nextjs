import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import {
  Character,
  EpisodeCharactersResponseData,
  EpisodeCharactersVars,
} from "../../../../features/characters/types";
// eslint-disable-next-line max-len
import { CharacterCard } from "../../../../features/characters/components/CharacterCard";
import { apolloClient } from "../../../../lib/apolloClient";
import { ALL_EPISODE_CHARACTERS } from "../../../../features/characters/queries";

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

  const { data } = await apolloClient.query<
    EpisodeCharactersResponseData,
    EpisodeCharactersVars
  >({
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
      <Container
        maxWidth="xl"
        sx={{
          width: "95vw",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "baseline",
          gap: 2,
          mt: 4,
        }}
      >
        {characters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </Container>
    </Stack>
  );
};

export default EpisodeCharactersPage;
