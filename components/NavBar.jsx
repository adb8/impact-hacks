"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ active }) => {
	const [hamburgerActive, setHamburgerActive] = useState(false);

	return (
		<nav className="navbar-cont flex flex-row items-center justify-between">
			<div className="navbar-img-cont flex items-center">
				<a className="navbar-image" href="https://discord.gg/jGWZTEd2Pj" target="_blank">
					<Image
                        priority={true}
						src="/logos/discord_logo.png"
						width={25}
						height={25}
						alt="Link to our discord server. Click here to join the Impact Hacks Discord server for updates and announcements on our hackathon."
					></Image>
				</a>
				<a
					className="navbar-image"
					href="https://forms.gle/Lqrg8sxtdoDoLYNU6"
					target="_blank"
				>
					<Image
                        priority={true}
						src="/logos/form_logo.png"
						width={23}
						height={23}
						alt="Link to our registration form. Click here to register for our hackathon via our Google form."
					></Image>
				</a>
				<a
					className="navbar-image"
					href="https://impact-hacks-2023.devpost.com/"
					target="_blank"
				>
					<Image
                        priority={true}
						src="/logos/devpost_logo.png"
						width={26}
						height={26}
						alt="Link to our Devpost posting. Click here to learn more about our hackathon. Make sure to register via Devpost too!"
					></Image>
				</a>
				<a
					className="navbar-image hamburger-icon"
					onClick={() => {
						setHamburgerActive(true);
					}}
				>
					<Image
                        priority={true}
						src="/hamburger_icon.png"
						width={26}
						height={26}
						alt="This is a hamburger icon. Tap or click on it to view all of the navigation bar items."
					/>
				</a>
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
				<Link
					className={`navbar-text ${active === "Sponsors" ? "nav-item-active" : ""}`}
					href="/sponsors"
				>
					Sponsors
				</Link>
			</div>
			{hamburgerActive && (
				<div className="hamburger-menu-cont">
					<Link
						className={`hamburger-menu-item ${
							active === "Home" ? "nav-item-active" : ""
						}`}
						href="/home"
						onClick={() => {
							setHamburgerActive(false);
						}}
					>
						<div>Home</div>
					</Link>
					<Link
						className={`hamburger-menu-item ${
							active === "About" ? "nav-item-active" : ""
						}`}
						href="/about"
						onClick={() => {
							setHamburgerActive(false);
						}}
					>
						<div> About</div>
					</Link>
					<Link
						className={`hamburger-menu-item ${
							active === "Rules" ? "nav-item-active" : ""
						}`}
						href="/rules"
						onClick={() => {
							setHamburgerActive(false);
						}}
					>
						<div> Rules</div>
					</Link>
					<Link
						className={`hamburger-menu-item ${
							active === "Criteria" ? "nav-item-active" : ""
						}`}
						href="/criteria"
						onClick={() => {
							setHamburgerActive(false);
						}}
					>
						<div>Criteria</div>
					</Link>
					<Link
						className={`hamburger-menu-item ${
							active === "Schedule" ? "nav-item-active" : ""
						}`}
						href="/schedule"
						onClick={() => {
							setHamburgerActive(false);
						}}
					>
						<div>Schedule</div>
					</Link>
					<Link
						className={`hamburger-menu-item ${
							active === "Prizes" ? "nav-item-active" : ""
						}`}
						href="/prizes"
						onClick={() => {
							setHamburgerActive(false);
						}}
					>
						<div> Prizes</div>
					</Link>
					<Link
						className={`hamburger-menu-item ${
							active === "Sponsors" ? "nav-item-active" : ""
						}`}
						href="/sponsors"
						onClick={() => {
							setHamburgerActive(false);
						}}
					>
						<div>Sponsors</div>
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
