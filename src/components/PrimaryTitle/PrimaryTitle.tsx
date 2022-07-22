import { styled } from "@mui/material/styles";

import Typography, { TypographyProps } from "@mui/material/Typography";

const PrimaryTitle = styled((props: TypographyProps) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <Typography variant="h2" component="h1" align="center" {...props} />
))<TypographyProps>(({ theme }) => ({
  fontFamily: theme.typography.titleFontFamily,
  fontWeight: "bold",
  p: theme.spacing(1),
}));

export default PrimaryTitle;
