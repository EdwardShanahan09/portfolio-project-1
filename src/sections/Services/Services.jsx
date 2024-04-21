import "./Services.scss";
import serviceImg1 from "../../assets/imgs/service-1.svg";
import serviceImg2 from "../../assets/imgs/service-2.svg";
import serviceImg3 from "../../assets/imgs/service-3.svg";
import serviceImg4 from "../../assets/imgs/service-4.svg";
import ServiceCard from "../../components/ServicesCard/ServiceCard";

const Services = () => {
  const services = [
    {
      img: serviceImg1,
      title: "Photography Sessions",
      description:
        "Trust us to capture your cherished moments. Our skilled photographers excel in landscapes, portraits, and more, crafting timeless masterpieces with every click.",
    },
    {
      img: serviceImg2,
      title: "Image Editing and Retouching",
      description:
        "Elevate your visuals with our meticulous editing. From subtle enhancements to dramatic transformations, we polish every image to radiate clarity and vibrancy.",
    },
    {
      img: serviceImg3,
      title: "Event Coverage",
      description:
        "Let us document your special occasions with finesse. From weddings to galas, our unobtrusive approach ensures every moment is captured professionally and energetically.",
    },
    {
      img: serviceImg4,
      title: "Portrait Sessions",
      description:
        "Shine in our captivating portraits. From professional headshots to family portraits, we capture your essence with authenticity and flair.",
    },
  ];
  return (
    <section id="services" className="services">
      <div className="services__text">
        <h2>What I Offer</h2>

        <p className="services__title">
          Tailored solutions for your unique needs. From professional head shots
          to family portraits, let's create lasting memories together.
        </p>
      </div>

      <div className="services__cards">
        {services.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
