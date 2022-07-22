import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import React from "react";

// eslint-disable-next-line react/display-name
export const BasePrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <Button variant="contained" color="primary" ref={ref} {...props} />;
  }
);

export const PrimaryButton = styled(BasePrimaryButton)<ButtonProps>(({ theme }) => ({
  fontSize: "1rem",
  padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
})) as typeof Button;

// eslint-disable-next-line react/display-name
export const PrimaryButtonLink = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ href, ...props }, ref) => {
    return <PrimaryButton href={href} {...props} ref={ref} />;
  }
);
