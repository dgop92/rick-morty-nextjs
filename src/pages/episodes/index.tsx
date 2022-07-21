import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import type { NextPage } from "next";
import ClientOnly from "../../components/ClientOnly";
import EpisodesConent from "../../features/episodes/EpisodesConent";

/* https://blog.logrocket.com/why-use-next-js-apollo/#client-side-rendering-csr */

const EpisodesPage: NextPage = () => {
  return (
    <Stack alignItems="center" sx={{ my: 2 }}>
      <Typography
        variant="h2"
        component="h1"
        align="center"
        sx={{ fontFamily: "titleFontFamily", my: 4, fontWeight: "bold" }}
      >
        Episodes
      </Typography>
      <ClientOnly>
        <EpisodesConent />
      </ClientOnly>
    </Stack>
  );
};

export default EpisodesPage;
