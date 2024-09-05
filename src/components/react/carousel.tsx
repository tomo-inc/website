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

// <div className="scroll-container w-[300px] md:w-[400px] h-[700px] md:h-[900px]">
//   <div className="scroll-content gap-3 md:gap-8">
//     {images.concat(images).map((image, index) => (
//       <div key={index} className="scroll-item">
//         <img
//           src={image}
//           alt={`Scrolling content ${index}`}
//           className="scroll-image"
//         />
//       </div>
//     ))}
//   </div>
//   <div
//     className=" w-[300px] md:w-[400px] h-[186px] md:h-[300px] absolute z-20 top-0"
//     style={{
//       backgroundImage:
//         "linear-gradient(360deg, rgba(18, 18, 18, 0.00) 0%, #121212 88.49%)",
//     }}
//   ></div>

//   <div
//     className=" w-[300px] md:w-[400px] h-[186px] md:h-[300px] absolute z-20 bottom-0"
//     style={{
//       backgroundImage:
//         "linear-gradient(180deg, rgba(18, 18, 18, 0.00) 0%, #121212 88.49%)",
//     }}
//   ></div>
// </div>
