// src/theme.js
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00796B", // teal/green-blue primary
    },
    secondary: {
      main: "#26A69A", // light green accent
    },
    background: {
      default: "#FFFFFF", // clean white
      paper: "#F5F5F5",   // subtle light grey
    },
    text: {
      primary: "#004D40", // dark green text
      secondary: "#00796B", // lighter green text
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#26A69A", // accent green in dark
    },
    secondary: {
      main: "#00796B", // main brand color inverted
    },
    background: {
      default: "#00332E", // very dark teal
      paper: "#004D40",   // dark green
    },
    text: {
      primary: "#E0F2F1", // light teal text
      secondary: "#B2DFDB", // softer accent
    },
  },
});
