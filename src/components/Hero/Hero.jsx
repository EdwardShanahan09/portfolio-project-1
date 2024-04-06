import "./Hero.scss";
import Container from "../Container/Container";
import Button from "../Button/Button";
import Slideshow from "../Slideshow/Slideshow";
import slideshow1 from "../../assets/imgs/slideshow-1.jpg";
import slideshow2 from "../../assets/imgs/slideshow-2.jpg";
import slideshow3 from "../../assets/imgs/slideshow-3.jpg";
import slideshow4 from "../../assets/imgs/slideshow-4.jpg";

const Hero = () => {
  const images = [slideshow1, slideshow2, slideshow3, slideshow4];

  return (
    <div className="hero">
      <div className="hero__text">
        <Container>
          <h1>Ellie Mae Photography</h1>

          <p className="hero__title">
            I am a professional photographer who captures your dreams.
          </p>

          <Button text="See My Work" />
        </Container>
      </div>

      <div className="hero__img">
        <Slideshow images={images} />
      </div>

      <div className="hero__overlay"></div>
    </div>
  );
};

export default Hero;
