import React from "react";
import { PiNumberCircleOneFill } from "react-icons/pi";

const ListCard = ({ header, content, Icon }) => {
  return (
    <div className="max-w-[450px] flex p-5">
      <div>
        <Icon className="text-5xl" />
      </div>
      <div className="mx-3">
        <p className="schi-bold text-xl mb-1">{header}</p>
        <p className="schi-medium text-xl">{content}</p>
      </div>
    </div>
  );
};

export default ListCard;
