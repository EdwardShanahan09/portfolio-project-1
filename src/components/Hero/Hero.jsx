import "./Hero.scss";
import Container from "../Container/Container";
import Button from "../Button/Button";
const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <h1>Ellie Mae Photography</h1>

        <p className="hero__title">
          I am a professional photographer who captures your dreams.
        </p>

        <Button text="See My Work" />
      </Container>
    </div>
  );
};

export default Hero;
