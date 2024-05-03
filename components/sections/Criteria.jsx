import React from "react";
import Image from "next/image";
import ListCard from "@components/elements/ListCard";
import {
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
  PiNumberCircleThreeFill,
  PiNumberCircleFourFill,
} from "react-icons/pi";

const Criteria = () => {
  return (
    <div
      id="criteria"
      className="py-16 flex flex-col items-center justify-center bg-[rgb(120,178,254)]">
      <p className="text-[26px] schi-bold text-center mb-4">Judging Criteria</p>
      <div className="flex flex-col lg:flex-row">
        <div>
          <ListCard
            header="Creativity"
            content="How unique is your idea or the execution of your idea? Has anyone does this or approached it the way you did?"
            Icon={PiNumberCircleOneFill}
          />
          <ListCard
            header="Completeness"
            content="How complete is your project? Can it wholly perform a function? Is it MVP (minimum viable product)?"
            Icon={PiNumberCircleTwoFill}
          />
        </div>
        <div>
          <ListCard
            header="Impactfulness"
            content="How impactful is your project? Does it positively affect others peoples' lives in any way?Would other people use it?"
            Icon={PiNumberCircleThreeFill}
          />
          <ListCard
            header="Complexity"
            content="Is your project technically advanced? Was it challenging and time consuming to design?"
            Icon={PiNumberCircleFourFill}
          />
        </div>
      </div>
    </div>
  );
};

export default Criteria;
