"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [reducedNavbar, setReducedNavbar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setReducedNavbar(true);
        setHamburgerActive(false);
      } else {
        setReducedNavbar(false);
        setHamburgerActive(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!reducedNavbar && (
        <div className="max-w-[650px] ml-auto mr-[3%]">
          <div className="flex items-center justify-around">
            <RegularNavItem href="#home" text="Home" />
            <div className="mb-1">|</div>
            <RegularNavItem href="#about" text="About" />
            <div className="mb-1">|</div>
            <RegularNavItem href="#rules" text="Rules" />
            <div className="mb-1">|</div>
            <RegularNavItem href="#criteria" text="Criteria" />
            <div className="mb-1">|</div>
            <RegularNavItem href="#schedule" text="Schedule" />
            <div className="mb-1">|</div>
            <RegularNavItem href="#prizes" text="Prizes" />
            <div className="mb-1">|</div>
            <RegularNavItem href="#sponsors" text="Sponsors" />
          </div>
        </div>
      )}
      {reducedNavbar && (
        <div>
          <div className="mx-auto p-4">
            <a
              className="my-4 cursor-pointer"
              onClick={() => {
                setHamburgerActive(true);
              }}>
              <GiHamburgerMenu size={25} />
            </a>
          </div>
          {hamburgerActive ? (
            <div className="absolute top-0 left-0 w-full bg-[#82beff]">
              <HamburgerNavItem href="#home" text="Home" setHamburgerActive={setHamburgerActive} />
              <HamburgerNavItem
                href="#about"
                text="About"
                setHamburgerActive={setHamburgerActive}
              />
              <HamburgerNavItem
                href="#rules"
                text="Rules"
                setHamburgerActive={setHamburgerActive}
              />
              <HamburgerNavItem
                href="#criteria"
                text="Criteria"
                setHamburgerActive={setHamburgerActive}
              />
              <HamburgerNavItem
                href="#schedule"
                text="Schedule"
                setHamburgerActive={setHamburgerActive}
              />
              <HamburgerNavItem
                href="#prizes"
                text="Prizes"
                setHamburgerActive={setHamburgerActive}
              />
              <HamburgerNavItem
                href="#sponsors"
                text="Sponsors"
                setHamburgerActive={setHamburgerActive}
              />
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

const RegularNavItem = ({ href, text }) => {
  return (
    <a
      href={href}
      className="schi-medium transition duration-600 hover:text-[rgb(108,169,249)] cursor-pointer text-md text-[17px] p-4">
      <p>{text}</p>
    </a>
  );
};

const HamburgerNavItem = ({ href, text, setHamburgerActive }) => {
  return (
    <a
      href={href}
      onClick={() => {
        setHamburgerActive(false);
      }}>
      <p className="text-center schi-medium cursor-pointer text-md text-[17px] py-3 transition duration-600 hover:text-[rgb(108,169,249)] border-b border-black">
        {text}
      </p>
    </a>
  );
};

export default Navbar;
