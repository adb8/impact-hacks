import React from "react";
import Image from "next/image";

const Schedule = () => {
  return (
    <div className="lower-page-outer-cont">
      <div className="flex flex-col items-center justify-center">
        <p className="header-text">Hackathon Schedule</p>
        <Image
          className="schedule-img"
          src="/schedule_frame.png"
          width={280}
          height={10}
          alt="The official schedule for the Impact Hacks hackathon. Regristration opens on September 1st. Submissions open on September 14th. Submissions close on September 17th. Winners are announced on September 20th."
          priority={true}
        />
        <p className="footer-text">
          All times are <span className="font-extrabold">10:00 AM EST</span>
        </p>
        <p className="footer-text">Dates may be subject to change</p>
      </div>
    </div>
  );
};

export default Schedule;
