import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ active }) => {
	return (
		<nav className="navbar-cont flex items-center justify-between">
			<div className="navbar-image-cont flex items-center">
				<Link className="navbar-image" href="#">
					<Image src={"/discord_logo.png"} width={30} height={30}></Image>
				</Link>
				<Link className="navbar-image" href="#">
					<Image src={"/insta_logo.png"} width={30} height={30}></Image>
				</Link>
				<Link className="navbar-image" href="#">
					<Image src={"/form_logo.png"} width={30} height={30}></Image>
				</Link>
			</div>
			<div className="navbar-text-cont flex items-center">
				<Link
					className={`navbar-text ${active === "Home" ? "font-extrabold" : ""}`}
					href="#"
				>
					Home
				</Link>
				<Link
					className={`navbar-text ${active === "About" ? "font-extrabold" : ""}`}
					href="#"
				>
					About
				</Link>
				<Link
					className={`navbar-text ${active === "Rules" ? "font-extrabold" : ""}`}
					href="#"
				>
					Rules
				</Link>
				<Link
					className={`navbar-text ${active === "Criteria" ? "font-extrabold" : ""}`}
					href="#"
				>
					Criteria
				</Link>
				<Link
					className={`navbar-text ${active === "Schedule" ? "font-extrabold" : ""}`}
					href="#"
				>
					Schedule
				</Link>
				<Link
					className={`navbar-text ${active === "Prizes" ? "font-extrabold" : ""}`}
					href="#"
				>
					Prizes
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
