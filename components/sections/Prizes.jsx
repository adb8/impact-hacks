import React from "react";
import { FaMedal } from "react-icons/fa6";

const Prizes = () => {
  return (
    <div
      id="prizes"
      className="py-16 flex flex-col items-center justify-center bg-[rgb(120,178,254)]">
      <p className="text-[26px] schi-bold text-center mb-4">Winning Prizes</p>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <PrizeCard
          icon={FaMedal}
          header="1st Place"
          firstContent="$100 USD"
          secondContent="Amazon Gift Card"
        />
        <PrizeCard
          icon={FaMedal}
          header="2nd Place"
          firstContent="$50 USD"
          secondContent="Amazon Gift Card"
        />
        <PrizeCard
          icon={FaMedal}
          header="3rd Place"
          firstContent="$30 USD"
          secondContent="Amazon Gift Card"
        />
      </div>
    </div>
  );
};

const PrizeCard = ({ icon, header, firstContent, secondContent }) => {
  return (
    <div className="w-[200px] flex flex-col items-center justify-center m-5">
      {icon({
        className: "text-5xl",
        color: header === "1st Place" ? "gold" : header === "2nd Place" ? "silver" : "brown",
      })}
      <p className="schi-bold text-center text-xl mb-1 mt-4">{header}</p>
      <p className="text-center schi-medium text-xl">
        <span
          className="schi-bold"
          style={{
            color: header === "1st Place" ? "gold" : header === "2nd Place" ? "silver" : "brown",
          }}>
          {firstContent}
        </span>{" "}
        {secondContent}
      </p>
    </div>
  );
};

export default Prizes;
