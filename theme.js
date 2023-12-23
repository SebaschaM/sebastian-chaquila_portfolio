import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#64B5F6", // Azul claro
    },
    secondary: {
      main: "#FFD54F", // Amarillo
    },
    background: {
      default: "#121212", // Fondo oscuro
      paper: "#1E1E1E", // Fondo de las tarjetas y elementos
    },
    text: {
      primary: "#FFFFFF", // Texto principal en blanco
      secondary: "#B0BEC5", // Texto secundario en gris claro
    },
    error: {
      main: "rgba(255, 255, 255, 0.7)", // Rojo
    },
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: "4.5rem",
      fontWeight: 700,
      color: "#00aee2",
    },
    h2: {
      fontSize: "1.4rem",
      fontWeight: 600,
      color: "#ffffff",
    },
    h3: {
      fontSize: "1.6rem",
      fontWeight: 500,
      color: "#CCCCCC",
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: 500,
      color: "#ffffff",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 500,
      color: "#ffffff",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
  },
  // Text
});

export default theme;
