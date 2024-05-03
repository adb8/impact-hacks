import "@styles/globals.css";
import "@styles/fonts.css";

export const metadata = {
  title: "Impact Hacks",
  description:
    "Join our beginner-friendly virtual hackathon and build something socially impactful for your community! No coding experience necessary! Everyone is welcome to compete for prizes!",
  keywords:
    "impact hacks, innovation, hackathon, coding, programming, social impact, coding projects, coding for prizes, devpost impact hacks, beginner friendly, online hackathon, virtual hackathon, hackthon for beginners, hackathon for high schoolers, hackathon for students, no prior coding experience, coding competition, computer science",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
