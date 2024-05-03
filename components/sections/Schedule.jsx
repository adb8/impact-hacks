import React from "react";
import Image from "next/image";
import { SiGoogleforms, SiDevpost } from "react-icons/si";
import { FaUnlock, FaLock } from "react-icons/fa6";
import { GiPodiumWinner } from "react-icons/gi";

const Schedule = () => {
  return (
    <div id="schedule" className="py-16 flex flex-col items-center justify-center">
      <p className="text-[26px] schi-bold text-center mb-3">Hackathon Schedule</p>
      <div className="flex flex-col">
        <ScheduleItem
          Icon={SiGoogleforms}
          header="Registration opens"
          content="09/01 10:00 AM EST"
        />
        <ScheduleItem Icon={FaUnlock} header="Submissions open" content="09/29 10:00 AM EST" />
        <ScheduleItem Icon={FaLock} header="Submissions close" content="10/01 10:00 AM EST" />
        <ScheduleItem
          Icon={GiPodiumWinner}
          header="Winners announced"
          content="10/04 10:00 AM EST"
        />
      </div>
    </div>
  );
};

const ScheduleItem = ({ Icon, header, content }) => {
  return (
    <div className="flex flex-row m-5">
      <div className="flex items-center pr-4">
        <Icon className="text-3xl" />
      </div>
      <div>
        <p className="schi-bold text-xl">{content}</p>
        <p className="schi-medium text-xl">{header}</p>
      </div>
    </div>
  );
};

export default Schedule;
