import { Box, ThemeProvider } from "@mui/system";
import React from "react";
import { createTheme } from "@mui/material/styles";
import AppBar from "./Components/AppBar";
import Main from "./Components/Main";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#cdcdcd",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            background: "aliceBlue",
            marginTop: "-10px",
            marginLeft: "-10px",
            marginRight: "-8px",
            marginBottom: "-10px",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <AppBar />
          <Main />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
