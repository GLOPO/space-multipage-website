import React from "react";
import Header from "./components/Header";
import desktophomeBackground from "../public/home/background-home-desktop.jpg";
import mobilehomeBackground from "../public/home/background-home-mobile.jpg";
import Image from "next/image";

const Home = () => {
  return (
    <main className="text-gray-300 relative h-screen pl-5">
      <Image
        alt="background"
        src={desktophomeBackground}
        fill
        style={{
          objectFit: "cover",
          position: "absolute",
          inset: 0,
          zIndex: -1,
        }}
        className="hidden lg:block"
      />
      <Image
        alt="background"
        src={mobilehomeBackground}
        fill
        style={{
          objectFit: "cover",
          position: "absolute",
          inset: 0,
          zIndex: -1,
        }}
        className="md:hidden block"
      />

      <main className="container mx-auto ">
        <Header />

        <section className="flex flex-col lg:flex-row items-center lg:items-end gap-5 lg:gap-0 justify-between w-[80%] mx-auto mt-6 lg:mt-32">
          <div className="w-fit lg:w-[40%]">
            <p className="font-extralight">SO, YOU WANT TO TRAVEL TO</p>
            <p className="text-8xl my-5 font-extralight">SPACE</p>
            <p className="text-sm text-gray-400 font-extralight">
              Let’s face it; if you want to go to space, you might as well <br />
              genuinely go to outer space and not hover kind of on the <br />edge of
              it. Well sit back, and relax because we’ll give you <br /> a truly out of
              this world experience!
            </p>
          </div>

          <div className="bg-white w-[180px] lg:w-[150px] h-[180px] lg:h-[150px] border rounded-full text-center flex justify-center items-center">
            <p className="text-black">EXPLORE</p>
          </div>
        </section>
      </main>
    </main>
  );
};

export default Home;
