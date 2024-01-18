import { Box, Typography } from "@mui/material";

const ErrorElement = ({ message }: { message: string }) => {
  return (
    <Box
      sx={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Typography variant="body2" component="p" color={"secondary"}>
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorElement;
