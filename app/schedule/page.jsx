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
						src="/schedule_frame.png"
						width={280}
						height={10}
						alt="The official schedule for the Impact Hacks hackathon. Regristration opens on September 1st. Submissions open on September 14th. Submissions close on September 17th. Winners are announced on September 20th."
					/>
					<p className="footer-text">
						All times are <span className="font-extrabold">10:00 AM EST</span>
					</p>
					<p className="footer-text">Dates may be subject to change</p>
				</div>
			</div>
		</div>
	);
}
