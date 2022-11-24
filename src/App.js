import About from "./components/About";
import Awwards from "./components/Awwards";
import Benefits from "./components/Benefit";
import Header from "./components/Header";
import How from "./components/How";
import Info from "./components/Info";
import Landing from "./components/Landing";
import "./scss/styles.scss";

function App() {
  return (
    <>
      <Header />
      <Awwards />
      <Landing />
      <About />
      <How />
      <Info />
      <Benefits />
    </>
  );
}

export default App;
