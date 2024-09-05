import { Marquee } from "@devnomic/marquee";

const images = ["/images/investor.png"];

export const Investor: React.FC = () => {
  return (
    <Marquee
      fade={true}
      direction="left"
      reverse={false}
      pauseOnHover={false}
      className="max-h-[100px] md:max-h-[156px]" // pass class to change gap or speed
      innerClassName=""
    >
      {images.concat(images).map((image, index) => (
        <div key={index} className="max-h-[100px] md:max-h-[156px]">
          <img
            className="max-h-[100px] md:max-h-[156px]"
            src={image}
            alt={`Scrolling content ${index}`}
          />
        </div>
      ))}
    </Marquee>
  );
};
