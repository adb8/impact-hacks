import React from "react";

const Card = ({ header, content }) => {
	return (
		<div className="about-card">
			<p className="about-card-header-text">{header}</p>
			<p className="about-card-content-text">{content}</p>
		</div>
	);
};

export default Card;
