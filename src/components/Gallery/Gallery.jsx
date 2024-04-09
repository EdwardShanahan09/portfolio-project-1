import { useState } from "react";

import "./Gallery.scss";

const Gallery = (props) => {
  const [filter, setFilter] = useState("");
  const images = props.images;

  const filteredImages = images.filter((image) =>
    image.category.includes(filter)
  );

  return (
    <div className="gallery">
      <div className="gallery__tab-buttons">
        <button onClick={() => setFilter("")} className="gallery__tab-button">
          All
        </button>
        <button
          onClick={() => setFilter("weddings")}
          className="gallery__tab-button"
        >
          Weddings
        </button>
        <button
          onClick={() => setFilter("portraits")}
          className="gallery__tab-button"
        >
          Portraits
        </button>
        <button
          onClick={() => setFilter("landcapes")}
          className="gallery__tab-button"
          className="gallery__tab-button"
        >
          Landcapes
        </button>
      </div>

      <div className="gallery__images">
        {filteredImages.map((image, index) => (
          <div>
            <img src={image.url} alt={image.alt} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
