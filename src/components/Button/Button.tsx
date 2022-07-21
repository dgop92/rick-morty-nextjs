import Button, { ButtonProps } from "@mui/material/Button";
import React from "react";

// eslint-disable-next-line react/display-name
export const BasePrimaryButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, ref) => {
  return <Button variant="contained" color="primary" ref={ref} {...props} />;
});
