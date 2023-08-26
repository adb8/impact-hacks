import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Home() {
	return (
		<div className="page-cont home-cont">
			<NavBar active="Home" />
			<div className="first-home-cont">
				<div className="second-home-cont">
					<div className="home-intro-cont">
						<p className="welcome-text">Welcome to</p>
						<p className="hacks-text">Impact Hacks!</p>
						<p className="joinus-text">
							Join us in a week-long hackathon to build <br />
							something socially impactful for your <br />
							community!
						</p>
						<p className="nocoding-text">
							No coding experience necessary! <br />
							Everyone is welcome to compete for prizes!
						</p>
						<div className="home-intro-button-cont">
							<div className="home-intro-button-wrapper">
								<Link href="#">Join the Discord</Link>
							</div>
							<div className="home-intro-button-wrapper">
								<Link href="#">Register Here</Link>
							</div>
						</div>
					</div>
					<div className="home-logo-cont">
						<Image src={"/impacthacks_logo.png"} width={591} height={584} />
					</div>
				</div>
			</div>
		</div>
	);
}
