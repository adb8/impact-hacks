import Image from "next/image";
import NavBar from "@components/NavBar";
import Bubbles from "@components/Bubbles";

export default function Home() {
	return (
		<div className="full-page-cont">
			<Bubbles />
			<NavBar active="Rules" />
			<div className="lower-page-outer-cont">
				<div className="flex flex-col items-center justify-center">
					<p className="header-text">Hackathon Rules</p>
					<div className="rules-cont">
						<Image
							src="/rules/rule1_frame.png"
							width={450}
							height={150}
							alt="First rule for appropriate Hackathon conduct. Build something that can impact others. Take this any way you want - education, finance, productivity, organization, etc. Be creative!"
						/>
						<Image
							src="/rules/rule2_frame.png"
							width={450}
							height={150}
							alt="Second rule for appropriate Hackathon conduct. Complete your project before the submission deadline of September 17th. Late projects may not be considered for prizes."
						/>
						<Image
							src="/rules/rule3_frame.png"
							width={450}
							height={150}
							alt="Third rule for appropriate Hackathon conduct. You must present your work with judges in at least one of the specified formats found on our Devpost page."
						/>
						<Image
							src="/rules/rule4_frame.png"
							width={450}
							height={150}
							alt="Fourth rule for appropriate Hackathon conduct. Do not receive unauthorized help. This includes copying substantial amounts of code from the internet and from AIs."
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
