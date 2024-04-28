import React from "react";
import Image from "next/image";

const Criteria = () => {
  return (
    <div className="lower-page-outer-cont">
      <div className="flex flex-col items-center justify-center">
        <p className="header-text">Judging Criteria</p>
        <div className="criteria-cont">
          <Image
            priority={true}
            src="/criteria/criteria1_frame.png"
            width={450}
            height={150}
            alt="First criteria for hackathon project judgement. How unique is your idea or the execution of your idea? Has anyone done this or approached it the way you did?"
          />
          <Image
            priority={true}
            src="/criteria/criteria2_frame.png"
            width={450}
            height={150}
            alt="Second criteria for hackathon project judgement. How complete is your project? Can it wholly perform a function? Is it a minimum viable product (MVP)?"
          />
          <Image
            priority={true}
            src="/criteria/criteria3_frame.png"
            width={450}
            height={150}
            alt="Third criteria for hackathon project judgement. How impactful is your project? Does it positively affect other people's lives in any way?"
          />
          <Image
            priority={true}
            src="/criteria/criteria4_frame.png"
            width={450}
            height={150}
            alt="Fourth criteria for hackathon project judgement. Is your project technically advanced? Was it challenging and time consuming to design?"
          />
        </div>
      </div>
    </div>
  );
};

export default Criteria;
