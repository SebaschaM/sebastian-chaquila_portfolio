import { Box, Typography } from "@mui/material";

import { Navbar, AboutMe } from "../components/index";

const styleHomeLayout = {
  backgroundColor: "#18003E",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "100vh",
  overflow: "hidden",
};

function Home() {
  return (
    <Box sx={styleHomeLayout}>
      <Navbar />
      <Box
        sx={{
          marginTop: "3rem",
        }}
      >
        <Box
          sx={{
            alignItems: "flex-start",
          }}
        >
          <AboutMe />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
