import Stack from "@mui/material/Stack";
import { PrimaryTitle } from "@components/PrimaryTitle";
import type { NextPage } from "next";
import { ClientOnly } from "../../components/ClientOnly";
import EpisodesConent from "../../features/episodes/EpisodesConent";

const EpisodesPage: NextPage = () => {
  return (
    <Stack alignItems="center" sx={{ my: 2 }}>
      <PrimaryTitle>Episodes</PrimaryTitle>
      <ClientOnly>
        <EpisodesConent />
      </ClientOnly>
    </Stack>
  );
};

export default EpisodesPage;
