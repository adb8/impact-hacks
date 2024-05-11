"use client";
import { useState, useEffect } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { FaCircleInfo } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa6";
import { FaCheckCircle, FaHandshakeAltSlash } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";

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
              <RiMenu2Line size={25} />
            </a>
          </div>
          <div
            className={`fixed inset-0 bg-gray-500 transition-all duration-500 ease-in-out ${
              hamburgerActive ? "opacity-50" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setHamburgerActive(false)}
          />
          <div
            className={`top-0 left-0 w-[220px] h-screen fixed bg-[#82beff] pt-8 transition-all duration-500 ease-in-out ${
              hamburgerActive
                ? "transform translate-x-0 opacity-100"
                : "transform -translate-x-full opacity-0"
            }`}>
            <HamburgerNavItem
              href="#home"
              text="Home"
              setHamburgerActive={setHamburgerActive}
              Icon={GoHomeFill}
            />
            <HamburgerNavItem
              href="#about"
              text="About"
              setHamburgerActive={setHamburgerActive}
              Icon={FaCircleInfo}
            />
            <HamburgerNavItem
              href="#rules"
              text="Rules"
              setHamburgerActive={setHamburgerActive}
              Icon={FaCheckCircle}
            />
            <HamburgerNavItem
              href="#criteria"
              text="Criteria"
              setHamburgerActive={setHamburgerActive}
              Icon={FaClipboardList}
            />
            <HamburgerNavItem
              href="#schedule"
              text="Schedule"
              setHamburgerActive={setHamburgerActive}
              Icon={FaCalendar}
            />
            <HamburgerNavItem
              href="#prizes"
              text="Prizes"
              setHamburgerActive={setHamburgerActive}
              Icon={FaGift}
            />
            <HamburgerNavItem
              href="#sponsors"
              text="Sponsors"
              setHamburgerActive={setHamburgerActive}
              Icon={FaHandsHelping}
            />
          </div>
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

const HamburgerNavItem = ({ Icon, href, text, setHamburgerActive }) => {
  return (
    <a
      href={href}
      onClick={() => {
        setHamburgerActive(false);
      }}
      className="flex items-center mx-8 hover:text-[rgb(108,169,249)]">
      {Icon && <Icon size={16} className="mr-4" />}
      <p className="schi-medium cursor-pointer text-md py-3 transition duration-600">
        {text}
      </p>
    </a>
  );
};

export default Navbar;
