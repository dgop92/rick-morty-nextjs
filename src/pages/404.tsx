import { PrimaryButtonLink } from "@components/Button";
import { CenteredBox } from "@components/CenteredBox";
import { PrimaryTitle } from "@components/PrimaryTitle";
import { NextPage } from "next";
import Link from "next/link";

const Error404: NextPage = () => {
  return (
    <CenteredBox sx={{ width: "100vw", height: "100vh", flexDirection: "column" }}>
      <PrimaryTitle>Page not found</PrimaryTitle>
      <Link href="/" passHref>
        <PrimaryButtonLink sx={{ mt: 4 }}>Go Home</PrimaryButtonLink>
      </Link>
    </CenteredBox>
  );
};

export default Error404;
