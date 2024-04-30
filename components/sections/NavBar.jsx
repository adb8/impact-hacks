"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [reducedNavbar, setReducedNavbar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
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
        <div className="max-w-[600px] ml-auto mr-[3%]">
          <div className="flex items-center justify-around">
            <Link
              href="#home"
              className="schi-medium transition duration-600 hover:bg-[rgba(113,130,255,0.3)] cursor-pointer text-md p-3">
              <p>Home</p>
            </Link>
            <Link
              href="#about"
              className="schi-medium transition duration-600 hover:bg-[rgba(113,130,255,0.3)] cursor-pointer text-md p-3">
              <p>About</p>
            </Link>
            <Link
              href="#rules"
              className="schi-medium transition duration-600 hover:bg-[rgba(113,130,255,0.3)] cursor-pointer text-md p-3">
              <p>Rules</p>
            </Link>
            <Link
              href="#criteria"
              className="schi-medium transition duration-600 hover:bg-[rgba(113,130,255,0.3)] cursor-pointer text-md p-3">
              <p>Criteria</p>
            </Link>
            <Link
              href="#schedule"
              className="schi-medium transition duration-600 hover:bg-[rgba(113,130,255,0.3)] cursor-pointer text-md p-3">
              <p>Schedule</p>
            </Link>
            <Link
              href="#prizes"
              className="schi-medium transition duration-600 hover:bg-[rgba(113,130,255,0.3)] cursor-pointer text-md p-3">
              <p>Prizes</p>
            </Link>
            <Link
              href="#sponsors"
              className="schi-medium transition duration-600 hover:bg-[rgba(113,130,255,0.3)] cursor-pointer text-md p-3">
              <p>Sponsors</p>
            </Link>
          </div>
        </div>
      )}
      {reducedNavbar && (
        <div>
          {hamburgerActive ? (
            <>
              <Link
                href="#home"
                onClick={() => {
                  setHamburgerActive(false);
                }}>
                <p className="text-center schi-medium cursor-pointer text-md py-3 transition duration-600 hover:bg-[rgba(113,130,255,0.3)] border-b-2 border-[rgb(130,164,255)]">
                  Home
                </p>
              </Link>
              <Link
                href="#about"
                onClick={() => {
                  setHamburgerActive(false);
                }}>
                <p className="text-center schi-medium cursor-pointer text-md py-3 transition duration-600 hover:bg-[rgba(113,130,255,0.3)] border-b-2 border-[rgb(130,164,255)]">
                  {" "}
                  About
                </p>
              </Link>
              <Link
                href="#rules"
                onClick={() => {
                  setHamburgerActive(false);
                }}>
                <p className="text-center schi-medium cursor-pointer text-md py-3 transition duration-600 hover:bg-[rgba(113,130,255,0.3)] border-b-2 border-[rgb(130,164,255)]">
                  Rules
                </p>
              </Link>
              <Link
                href="#criteria"
                onClick={() => {
                  setHamburgerActive(false);
                }}>
                <p className="text-center schi-medium cursor-pointer text-md py-3 transition duration-600 hover:bg-[rgba(113,130,255,0.3)] border-b-2 border-[rgb(130,164,255)]">
                  Criteria
                </p>
              </Link>
              <Link
                href="#schedule"
                onClick={() => {
                  setHamburgerActive(false);
                }}>
                <p className="text-center schi-medium cursor-pointer text-md py-3 transition duration-600 hover:bg-[rgba(113,130,255,0.3)] border-b-2 border-[rgb(130,164,255)]">
                  Schedule
                </p>
              </Link>
              <Link
                href="#prizes"
                onClick={() => {
                  setHamburgerActive(false);
                }}>
                <p className="text-center schi-medium cursor-pointer text-md py-3 transition duration-600 hover:bg-[rgba(113,130,255,0.3)] border-b-2 border-[rgb(130,164,255)]">
                  Prizes
                </p>
              </Link>
              <Link
                href="#sponsors"
                onClick={() => {
                  setHamburgerActive(false);
                }}>
                <p className="text-center schi-medium cursor-pointer text-md py-3 transition duration-600 hover:bg-[rgba(113,130,255,0.3)] border-b-2 border-[rgb(130,164,255)]">
                  Sponsors
                </p>
              </Link>
            </>
          ) : (
            <div className="mx-auto p-4">
                <a
                  className="my-4 cursor-pointer"
                  onClick={() => {
                    setHamburgerActive(true);
                  }}>
                  <Image
                    className="opacity-80"
                    priority={true}
                    src="/hamburger_icon.png"
                    width={22}
                    height={22}
                    alt="This is a hamburger icon. Tap or click on it to view all of the navigation bar items."
                  />
                </a>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
