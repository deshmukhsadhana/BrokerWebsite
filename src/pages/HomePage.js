
import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeroSection from "../component/HeroSection";
import { Container } from "@mui/system";
import PropertySection from "../component/PropertySection";
import AboutHeroSection from "../component/AboutHeroSection";
import CallToAction from "../component/CallToAction";
import LayOut from "../component/LayOut";
// import { Grid } from "@mui/material";
 const theme = createTheme({
  palette: {
    primary: {
      main: '#210d42',
    },
  
  },
});

const Home = () => {
  return (
    <LayOut>
      <ThemeProvider theme={theme}>
      <Container sx={{ m: "0" }}>
        <HeroSection />
        <PropertySection />
        <AboutHeroSection />
        <CallToAction />
      </Container>
      </ThemeProvider>
    </LayOut>
  )
}
export default Home;