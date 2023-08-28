import Image from "next/image";
import NavBar from "@components/NavBar";
import Bubbles from "@components/Bubbles";

export default function Home() {
	return (
		<div className="full-page-cont criteria-page">
			<Bubbles />
			<NavBar active="Schedule" />
			<div className="lower-page-outer-cont">
				<div className="flex flex-col items-center justify-center">
					<p className="header-text">Hackathon Schedule</p>
					<Image
						className="schedule-img"
						src={"/schedule_frame.png"}
						width={280}
						height={10}
						alt="The official schedule for this Hackathon"
					/>
					<p className="footer-text">Dates may be subject to change</p>
				</div>
			</div>
		</div>
	);
}
