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
						<Image
							src={"/prizes/prize2_frame.png"}
							width={330}
							height={330}
							alt="Second place prize for winning hackathon submissions. This prize is a $50 Amazon gift card."
						/>
						<Image
							src={"/prizes/prize1_frame.png"}
							width={330}
							height={330}
							alt="First place prize for winning hackathon submissions. This prize is a $100 Amazon gift card."
						/>
						<Image
							src={"/prizes/prize3_frame.png"}
							width={330}
							height={330}
							alt="Third place prize for winning hackathon submissions. This prize is a $30 Amazon gift card."
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
