import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Container from "./components/Container/Container";
import About from "./sections/About/About";
import Serrvices from "./sections/Services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Testimonials from "./sections/Testimonials/Testimonials";

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
          <Testimonials />
        </Container>
      </main>
    </>
  );
}

export default App;
