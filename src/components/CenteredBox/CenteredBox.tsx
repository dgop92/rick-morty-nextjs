import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";

const CenteredBox = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default CenteredBox;
