import "./infiniteLooper.css";
import { Marquee } from "@devnomic/marquee";
import "./carousel.css";

const images = ["/images/carousel.png"];

const Carousel = () => {
  return (
    <Marquee
      fade={true}
      direction="up"
      reverse={false}
      pauseOnHover={false}
      className=" mdl:max-h-[900px] max-h-[700px] max-w-[400px]" // pass class to change gap or speed
      innerClassName="" // pass class to change gap or speed
    >
      {images.concat(images).map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Scrolling content ${index}`} />
        </div>
      ))}
    </Marquee>
  );
};

export default Carousel;
