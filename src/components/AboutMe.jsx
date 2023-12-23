import { Box, Typography } from "@mui/material";
import { TypingTextCycle } from "../components/index";
import pdfCVSebas from "../assets/CVSebas.pdf";
import styles from "../components/AboutMe.module.css";

const styleAboutMe = {
  display: "flex",
};

const download = (url) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = "CVSebas.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const AboutMe = () => (
  <Box
    sx={{
      ...styleAboutMe,
      alignItems: "center",
      justifyContent: "space-around",
      //justifyContent: "space-between",
      position: "relative",
    }}
  >
    <Box
      sx={{
        ...styleAboutMe,
        flexDirection: "column",
        width: "40%",
      }}
    >
      <Typography variant="h3">Hi there! 👋</Typography>
      <Typography variant="h1" sx={{ color: "#ffffff" }}>
        Sebastian Chaquila
      </Typography>
      <TypingTextCycle />
      <Typography variant="h4" sx={{ color: "#fff", marginTop: "2.5rem" }}>
        Web developer from Peru, passionate about creating functional and
        attractive websites that follow best practices. Always looking for new
        technologies and creative solutions to challenges.
      </Typography>

      <button
        onClick={() => {
          //Cuando le de clic me descargue el CV
          download(pdfCVSebas);
        }}
        className={styles.buttonDownloadCV}
      >
        Download CV
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </Box>

    <img
      src="https://res.cloudinary.com/dvzjgzqbn/image/upload/v1693103193/Portafolio/Photo_SebasCha_x1ireg.png"
      alt="photo_sebascha"
      style={{
        width: "30%",
        /*
        position: "absolute",
        right: "0",
        width: "30%",
        zIndex: "100000000",*/
        //FALTA COLOCARME UNA FOTO PROPIA
      }}
    />
  </Box>
);

export default AboutMe;
