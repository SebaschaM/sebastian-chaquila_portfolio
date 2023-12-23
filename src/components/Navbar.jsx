import { Button, Toolbar, Typography, Box } from "@mui/material";
import { SiCodersrank } from "react-icons/si";

const toolBarStyle = {
  display: "flex",
  position: "sticky",
  justifyContent: "space-between",
  backgroundColor: "rgba(255, 255, 255, 0.2)" /* Fondo con transparencia */,
  backdropFilter: "blur(1rem)" /* Efecto de desenfoque */,
  zIndex: 999999,
  borderRadius: "0 0 1.875rem 1.875rem",
  height: "6rem",
  alignItems: "center",
};

const textToolbarStyle = {
  "&:hover": {
    bgcolor: "#00A86B", // Set background color to transparent on hover
  },
};

const NavBar = () => {
  return (
    <>
      <Toolbar sx={toolBarStyle}>
        <SiCodersrank
          style={{
            fontSize: "3.5rem",
            color: "#fff",
            borderRadius: "0 0 50% 50",
          }}
        />

        <Box
          sx={{
            display: "flex",
            columnGap: "1.2rem",
          }}
        >
          <Button sx={textToolbarStyle}>
            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
              HOME
            </Typography>
          </Button>
          <Button sx={textToolbarStyle}>
            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
              PROJECTS
            </Typography>
          </Button>
          <Button sx={textToolbarStyle}>
            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
              SKILLS
            </Typography>
          </Button>
          <Button sx={textToolbarStyle}>
            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
              CONTACT
            </Typography>
          </Button>
        </Box>
        <Box>
          {/* HACER DOS BOTONES PARA CAMBIAR DE IDIOMNA LA PAGINA, SOLO HAY EN INGLES / ESPAÑOL  */}
          <Button sx={textToolbarStyle}>
            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
              EN
            </Typography>
          </Button>

          <Button sx={textToolbarStyle}>
            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
              ES
            </Typography>
          </Button>
        </Box>
      </Toolbar>
    </>
  );
};

export default NavBar;
