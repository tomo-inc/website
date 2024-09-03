import React, { useEffect, useState } from "react";
import "./infiniteLooper.css";

const images = [
  "/images/carousel1.svg",
  "/images/carousel2.svg",
  "/images/carousel3.svg",
  "/images/carousel4.svg",
];

const Carousel = () => {
  return (
    <div className="scroll-container w-[300px] md:w-[400px] h-[700px] md:h-[900px]">
      <div className="scroll-content gap-8">
        {images.concat(images).map((image, index) => (
          <div key={index} className="scroll-item">
            <img
              src={image}
              alt={`Scrolling content ${index}`}
              className="scroll-image"
            />
          </div>
        ))}
      </div>
      <div
        className=" w-[300px] md:w-[400px] h-[186px] md:h-[386px] absolute z-20 top-0"
        style={{
          backgroundImage:
            "linear-gradient(360deg, rgba(18, 18, 18, 0.00) 0%, #121212 88.49%)",
        }}
      ></div>

      <div
        className=" w-[300px] md:w-[400px] h-[186px] md:h-[386px] absolute z-20 bottom-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(18, 18, 18, 0.00) 0%, #121212 88.49%)",
        }}
      ></div>
    </div>
  );
};

export default Carousel;
