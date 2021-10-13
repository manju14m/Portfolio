import "App.css";
import Particles from "react-particles-js";
import { SnackbarProvider } from "notistack";

import Welcome from "components/Welcome";
import Hire from "components/HireMe";
import Skills from "components/Skills";
import Project from "components/Projects";
import Contact from "components/Contact";
import Footer from "components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react"

function App() {

  useEffect(() => {
    AOS.init({
      once: true,
      duration:1500,
    });
  }, []);

  return (
    <SnackbarProvider
      autoHideDuration={3000}
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <div className="main">
        <Particles
          params={{
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                },
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 4,
                  color: "white",
                },
              },
            },
          }}
        />
        <Welcome />
        <Skills />
        <Hire />
        <Project />
        <Contact />
        <Footer />
      </div>
    </SnackbarProvider>
  );
}

export default App;
