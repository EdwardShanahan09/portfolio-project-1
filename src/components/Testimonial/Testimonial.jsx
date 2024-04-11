import { useState, useEffect } from "react";

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
    <div>
      <div
        style={{
          background: `url(${testimonials[currentIndex].image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="testimonial__background"
      >
        <div className="testimonial__text">
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
            onClick={() => setCurrentIndex(index)}
            className="testimonial__tab"
          >
            {index}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
