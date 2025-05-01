"use client";

/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import Header from "../../components/Header.jsx";
import desktophomeBackground from "../../../public/technology/background-technology-desktop.jpg";
import mobilehomeBackground from "../../../public/technology/background-technology-mobile.jpg";
import Image from "next/image";
import tech3 from "../../../public/technology/image-space-capsule-portrait.jpg";
import tech1 from "../../../public/technology/image-launch-vehicle-portrait.jpg";
import tech2 from "../../../public/technology/image-spaceport-portrait.jpg";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Technology = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

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
        className="hidden md:block"
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

        <div className="embla w-[80%] mx-auto" ref={emblaRef}>
          <div className="embla__container">
            <section className="embla__slide flex flex-col lg:flex-row items-center lg:items-end gap-5 lg:gap-0 justify-between w-[80%] mx-auto mt-6">
              <div className="w-fit lg:w-[40%]">
                <p className="font-extralight">02 SPACE LAUNCH 101</p>
                <p className="mt-3">THE TERMINOLOGY...</p>
                <p className="text-3xl lg:text-8xl my-5 font-extralight">
                  LAUNCH VEHICLE
                </p>
                <p className="text-sm text-gray-400 font-extralight">
                  A launch vehicle or carrier rocket is a rocket-propelled
                  vehicle used to carry a payload from Earth's surface to space,
                  usually to Earth orbit or beyond. Our WEB-X carrier rocket is
                  the most powerful in operation. Standing 150 metres tall, it's
                  quite an awe-inspiring sight on the launch pad!
                </p>
              </div>

              <Image alt="launch" src={tech1} className="w-[73%] lg:w-[30%]" />
            </section>

            <section className="embla__slide flex flex-col lg:flex-row items-center lg:items-end gap-5 lg:gap-0 justify-between w-[80%] mx-auto mt-6">
              <div className="w-fit lg:w-[40%]">
                <p className="font-extralight">02 SPACE LAUNCH 101</p>
                <p className="mt-3">THE TERMINOLOGY...</p>
                <p className="text-3xl lg:text-8xl my-5 font-extralight">
                  SPACE PORT
                </p>
                <p className="text-sm text-gray-400 font-extralight">
                  A spaceport or cosmodrome is a site for launching (or
                  receiving) spacecraft, by analogy to the seaport for ships or
                  airport for aircraft. Based in the famous Cape Canaveral, our
                  spaceport is ideally situated to take advantage of the Earth’s
                  rotation for launch.
                </p>
              </div>

              <Image
                alt="spaceport"
                src={tech2}
                className="w-[73%] lg:w-[30%]"
              />
            </section>

            <section className="embla__slide flex flex-col lg:flex-row items-center lg:items-end gap-5 lg:gap-0 justify-between w-[80%] mx-auto mt-6">
              <div className="w-fit lg:w-[40%]">
                <p className="font-extralight">02 SPACE LAUNCH 101</p>
                <p className="mt-3">THE TERMINOLOGY...</p>
                <p className="text-3xl lg:text-8xl my-5 font-extralight">
                  SPACE CAPSULE
                </p>
                <p className="text-sm text-gray-400 font-extralight">
                  A space capsule is an often-crewed spacecraft that uses a
                  blunt-body reentry capsule to reenter the Earth's atmosphere
                  without wings. Our capsule is where you'll spend your time
                  during the flight. It includes a space gym, cinema, and plenty
                  of other activities to keep you entertained.
                </p>
              </div>

              <Image
                alt="commander"
                src={tech3}
                className="w-[73%] lg:w-[30%]"
              />
            </section>
          </div>
        </div>

        {/*  */}
      </main>
    </main>
  );
};

export default Technology;
