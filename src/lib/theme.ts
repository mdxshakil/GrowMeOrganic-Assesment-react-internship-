import { ThemeOptions, createTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0284C7",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#0E1527",
    },
  },
});
