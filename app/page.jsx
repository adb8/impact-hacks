import Image from "next/image";
import NavBar from "@components/NavBar";
import Bubbles from "@components/Bubbles";

export default function Home() {
	return (
		<div className="full-page-cont">
			<Bubbles />
			<NavBar active="Home" />
			<div className="lower-page-outer-cont">
				<div className="home-cont flex flex-row items-center justify-content">
					<div className="home-intro-cont">
						<p className="welcome-text">
							Welcome to <br />
							<span className="hacks-text">Impact Hacks!</span>
						</p>
						<p className="joinus-text">
							Join our beginner-friendly, virtual hackathon and build something
							socially impactful for your community!
						</p>
						<p className="nocoding-text">
							No coding experience necessary! Everyone is welcome to compete for
							prizes!
						</p>
						<div className="button-cont flex">
							<a
								className="home-intro-button-wrapper"
								target="_blank"
								href="https://discord.gg/jGWZTEd2Pj"
							>
								Join the Discord
							</a>
							<a
								className="home-intro-button-wrapper"
								target="_blank"
								href="https://forms.gle/Lqrg8sxtdoDoLYNU6"
							>
								Register Here
							</a>
						</div>
					</div>
					<div className="home-logo-cont">
						<Image
                            priority={true}
							className="impact-hacks-img"
							src="/logos/impacthacks_logo.png"
							width={550}
							height={545}
							alt="The official logo for Impact Hacks. Join our beginner-friendly virtual hackathon and build something socially impactful for your community! No coding experience necessary! Everyone is welcome to compete for prizes!"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
