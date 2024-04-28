import React from "react";
import Image from "next/image";

const Prizes = () => {
  return (
    <div className="lower-page-outer-cont">
      <div className="flex flex-col items-center justify-center">
        <p className="header-text">Winning Prizes</p>
        <div className="prizes-cont flex flex-row justify-between">
          <Image
            priority={true}
            src={"/prizes/prize2_frame.png"}
            width={330}
            height={330}
            alt="Second place prize for winning hackathon submissions. This prize is a $50 Amazon gift card."
          />
          <Image
            priority={true}
            src={"/prizes/prize1_frame.png"}
            width={330}
            height={330}
            alt="First place prize for winning hackathon submissions. This prize is a $100 Amazon gift card."
          />
          <Image
            priority={true}
            src={"/prizes/prize3_frame.png"}
            width={330}
            height={330}
            alt="Third place prize for winning hackathon submissions. This prize is a $30 Amazon gift card."
          />
        </div>
      </div>
    </div>
  );
};

export default Prizes;
