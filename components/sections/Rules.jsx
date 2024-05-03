import React from "react";
import Image from "next/image";
import ListCard from "@components/elements/ListCard";
import {
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
  PiNumberCircleThreeFill,
  PiNumberCircleFourFill,
} from "react-icons/pi";

const Rules = () => {
  return (
    <div id="rules" className="py-16 flex flex-col items-center justify-center">
      <p className="text-[26px] schi-bold text-center mb-4">Hackathon Rules</p>
      <div className="flex flex-col lg:flex-row">
        <div>
          <ListCard
            header="Stay on theme"
            content="Build something that can positively impact others. Take this any way you want - education, finance, productivity, organization, etc. Be creative."
            Icon={PiNumberCircleOneFill}
          />
          <ListCard
            header="Stay on time"
            content="Complete your project in its entiriety before the submission deadline listed below."
            Icon={PiNumberCircleTwoFill}
          />
        </div>
        <div>
          <ListCard
            header="Present your work"
            content="You must present your work through a video showcase or presentation. Sending a link to your creation is optional but highly recommended."
            Icon={PiNumberCircleThreeFill}
          />
          <ListCard
            header="Use your own code"
            content="Do not receive unauthorized help. This includes copying substantial amounts of code from the internet and from generative AIs."
            Icon={PiNumberCircleFourFill}
          />
        </div>
      </div>
    </div>
  );
};

export default Rules;
