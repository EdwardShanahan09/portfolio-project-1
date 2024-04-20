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
        "Ellie Mae Photography exceeded my expectations! Ellie's attention to detail and ability to capture genuine emotions in her photos truly sets her apart. I couldn't be happier with the beautiful portraits she created for my family.",
      name: "- Sarah W.",
    },
    {
      image: testimonialImage2,
      avatar: avatarImage2,
      description:
        "Working with Ellie was an absolute pleasure. Her professionalism and creativity made the entire process seamless. The images she produced were stunning and exceeded all my hopes. I highly recommend Ellie Mae Photography to anyone looking for top-notch quality and service.",
      name: "- Mike H.",
    },
    {
      image: testimonialImage3,
      avatar: avatarImage3,
      description:
        "Ellie's talent behind the lens is remarkable. She has a unique ability to make you feel comfortable and natural, resulting in the most authentic and beautiful photos. I'm grateful to have had Ellie capture such precious moments for my family",
      name: "- Emily L.",
    },
    {
      image: testimonialImage4,
      avatar: avatarImage4,
      description:
        "Ellie Mae Photography made our special day even more memorable. From the initial consultation to the final delivery of our wedding photos, Ellie's professionalism and passion for her craft were evident. Her ability to capture the essence of our love story is something we'll cherish forever.",
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
