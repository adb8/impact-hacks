import React from "react";
import { IoBuild } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoMedalSharp } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="about"
      className="py-16 flex flex-col items-center justify-center bg-[rgb(120,178,254)]">
      <p className="text-[26px] schi-bold text-center mb-3">Build for prizes!</p>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <AboutCard
          icon={IoBuild}
          header="Build"
          content="Harness your creativity to build a revolutionary and impactful product!"
        />
        <AboutCard
          icon={BsFillPeopleFill}
          header="Share"
          content="Share your creations with peers. Be inspired and inspire others."
        />
        <AboutCard
          icon={IoMedalSharp}
          header="Win"
          content="Submit your creation for evaluation and win prizes!"
        />
      </div>
    </div>
  );
};

const AboutCard = ({ icon, header, content }) => {
  return (
    <div className="w-[240px] flex flex-col items-center justify-center m-5">
      {icon({ className: "text-5xl" })}
      <p className="schi-bold text-center text-xl mb-1 mt-4">{header}</p>
      <p className="text-center schi-medium text-xl">{content}</p>
    </div>
  );
};

export default About;
