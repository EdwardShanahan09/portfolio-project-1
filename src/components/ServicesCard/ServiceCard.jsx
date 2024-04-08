import "./ServiceCard.scss";

const ServiceCard = ({ img, title, description }) => {
  return (
    <div className="service__card">
      <img src={img} alt={title} />

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
