import { Marquee } from "@devnomic/marquee";

export const Investor: React.FC = () => {
  return (
    <Marquee
      fade={true}
      direction="left"
      reverse={false}
      pauseOnHover={false}
      className="max-h-[156px]" // pass class to change gap or speed
      innerClassName=""
    >
      <img src="/images/investor.png" />
      <img src="/images/investor.png" />
    </Marquee>
  );
};
