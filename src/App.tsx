import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeOptions } from "./lib/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Toaster } from "react-hot-toast";
import { ToastStyles } from "./constants";

export default function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <Toaster
        toastOptions={{
          style: ToastStyles,
        }}
      />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
