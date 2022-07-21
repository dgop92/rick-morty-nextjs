import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface CharacterDetailProps {
  characterId: string;
}

export const getStaticPaths: GetStaticPaths = (ctx) => {
  const mainCharactersIds = [1, 2, 3, 4, 5];
  const paths = mainCharactersIds.map((id) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  CharacterDetailProps,
  IParams
> = async (ctx) => {
  const { id } = ctx.params!;

  return {
    props: { characterId: `${id}-weey-procced` },
  };
};

const CharacterDetail: NextPage<CharacterDetailProps> = ({ characterId }) => {
  return (
    <div>
      <p>the id is {characterId}</p>
    </div>
  );
};

export default CharacterDetail;
