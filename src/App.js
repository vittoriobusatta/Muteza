import About from "./components/About";
import Awwards from "./components/Awwards";
import Header from "./components/Header";
import Landing from "./components/Landing";
import "./scss/styles.scss";

function App() {
  return (
    <>
      <Header />
      <Awwards />
      <Landing />
      <About />
    </>
  );
}

export default App;
