import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Container from "./components/Container/Container";
import About from "./sections/About/About";
import Serrvices from "./sections/Services/Services";
import Portfolio from "./sections/portfolio/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <main>
        <Container>
          <About />
          <Serrvices />
          <Portfolio />
        </Container>
      </main>
    </>
  );
}

export default App;
