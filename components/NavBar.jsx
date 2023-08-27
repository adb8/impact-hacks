import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ active }) => {
	return (
		<nav className="navbar-cont flex flex-row items-center justify-between">
			<div className="navbar-image-cont flex items-center">
				<Link className="navbar-image" href="#">
					<Image src={"/logos/discord_logo.png"} width={30} height={30}></Image>
				</Link>
				<Link className="navbar-image" href="#">
					<Image src={"/logos/insta_logo.png"} width={30} height={30}></Image>
				</Link>
				<Link className="navbar-image" href="#">
					<Image src={"/logos/form_logo.png"} width={28} height={28}></Image>
				</Link>
			</div>
			<div className="navbar-text-cont flex items-center">
				<Link
					className={`navbar-text ${active === "Home" ? "font-extrabold" : ""}`}
					href="/home"
				>
					Home
				</Link>
				<Link
					className={`navbar-text ${active === "About" ? "font-extrabold" : ""}`}
					href="/about"
				>
					About
				</Link>
				<Link
					className={`navbar-text ${active === "Rules" ? "font-extrabold" : ""}`}
					href="/rules"
				>
					Rules
				</Link>
				<Link
					className={`navbar-text ${active === "Criteria" ? "font-extrabold" : ""}`}
					href="/criteria"
				>
					Criteria
				</Link>
				<Link
					className={`navbar-text ${active === "Schedule" ? "font-extrabold" : ""}`}
					href="/schedule"
				>
					Schedule
				</Link>
				<Link
					className={`navbar-text ${active === "Prizes" ? "font-extrabold" : ""}`}
					href="/prizes"
				>
					Prizes
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
