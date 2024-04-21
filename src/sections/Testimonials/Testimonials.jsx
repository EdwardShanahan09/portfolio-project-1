import "./Testimonials.scss";
import Testimonial from "../../components/Testimonial/Testimonial";
import testimonialImage1 from "../../assets/imgs/testimonial-1.jpg";
import testimonialImage2 from "../../assets/imgs/testimonial-2.jpg";
import testimonialImage3 from "../../assets/imgs/testimonial-3.jpg";
import testimonialImage4 from "../../assets/imgs/testimonial-4.jpg";
import avatarImage1 from "../../assets/imgs/avatar-1.jpg";
import avatarImage2 from "../../assets/imgs/avatar-2.jpg";
import avatarImage3 from "../../assets/imgs/avatar-3.jpg";
import avatarImage4 from "../../assets/imgs/avatar-4.jpg";
const Testimonials = () => {
  const testimonials = [
    {
      image: testimonialImage1,
      avatar: avatarImage1,
      description:
        "Ellie Mae Photography surpassed expectations with detailed, emotive portraits.",
      name: "- Sarah W.",
    },
    {
      image: testimonialImage2,
      avatar: avatarImage2,
      description:
        "Working with Ellie was fantastic. Her professionalism and creativity made everything smooth. The images exceeded my hopes. Highly recommend Ellie Mae Photography for top-notch quality and service.",
      name: "- Mike H.",
    },
    {
      image: testimonialImage3,
      avatar: avatarImage3,
      description:
        "Ellie's talent behind the lens is remarkable. She makes you feel comfortable, resulting in authentic, beautiful photos. Grateful for Ellie capturing precious moments for my family.",
      name: "- Emily L.",
    },
    {
      image: testimonialImage4,
      avatar: avatarImage4,
      description:
        "Ellie Mae Photography made our day unforgettable. From consultation to delivery, Ellie's professionalism and passion shone through. Her ability to capture our love story is cherished forever.",
      name: "- Jack and Lauren D.",
    },
  ];
  return (
    <div className="testimonials">
      <div className="testimonials__list">
        <Testimonial testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Testimonials;
