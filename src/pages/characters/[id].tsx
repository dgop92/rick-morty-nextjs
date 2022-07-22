import { GET_CHARACTER } from "@features/characters/queries";
import {
  Character,
  DetailVars,
  GetCharacterResponseData,
} from "@features/characters/types";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { CharacterCard } from "@features/characters/components/CharacterCard";
import { CenteredBox } from "@components/CenteredBox";
import { apolloClient } from "@/lib/apolloClient";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface CharacterDetailProps {
  character: Character;
}

export const getStaticPaths: GetStaticPaths = () => {
  const mainCharactersIds = [1, 2, 3, 4, 5];
  const paths = mainCharactersIds.map((id) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CharacterDetailProps, IParams> = async (
  ctx
) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { id } = ctx.params!;

  const { data } = await apolloClient.query<GetCharacterResponseData, DetailVars>({
    query: GET_CHARACTER,
    variables: { id },
  });

  return {
    props: { character: data.character },
  };
};

const CharacterDetail: NextPage<CharacterDetailProps> = ({ character }) => {
  return (
    <CenteredBox sx={{ width: "100vw", height: "100vh" }}>
      <CharacterCard {...character} />
    </CenteredBox>
  );
};

export default CharacterDetail;
