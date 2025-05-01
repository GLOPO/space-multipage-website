'use client'

import React, { useEffect } from "react";
import Header from "../../components/Header.jsx";
import desktophomeBackground from "../../../public/crew/background-crew-desktop.jpg";
import mobilehomeBackground from "../../../public/crew/background-crew-mobile.jpg";
import Image from "next/image";
import crew1 from '../../../public/crew/image-douglas-hurley.webp'
import crew2 from '../../../public/crew/image-mark-shuttleworth.webp'
import crew3 from '../../../public/crew/image-victor-glover.webp'
import crew4 from '../../../public/crew/image-anousheh-ansari.webp'

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Crew = () => {
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
            <p className="font-extralight">02 MEET YOUR CREW</p>
            <p className="text-3xl lg:text-8xl my-5 font-extralight">DOUGLAS HURLEY</p>
            <p>COMMANDER</p>
            <p className="text-sm text-gray-400 font-extralight">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>

          <Image alt="commander" src={crew1} className="w-[57%] lg:w-[22%]"/>
        </section>

        <section className="embla__slide flex flex-col lg:flex-row items-center lg:items-end gap-5 lg:gap-0 justify-between w-[80%] mx-auto mt-6">
          <div className="w-fit lg:w-[40%]">
            <p className="font-extralight">02 MEET YOUR CREW</p>
            <p className="text-3xl lg:text-8xl my-5 font-extralight">MARK SHUTTLEWORTH</p>
            <p>MISSION SPECIALIST</p>
            <p className="text-sm text-gray-400 font-extralight">
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.
            </p>
          </div>

          <Image alt="specialist" src={crew2} className="w-[57%] lg:w-[22%]"/>
        </section>

        <section className="embla__slide flex flex-col lg:flex-row items-center lg:items-end gap-5 lg:gap-0 justify-between w-[80%] mx-auto mt-6">
          <div className="w-fit lg:w-[40%]">
            <p className="font-extralight">02 MEET YOUR CREW</p>
            <p className="text-3xl lg:text-8xl my-5 font-extralight">VICTOR GLOVER</p>
            <p>PILOT</p>
            <p className="text-sm text-gray-400 font-extralight">
            Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.
            </p>
          </div>

          <Image alt="pilot" src={crew3} className="w-[57%] lg:w-[22%]"/>
        </section>

        <section className="embla__slide flex flex-col lg:flex-row items-center lg:items-end gap-5 lg:gap-0 justify-between w-[80%] mx-auto mt-6">
          <div className="w-fit lg:w-[40%]">
            <p className="font-extralight">02 MEET YOUR CREW</p>
            <p className="text-3xl lg:text-8xl my-5 font-extralight">ANOUSHEH ANSARI</p>
            <p>FLIGHT ENGINEER</p>
            <p className="text-sm text-gray-400 font-extralight">
            Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.
            </p>
          </div>

          <Image alt="flight" src={crew4} className="w-[57%] lg:w-[22%]"/>
        </section>
          </div>
        </div>

        
      </main>
    </main>
  );
};

export default Crew;
