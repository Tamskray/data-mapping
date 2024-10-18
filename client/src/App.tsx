import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/MainSection/MainSection";

const drawerWidth = 240;

function App() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />

          <MainSection />
        </Box>
      </Box>
    </>
  );
}

export default App;
