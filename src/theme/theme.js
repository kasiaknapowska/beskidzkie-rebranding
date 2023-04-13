import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2d3d8a",
    },
    secondary: {
      main: "#ffb922",
    },
  },
  status: {
    danger: "#d32f2f",
  },
  typography: {
    h1: {
      fontSize: 24,
      fontFamily: "Roboto, sans-serif",
      fontWeight: 600,
      textAlign: "center",
      textTransform: "uppercase",
      lineHeight: 1.6
    },
    subtitle1: {
      fontSize: 18,
      fontFamily: "Roboto, sans-serif",
      fontWeight: 600,
      textTransform: "uppercase",
    },
    subtitle2: {
      fontSize: 18,
      fontFamily: "Roboto, sans-serif",
      fontWeight: 600,
    },
    small: {
      fontSize: 14,
      fontFamily: "Roboto, sans-serif",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "14px",
        },
      },
    },
  },
});
