"use client";

import Image from "next/image";
import NavBar from "@components/NavBar";
import Bubbles from "@components/Bubbles";
import Button from "@components/Button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	useEffect(() => {
		if (router.pathname != "/" && router.pathname != "/home") {
			router.push("/");
		}
	}, []);

	return (
		<div className="full-page-cont">
			<Bubbles />
			<NavBar active="Home" />
			<div className="lower-page-outer-cont">
				<div className="home-cont flex flex-row items-center justify-content">
					<div className="home-intro-cont">
						<p className="welcome-text">Welcome to</p>
						<p className="hacks-text">Impact Hacks</p>
						<p className="joinus-text">
							Join us in a beginner-friendly virtual hackathon to build something socially impactful
							for your community!
						</p>
						<p className="nocoding-text">
							No coding experience necessary! Everyone is welcome to compete for
							prizes!
						</p>
						<div className="button-cont flex">
							<Button text="Join the Discord" link="https://discord.gg/jGWZTEd2Pj" />
							<Button
								text="Register Here"
								link="https://forms.gle/Lqrg8sxtdoDoLYNU6"
							/>
						</div>
					</div>
					<div className="home-logo-cont">
						<Image
							className="impact-hacks-img"
							src={"/logos/impacthacks_logo.png"}
							width={550}
							height={545}
							alt="The official logo for Impact Hacks"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
