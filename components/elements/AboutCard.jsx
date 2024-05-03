import React from "react";

const AboutCard = ({ icon, header, content }) => {
  return (
    <div className="w-[240px] flex flex-col items-center justify-center m-5">
      {icon({ className: "text-5xl" })}
      <p className="schi-bold text-center text-xl mb-1 mt-4">{header}</p>
      <p className="text-center schi-medium text-xl">{content}</p>
    </div>
  );
};

export default AboutCard;
