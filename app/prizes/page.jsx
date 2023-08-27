import Image from "next/image";
import NavBar from "@components/NavBar";
import Bubbles from "@components/Bubbles";

export default function Home() {
	return (
		<div className="full-page-cont criteria-page">
			<Bubbles />
			<NavBar active="Prizes" />
			<div className="lower-page-outer-cont">
				<div className="flex flex-col items-center justify-center">
					<p className="header-text">Winning Prizes</p>
					<div className="prizes-cont flex flex-row justify-between">
						<Image src={"/prize2_frame.png"} width={330} height={330} />
						<Image src={"/prize1_frame.png"} width={330} height={330} />
						<Image src={"/prize3_frame.png"} width={330} height={330} />
					</div>
				</div>
			</div>
		</div>
	);
}
