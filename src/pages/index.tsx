import { PrimaryButtonLink } from "@components/Button";
import { PrimaryTitle } from "@components/PrimaryTitle";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Stack alignItems="center" justifyContent="center" width="100vw" height="100vh">
      <PrimaryTitle>Rick and Morty GraphQL</PrimaryTitle>
      <Typography
        variant="h5"
        align="center"
        sx={{ fontFamily: "titleFontFamily", p: 1 }}
      >
        a small project for learning Next Js and GraphQL Basics
      </Typography>
      <Stack direction="row" spacing={4} mt={6}>
        <Link href="/episodes" passHref>
          <PrimaryButtonLink>Episodes</PrimaryButtonLink>
        </Link>
        <Link href="/characters" passHref>
          <PrimaryButtonLink>Main characters</PrimaryButtonLink>
        </Link>
        <Link href="/characters/1" passHref>
          <PrimaryButtonLink>Rick info</PrimaryButtonLink>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Home;
