import "./Portfolio.scss";
import Gallery from "../../components/Gallery/Gallery";
import galleryImage8 from "../../assets/imgs/gallery-8.jpg";
import galleryImage1 from "../../assets/imgs/gallery-1.jpg";
import galleryImage5 from "../../assets/imgs/gallery-5.jpg";
import galleryImage10 from "../../assets/imgs/gallery-10.jpg";
import galleryImage6 from "../../assets/imgs/gallery-6.jpg";
import galleryImage11 from "../../assets/imgs/gallery-11.jpg";
import galleryImage3 from "../../assets/imgs/gallery-3.jpg";
import galleryImage7 from "../../assets/imgs/gallery-7.jpg";
import galleryImage12 from "../../assets/imgs/gallery-12.jpg";
import galleryImage9 from "../../assets/imgs/gallery-9.jpg";
import galleryImage4 from "../../assets/imgs/gallery-4.jpg";
import galleryImage2 from "../../assets/imgs/gallery-2.jpg";

const Portfolio = () => {
  const images = [
    {
      url: galleryImage8,
      title: "Portrait",
      category: "portraits",
    },
    {
      url: galleryImage1,
      title: "",
      category: "weddings",
    },
    {
      url: galleryImage5,
      title: "Wedding",
      category: "weddings",
    },
    {
      url: galleryImage10,
      title: "landcapes",
      category: "landcapes",
    },
    {
      url: galleryImage6,
      title: "Portrait",
      category: "portraits",
    },
    {
      url: galleryImage11,
      title: "Landcapes",
      category: "landcapes",
    },
    {
      url: galleryImage3,
      title: "Weddings",
      category: "weddings",
    },
    {
      url: galleryImage7,
      title: "Portrait",
      category: "portraits",
    },
    {
      url: galleryImage12,
      title: "Landcapes",
      category: "landcapes",
    },
    {
      url: galleryImage9,
      title: "Portrait",
      category: "portraits",
    },
    {
      url: galleryImage4,
      title: "Wedding",
      category: "weddings",
    },
    {
      url: galleryImage2,
      title: "Wedding",
      category: "weddings",
    },
  ];
  return (
    <section id="portfolio" className="portfolio">
      <h2>My Latest Work</h2>

      <Gallery images={images} />
    </section>
  );
};

export default Portfolio;
