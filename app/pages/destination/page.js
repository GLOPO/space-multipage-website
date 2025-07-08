'use client'

import React, { useEffect } from "react";
import Header from "../../components/Header.jsx";
import desktophomeBackground from "../../../public/destination/background-destination-desktop.jpg";
import mobilehomeBackground from "../../../public/destination/background-destination-mobile.jpg";
import Image from "next/image";
import euro from "../../../public/destination/image-europa.webp";
import moon from "../../../public/destination/image-moon.webp";
import mars from "../../../public/destination/image-mars.webp";
import titan from "../../../public/destination/image-titan.webp";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const Destination = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);
  return (
    <main className="text-gray-300 relative h-fit lg:h-screen pl-5">
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
          <section className="embla__slide flex flex-col lg:flex-row items-center lg:items-end gap-5 lg:gap-0 justify-between w-[80%] mx-auto mt-6 lg:mt-16 pb-7 lg:pb-0">
              <div className="w-fit lg:w-[40%]">
                <p className="font-extralight">01 PICK YOUR DESTINATIO</p>
                <p className="my-5">
                  MOON <br /> MARS <br /> EUROPA <br /> TITAN
                </p>
                <p className="text-3xl lg:text-8xl my-5 font-extralight">
                  MOON
                </p>
                <p className="text-sm text-gray-400 font-extralight">
                See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites. Avg. distance 384,400
                  km Est. travel time 3 days
                </p>
              </div>

              <Image alt="moon" src={moon} className="w-[80%] lg:w-[30%]" />
            </section>

            <section className="embla__slide flex flex-col lg:flex-row items-center lg:items-end gap-5 lg:gap-0 justify-between w-[80%] mx-auto mt-6 lg:mt-16 pb-7 lg:pb-0">
              <div className="w-fit lg:w-[40%]">
                <p className="font-extralight">01 PICK YOUR DESTINATION</p>
                <p className="my-5">
                  MOON <br /> MARS <br /> EUROPA <br /> TITAN
                </p>
                <p className="text-3xl lg:text-8xl my-5 font-extralight">
                  MARS
                </p>
                <p className="text-sm text-gray-400 font-extralight">
                Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!Avg. distance 225 mil.
                  km Est. travel time 9 months
                </p>
              </div>

              <Image alt="mars" src={mars} className="w-[80%] lg:w-[30%]" />
            </section>

            <section className="embla__slide flex flex-col lg:flex-row items-center lg:items-end gap-5 lg:gap-0 justify-between w-[80%] mx-auto mt-6 lg:mt-16 pb-7 lg:pb-0">
              <div className="w-fit lg:w-[40%]">
                <p className="font-extralight">01 PICK YOUR DESTINATION</p>
                <p className="my-5">
                  MOON <br /> MARS <br /> EUROPA <br /> TITAN
                </p>
                <p className="text-3xl lg:text-8xl my-5 font-extralight">
                  EUROPA
                </p>
                <p className="text-sm text-gray-400 font-extralight">
                  The smallest of the four Galilean moons orbiting Jupiter,
                  Europa is a winter lover’s dream. With an icy surface, it’s
                  perfect for a bit of ice skating, curling, hockey, or simple
                  relaxation in your snug wintery cabin. Avg. distance 628 mil.
                  km Est. travel time 3 years
                </p>
              </div>

              <Image alt="europha" src={euro} className="w-[80%] lg:w-[30%]" />
            </section>

            <section className="embla__slide flex flex-col lg:flex-row items-center lg:items-end gap-5 lg:gap-0 justify-between w-[80%] mx-auto mt-6 lg:mt-16 pb-7 lg:pb-0">
          <div className="w-fit lg:w-[40%]">
            <p className="font-extralight">01 PICK YOUR DESTINATION</p>
            <p className="my-5">
              MOON <br /> MARS <br /> EUROPA <br /> TITAN
            </p>
            <p className="text-3xl lg:text-8xl my-5 font-extralight">TITAN</p>
            <p className="text-sm text-gray-400 font-extralight">
            The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn. Avg. distance 1.6 bil. km Est. travel time 7
              years
            </p>
          </div>

          <Image alt="titan" src={titan} className="w-[80%] lg:w-[30%]" />
        </section>
          </div>
        </div>
      </main>
    </main>
  );
};

export default Destination;
