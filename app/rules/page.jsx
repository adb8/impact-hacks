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
						<Image src={"/rules/rule1_frame.png"} width={450} height={150} />
						<Image src={"/rules/rule2_frame.png"} width={450} height={150} />
						<Image src={"/rules/rule3_frame.png"} width={450} height={150} />
						<Image src={"/rules/rule4_frame.png"} width={450} height={150} />
					</div>
				</div>
			</div>
		</div>
	);
}
