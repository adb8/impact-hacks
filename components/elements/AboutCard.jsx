import React from "react";

const AboutCard = ({ icon, header, content }) => {
	return (
		<div className="h-[280px] w-[270px] flex flex-col p-8 bg-[rgb(125,173,250)] items-center justify-center rounded-xl m-5 shadow-md">
      {icon({ className: "text-5xl" })}
			<p className="schi-bold text-center text-xl mb-1 mt-4">{header}</p>
			<p className="text-center schi-medium text-lg">{content}</p>
		</div>
	);
};

export default AboutCard;
