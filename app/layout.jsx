import "@styles/globals.css";

export const metadata = {
	title: "Impact Hacks",
	description: "Empowering positive impact through innovative hacks.",
	keywords: "impact hacks, innovation, hackathon, coding, community, social impact, impact, hack",
	author: "Your Name",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&display=swap"
					rel="stylesheet"
				/>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body>{children}</body>
		</html>
	);
}
