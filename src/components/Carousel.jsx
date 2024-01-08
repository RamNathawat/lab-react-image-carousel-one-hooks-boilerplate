import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      <img
        src={images[currentSlide].img}
        alt={images[currentSlide].title}
        className="carousel-img"
      />
      <button className="carousel-buttons left" onClick={prevSlide}>
        <ArrowBackIosIcon />
      </button>
      <button className="carousel-buttons right" onClick={nextSlide}>
        <ArrowForwardIosIcon />
      </button>
      <div className="carousel-text">
        <h1>{images[currentSlide].title}</h1>
        <p>{images[currentSlide].subtitle}</p>
      </div>
    </div>
  );
}

export default Carousel;
