import { useState, useEffect } from "react";

const Slideshow = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = props.images;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <div className="buttons">
        {images.map((_, index) => (
          <button key={index} onClick={() => goToSlide(index)}>
            {`Slide ${index + 1}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
