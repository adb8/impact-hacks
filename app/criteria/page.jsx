import Image from "next/image";
import NavBar from "@components/NavBar";
import Bubbles from "@components/Bubbles";

export default function Home() {
	return (
		<div className="full-page-cont criteria-page">
			<Bubbles />
			<NavBar active="Criteria" />
			<div className="lower-page-outer-cont">
				<div className="flex flex-col items-center justify-center">
					<p className="header-text">Judging Criteria</p>
					<div className="criteria-cont">
						<Image
							src="/criteria/criteria1_frame.png"
							width={450}
							height={150}
							alt="First criteria for Hackathon project judgement"
						/>
						<Image
							src="/criteria/criteria2_frame.png"
							width={450}
							height={150}
							alt="Second criteria for Hackathon project judgement"
						/>
						<Image
							src="/criteria/criteria3_frame.png"
							width={450}
							height={150}
							alt="Third criteria for Hackathon project judgement"
						/>
						<Image
							src="/criteria/criteria4_frame.png"
							width={450}
							height={150}
							alt="Fourth criteria for Hackathon project judgement"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
