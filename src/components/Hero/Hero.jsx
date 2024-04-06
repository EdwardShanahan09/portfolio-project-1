import "./Hero.scss";
import Container from "../Container/Container";
import Button from "../Button/Button";
import Slideshow from "../Slideshow/Slideshow";

const Hero = () => {
  const images = [
    "https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-rocks-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/19107832/pexels-photo-19107832/free-photo-of-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1123567/pexels-photo-1123567.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/1819784/pexels-photo-1819784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

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
    </div>
  );
};

export default Hero;
