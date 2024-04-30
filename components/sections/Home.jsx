import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-10 background-gradient">
      <div className="max-w-[500px] m-5">
        <p className="text-4xl schi-medium text-center lg:text-left">Welcome to</p>
        <p className="text-4xl schi-extrabold text-center lg:text-left">Impact Hacks!</p>
        <p className="schi-medium text-xl mt-6 text-center lg:text-left">
          Join our beginner-friendly, virtual hackathon and build something socially impactful for
          your community!
        </p>
        <p className="schi-medium text-xl mt-6 text-center lg:text-left">
          No coding experience necessary! Everyone is welcome to compete for prizes!
        </p>
        <div className="flex mt-6 sm:flex-row flex-col justify-center lg:justify-start">
          <a
            className="transition hover:bg-[#4b6dd1] flex items-center justify-center w-[220px] h-[50px] bg-[#5881ea] rounded-full text-xl text-center schi-medium sm:mr-4 mb-4 sm:mb-0 mx-auto sm:mx-0"
            target="_blank"
            href="https://discord.gg/jGWZTEd2Pj">
            Join the Discord
          </a>
          <a
            className="transition hover:bg-[#4b6dd1] flex items-center justify-center w-[220px] h-[50px] bg-[#5881ea] rounded-full text-xl text-center schi-medium mx-auto sm:mx-0"
            target="_blank"
            href="https://forms.gle/Lqrg8sxtdoDoLYNU6">
            Register Here
          </a>
        </div>
      </div>
      <div className="m-5">
        <Image
          priority={true}
          className="impact-hacks-img hidden lg:block"
          src="/logos/impacthacks_logo.png"
          width={420}
          height={420}
          alt="The official logo for Impact Hacks. Join our beginner-friendly virtual hackathon and build something socially impactful for your community! No coding experience necessary! Everyone is welcome to compete for prizes!"
        />
      </div>
    </div>
  );
};

export default Home;
