import React from "react";

const Button = ({ link, text }) => {
	return (
		<div
			className="home-intro-button-wrapper"
			onClick={() => {
				window.open(link);
			}}
		>
			{text}
		</div>
	);
};

export default Button;
