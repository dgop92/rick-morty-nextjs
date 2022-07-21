import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button, { ButtonProps } from "@mui/material/Button";
import type { NextPage } from "next";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import React from "react";
import { BasePrimaryButton } from "../components/buttons";

const PrimaryButton = styled(BasePrimaryButton)<ButtonProps>(({ theme }) => ({
  fontSize: "1rem",
  padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
})) as typeof Button;

// eslint-disable-next-line react/display-name
const PrimaryButtonLink = React.forwardRef<any, ButtonProps>(
  ({ href, ...props }, ref) => {
    return <PrimaryButton href={href} {...props} ref={ref} />;
  }
);

const Home: NextPage = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="100vh"
    >
      <Typography
        variant="h2"
        component="h1"
        align="center"
        sx={{ fontFamily: "titleFontFamily", fontWeight: "bold", p: 1 }}
      >
        Rick and Morty GraphQL
      </Typography>
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
