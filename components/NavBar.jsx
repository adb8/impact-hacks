import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ active }) => {
	return (
		<nav className="navbar-cont flex flex-row items-center justify-between">
			<div className="navbar-image-cont flex items-center">
				<Link className="navbar-image" href="#">
					<Image
						src={"/logos/discord_logo.png"}
						width={30}
						height={30}
						alt="Link to our discord server"
					></Image>
				</Link>
				<Link className="navbar-image" href="#">
					<Image
						src={"/logos/insta_logo.png"}
						width={30}
						height={30}
						alt="Link to our instagram page"
					></Image>
				</Link>
				<Link className="navbar-image" href="#">
					<Image
						src={"/logos/form_logo.png"}
						width={28}
						height={28}
						alt="Link to our registration form"
					></Image>
				</Link>
			</div>
			<div className="navbar-text-cont flex items-center">
				<Link
					className={`navbar-text ${active === "Home" ? "nav-item-active" : ""}`}
					href="/home"
				>
					Home
				</Link>
				<Link
					className={`navbar-text ${active === "About" ? "nav-item-active" : ""}`}
					href="/about"
				>
					About
				</Link>
				<Link
					className={`navbar-text ${active === "Rules" ? "nav-item-active" : ""}`}
					href="/rules"
				>
					Rules
				</Link>
				<Link
					className={`navbar-text ${active === "Criteria" ? "nav-item-active" : ""}`}
					href="/criteria"
				>
					Criteria
				</Link>
				<Link
					className={`navbar-text ${active === "Schedule" ? "nav-item-active" : ""}`}
					href="/schedule"
				>
					Schedule
				</Link>
				<Link
					className={`navbar-text ${active === "Prizes" ? "nav-item-active" : ""}`}
					href="/prizes"
				>
					Prizes
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
