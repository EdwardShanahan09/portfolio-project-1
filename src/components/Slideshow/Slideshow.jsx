import { useState, useEffect } from "react";
import "./Slideshow.scss";

const Slideshow = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = props.images;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

export default Slideshow;
