import About from "./components/About";
import Awwards from "./components/Awwards";
import Benefits from "./components/Benefit";
import Header from "./components/Header";
import How from "./components/How";
import Info from "./components/Info";
import Landing from "./components/Landing";
import "./scss/styles.scss";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  const options = {
    smooth: true,
    touchMultiplier: 4,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });

  return (
    <>
      {loading ? <Loader /> : null}
      <LocomotiveScrollProvider options={options} containerRef={containerRef}>
        <main data-scroll-container ref={containerRef}>
          <Header />
          <Awwards />
          <Landing />
          <About />
          <How />
          <Info />
          <Benefits />
          <Reviews />
          <Footer />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
