import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppRoutes } from "../constants";

export default function NavigationBar() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    //retrive username from localstorage and set to state
    const name = JSON.parse(localStorage.getItem("auth") as string).name;
    setUserName(name);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate(AppRoutes.home);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" style={{ background: "#0284C7" }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            fontSize={{
              lg: 20,
              md: 20,
              sm: 15,
              xs: 12,
            }}
            sx={{
              fontWeight: "bold",
            }}
          >
            GrowMeOrganic
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Typography
              fontSize={{
                lg: 15,
                md: 15,
                sm: 12,
                xs: 10,
              }}
              sx={{
                fontWeight: "bold",
              }}
            >
              Hello, {userName}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              disableElevation
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
