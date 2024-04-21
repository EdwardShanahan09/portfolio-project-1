import { useState, useEffect } from "react";
import "./Testimonials.scss";
const Testimonial = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = props.testimonials;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 9000); // Change slide every 7 seconds

    return () => clearInterval(intervalId);
  }, [testimonials.length]);

  return (
    <div className="testimonial">
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${testimonials[currentIndex].image}) no-repeat center/cover`,
        }}
        className="testimonial__background"
      >
        <div className="testimonial__card">
          <img
            src={testimonials[currentIndex].avatar}
            alt={testimonials[currentIndex].name}
          />
          <p>{testimonials[currentIndex].description}</p>

          <h3>{testimonials[currentIndex].name}</h3>
        </div>
      </div>

      <div className="testimonial__tabs">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`testimonial__tab ${
              index === currentIndex ? "testimonial__tab--active" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
