import { useState, useEffect } from "react";

const Testimonial = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = props.testimonials;

  console.log(testimonials);
  return (
    <div style={{ background: "pink" }} className="testimonial">
      <img
        src={testimonials[currentIndex].image}
        alt={testimonials[currentIndex].name}
      />
      <p>{testimonials[currentIndex].description}</p>

      <h3>{testimonials[currentIndex].name}</h3>
    </div>
  );
};

export default Testimonial;
