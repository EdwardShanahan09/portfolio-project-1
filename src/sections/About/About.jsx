import "./About.scss";
import aboutImg1 from "../../assets/imgs/about-1.jpg";
import aboutImg2 from "../../assets/imgs/about-2.jpg";
import aboutImg3 from "../../assets/imgs/about-3.jpg";
import aboutImg4 from "../../assets/imgs/about-4.jpg";

const About = () => {
  const aboutImages = [aboutImg1, aboutImg2, aboutImg3, aboutImg4];
  return (
    <section id="about" className="about">
      <div className="about__img">
        {aboutImages.map((img, index) => {
          return <img src={img} alt="Ellie Mae" key={index} />;
        })}
      </div>
      <div className="about__text">
        <h2>A Little About Me</h2>

        <p>
          Hi, my name is Ellie Mae, and I'm a professional photographer from
          Clare. I have travelled all around Ireland to shoot weddings, family
          portraits, events, and festivals.
        </p>

        <p>
          I have worked in different agencies, but now I'm freelancing. Since
          freelancing I have gained hundreds of satisfied clients.
        </p>

        <p>
          With my experience and passion for photography, I am very confident
          you will be happy with my work.
        </p>
      </div>
    </section>
  );
};

export default About;
