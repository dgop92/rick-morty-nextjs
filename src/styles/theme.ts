/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createTheme, alpha } from "@mui/material";
// eslint-disable-next-line import/no-extraneous-dependencies
import { SxProps } from "@mui/system";

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    header: {
      main: string;
      secondary: string;
    };
  }
  interface Palette {
    header: {
      main: string;
      secondary: string;
    };
  }
}

declare module "@mui/material/styles/createTypography" {
  interface FontStyle {
    titleFontFamily: string;
  }
}

// TODO: dark and light colors are assumptions, change with the real one
export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#12294D",
      light: "#1C4078",
      dark: "#0C203F",
      contrastText: "#FFFFFC",
    },
    background: {
      default: "#FCFCFC",
      paper: "#fff",
    },
    text: {
      primary: "#323232",
      secondary: "#969696",
    },
    header: {
      main: "#011627",
      secondary: "#152C5B",
    },
  },
  typography: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    titleFontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
  },

  // Disable some google default styles

  components: {
    MuiButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
        // @ts-ignore
        containedPrimary: ({ theme }) => ({
          "&:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.85),
          },
        }),
        // @ts-ignore
        containedSecondary: ({ theme }) => ({
          "&:hover": {
            backgroundColor: alpha(theme.palette.secondary.main, 0.85),
          },
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        // @ts-ignore
        colorPrimary: ({ theme }) => ({
          "&:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.85),
          },
        }),
        // @ts-ignore
        colorSecondary: ({ theme }) => ({
          "&:hover": {
            backgroundColor: alpha(theme.palette.secondary.main, 0.85),
          },
        }),
      },
    },
  },
});

export type MuiTheme = typeof muiTheme;
export type SxThemeProps = SxProps<MuiTheme>;
