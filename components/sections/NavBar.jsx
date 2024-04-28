"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [reducedNavbar, setReducedNavbar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setReducedNavbar(true);
      } else {
        setReducedNavbar(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!reducedNavbar && (
        <nav className="flex items-center justify-around">
          <div className="md:flex items-center hidden">
            <a href="https://discord.gg/jGWZTEd2Pj" className="mx-3" target="_blank">
              <Image
                className="opacity-80"
                priority={true}
                src="/logos/discord_logo.png"
                width={24}
                height={24}
                alt="Link to our discord server. Click here to join the Impact Hacks Discord server for updates and announcements on our hackathon."></Image>
            </a>
            <a href="https://forms.gle/Lqrg8sxtdoDoLYNU6" className="mx-3" target="_blank">
              <Image
                className="opacity-80"
                priority={true}
                src="/logos/form_logo.png"
                width={24}
                height={24}
                alt="Link to our registration form. Click here to register for our hackathon via our Google form."></Image>
            </a>
            <a href="https://impact-hacks-2023.devpost.com/" className="mx-3" target="_blank">
              <Image
                className="opacity-80"
                priority={true}
                src="/logos/devpost_logo.png"
                width={24}
                height={24}
                alt="Link to our Devpost posting. Click here to learn more about our hackathon. Make sure to register via Devpost too!"></Image>
            </a>
          </div>
          <div className="flex items-center">
            <Link
              href="#home"
              className="manrope-semibold transition duration-600 hover:bg-[rgba(113,130,255,0.3)] cursor-pointer text-md p-3">
              <p>Home</p>
            </Link>
            <Link
              href="#about"
              className="manrope-semibold transition duration-600 hover:bg-[rgba(113,130,255,0.3)] cursor-pointer text-md p-3">
              <p>About</p>
            </Link>
            <Link
              href="#rules"
              className="manrope-semibold transition duration-600 hover:bg-[rgba(113,130,255,0.3)] cursor-pointer text-md p-3">
              <p>Rules</p>
            </Link>
            <Link
              href="#criteria"
              className="manrope-semibold transition duration-600 hover:bg-[rgba(113,130,255,0.3)] cursor-pointer text-md p-3">
              <p>Criteria</p>
            </Link>
            <Link
              href="#schedule"
              className="manrope-semibold transition duration-600 hover:bg-[rgba(113,130,255,0.3)] cursor-pointer text-md p-3">
              <p>Schedule</p>
            </Link>
            <Link
              href="#prizes"
              className="manrope-semibold transition duration-600 hover:bg-[rgba(113,130,255,0.3)] cursor-pointer text-md p-3">
              <p>Prizes</p>
            </Link>
            <Link
              href="#sponsors"
              className="manrope-semibold transition duration-600 hover:bg-[rgba(113,130,255,0.3)] cursor-pointer text-md p-3">
              <p>Sponsors</p>
            </Link>
          </div>
        </nav>
      )}
      {reducedNavbar && (
        <nav>
          {hamburgerActive ? (
            <>
              <Link
                href="#home"
                onClick={() => {
                  setHamburgerActive(false);
                }}>
                <p className="text-center manrope-semibold cursor-pointer text-md py-3 transition duration-600 hover:bg-[rgba(113,130,255,0.3)] border-b-2 border-[rgb(130,164,255)]">
                  Home
                </p>
              </Link>
              <Link
                href="#about"
                onClick={() => {
                  setHamburgerActive(false);
                }}>
                <p className="text-center manrope-semibold cursor-pointer text-md py-3 transition duration-600 hover:bg-[rgba(113,130,255,0.3)] border-b-2 border-[rgb(130,164,255)]">
                  {" "}
                  About
                </p>
              </Link>
              <Link
                href="#rules"
                onClick={() => {
                  setHamburgerActive(false);
                }}>
                <p className="text-center manrope-semibold cursor-pointer text-md py-3 transition duration-600 hover:bg-[rgba(113,130,255,0.3)] border-b-2 border-[rgb(130,164,255)]">
                  Rules
                </p>
              </Link>
              <Link
                href="#criteria"
                onClick={() => {
                  setHamburgerActive(false);
                }}>
                <p className="text-center manrope-semibold cursor-pointer text-md py-3 transition duration-600 hover:bg-[rgba(113,130,255,0.3)] border-b-2 border-[rgb(130,164,255)]">
                  Criteria
                </p>
              </Link>
              <Link
                href="#schedule"
                onClick={() => {
                  setHamburgerActive(false);
                }}>
                <p className="text-center manrope-semibold cursor-pointer text-md py-3 transition duration-600 hover:bg-[rgba(113,130,255,0.3)] border-b-2 border-[rgb(130,164,255)]">
                  Schedule
                </p>
              </Link>
              <Link
                href="#prizes"
                onClick={() => {
                  setHamburgerActive(false);
                }}>
                <p className="text-center manrope-semibold cursor-pointer text-md py-3 transition duration-600 hover:bg-[rgba(113,130,255,0.3)] border-b-2 border-[rgb(130,164,255)]">
                  Prizes
                </p>
              </Link>
              <Link
                href="#sponsors"
                onClick={() => {
                  setHamburgerActive(false);
                }}>
                <p className="text-center manrope-semibold cursor-pointer text-md py-3 transition duration-600 hover:bg-[rgba(113,130,255,0.3)] border-b-2 border-[rgb(130,164,255)]">
                  Sponsors
                </p>
              </Link>
            </>
          ) : (
            <div className="max-w-[300px] mx-auto">
              <div className="flex justify-around items-center">
                <a href="https://discord.gg/jGWZTEd2Pj" className="my-4" target="_blank">
                  <Image
                    className="opacity-80"
                    priority={true}
                    src="/logos/discord_logo.png"
                    width={24}
                    height={24}
                    alt="Link to our discord server. Click here to join the Impact Hacks Discord server for updates and announcements on our hackathon."></Image>
                </a>
                <a href="https://forms.gle/Lqrg8sxtdoDoLYNU6" className="my-4" target="_blank">
                  <Image
                    className="opacity-80"
                    priority={true}
                    src="/logos/form_logo.png"
                    width={24}
                    height={24}
                    alt="Link to our registration form. Click here to register for our hackathon via our Google form."></Image>
                </a>
                <a href="https://impact-hacks-2023.devpost.com/" className="my-4" target="_blank">
                  <Image
                    className="opacity-80"
                    priority={true}
                    src="/logos/devpost_logo.png"
                    width={24}
                    height={24}
                    alt="Link to our Devpost posting. Click here to learn more about our hackathon. Make sure to register via Devpost too!"></Image>
                </a>
                <a
                  className="my-4 cursor-pointer"
                  onClick={() => {
                    setHamburgerActive(true);
                  }}>
                  <Image
                    className="opacity-80"
                    priority={true}
                    src="/hamburger_icon.png"
                    width={24}
                    height={24}
                    alt="This is a hamburger icon. Tap or click on it to view all of the navigation bar items."
                  />
                </a>
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
