import React from "react";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div
      id="sponsors"
      className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 max-w-[90%] mx-auto py-12">
      <div className="flex justify-center items-center">
        <Image
          priority={true}
          src="/sponsors/xyzdomains_logo.png"
          width={100}
          height={100}
          alt="Thank you to XYZ Domains for sponsoring our hackathon!"
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          priority={true}
          src="/sponsors/echo3d_logo.png"
          width={220}
          height={220}
          alt="Thank you to Echo3D for sponsoring our hackathon!"
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          priority={true}
          src="/sponsors/interviewcake_logo.png"
          width={220}
          height={220}
          alt="Thank you to Interview Cake for sponsoring our hackathon!"
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          priority={true}
          src="/sponsors/aops_logo.png"
          width={180}
          height={180}
          alt="Thank you to Art of Problem Solving for sponsoring our hackathon!"
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          priority={true}
          src="/sponsors/wolfram_logo.png"
          width={220}
          height={220}
          alt="Thank you to Wolfram for sponsoring our hackathon!"
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          priority={true}
          src="/sponsors/axure_logo.png"
          width={180}
          height={180}
          alt="Thank you to Axure for sponsoring our hackathon!"
        />
      </div>
    </div>
  );
};

export default Sponsors;
