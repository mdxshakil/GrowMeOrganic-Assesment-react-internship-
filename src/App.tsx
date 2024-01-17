import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeOptions } from "./lib/theme";
import SignIn from "./pages/SignIn";

export default function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <SignIn />
    </ThemeProvider>
  );
}
