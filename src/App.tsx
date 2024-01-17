import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeOptions } from "./lib/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

export default function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
