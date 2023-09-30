import NavBar from "@components/NavBar";
import Bubbles from "@components/Bubbles";
import Card from "@components/Card";

export default function Home() {
	return (
		<div className="full-page-cont">
			<Bubbles />
			<NavBar active="About" />
			<div className="lower-page-outer-cont">
				<div className="flex flex-col items-center justify-center">
					<p className="header-text">Build for prizes!</p>
					<div className="about-card-cont flex flex-row items-center justify-between">
						<Card
							header="Build"
							content="Harness your creativity to build a revolutionary and impactful product!"
						/>
						<Card
							header="Share"
							content="Share your creations with peers. Be inspired and inspire others."
						/>
						<Card
							header="Win"
							content="Submit your creation for evaluation and win prizes!"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
