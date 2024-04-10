import "./Testimonials.scss";
import Testimonial from "../../components/Testimonial/Testimonial";
const Testimonials = () => {
  const testimonials = [
    {
      image: "",
      avatar: "",
      description:
        "Ellie Mae Photography exceeded my expectations! Ellie's attention to detail and ability to capture genuine emotions in her photos truly sets her apart. I couldn't be happier with the beautiful portraits she created for my family.",
      name: "- Sarah W.",
    },
    {
      image: "",
      avatar: "",
      description:
        "Ellie's talent behind the lens is remarkable. She has a unique ability to make you feel comfortable and natural, resulting in the most authentic and beautiful photos. I'm grateful to have had Ellie capture such precious moments for my family.",
      name: "- Mike H.",
    },
    {
      image: "",
      avatar: "",
      description:
        "Ellie's talent behind the lens is remarkable. She has a unique ability to make you feel comfortable and natural, resulting in the most authentic and beautiful photos. I'm grateful to have had Ellie capture such precious moments for my family.",
      name: "- Emily L.",
    },
    {
      image: "",
      avatar: "",
      description:
        "Ellie Mae Photography made our special day even more memorable. From the initial consultation to the final delivery of our wedding photos, Ellie's professionalism and passion for her craft were evident. Her ability to capture the essence of our love story is something we'll cherish forever.",
      name: "- Jack and Lauren D.",
    },
  ];
  return (
    <div className="testimonials">
      <h2>Testimonials From Previous Clients</h2>

      <div className="testimonials__list">
        <Testimonial testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Testimonials;
