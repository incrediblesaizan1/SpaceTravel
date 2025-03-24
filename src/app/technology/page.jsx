"use client";
import Background from "@/components/Background";
import MotionDiv from "@/components/MotionDiv";
import React, { useMemo, useState } from "react";
import mobile from "@/assets/technology/background-technology-mobile.jpg";
import tablet from "@/assets/technology/background-technology-tablet.jpg";
import desktop from "@/assets/technology/background-technology-desktop.jpg";
import PageTitle from "@/components/PageTitle";
import vehicleLandscape from "@/assets/technology/image-launch-vehicle-landscape.jpg";
import vehiclePortrait from "@/assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleLandscape from "@/assets/technology/image-space-capsule-landscape.jpg";
import capsulePortrait from "@/assets/technology/image-space-capsule-portrait.jpg";
import spaceportLandscape from "@/assets/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "@/assets/technology/image-spaceport-portrait.jpg";
import { usePrevious } from "@mantine/hooks";
import { motion } from "framer-motion";
import { FADE, SLIDE_LEFT, SLIDE_RIGHT } from "@/lib/data";
import Image from "next/image";

const technologies = [
    {
      name: "Launch vehicle",
      landscape: vehicleLandscape,
      portrait: vehiclePortrait,
      description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    },
    {
      name: "Space capsule",
      landscape: capsuleLandscape,
      portrait: capsulePortrait,
      description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
    },
    {
      name: "Spaceport",
      landscape: spaceportLandscape,
      portrait: spaceportPortrait,
      description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
    },
  ];
const page = () => {
  const [actual, setActual] = useState(0);
  const previous = usePrevious(actual);

  const technology = useMemo(() => technologies[actual], [actual]);
  const variants = useMemo(() => {
    if (previous === undefined) return SLIDE_LEFT;
    if (actual > previous) return SLIDE_LEFT;
    SLIDE_RIGHT;
  }, [actual]);

  return (
    <MotionDiv>
      <Background
        mobile={mobile.src}
        tablet={tablet.src}
        desktop={desktop.src}
      />

    <main className="relative z-10 w-full -mt-8 lg:pr-6 lg:pl-28">
<div className="w-fit mx-auto mb-8 md:mx-2">
            <PageTitle number={3} title="Space luanch 101" />
          </div>

    <div className="flex flex-col lg:flex-row-reverse">
    <div className="w-full lg:w-[35%] lg:min-h-[35vh] ">
            <motion.picture
              key={technology.name}
              variants={FADE}
              className="block"
            >
              <source
                media="(min-width:1024px)"
                srcSet={technology.portrait.src}
              />
              <Image
                src={technology.landscape}
                className="object-cover w-full h-auto"
                alt="Background Image"
              />
            </motion.picture>
    </div>
    <div className="flex flex-col items-center mt-8 md:mt-14 lg:flex-row lg:grow lg:mt-0">
    <div className="w-fit flex gap-4 mb-6 md:mb-11 lg:flex-col lg:mb-0 lg:gap-8">
    {technologies.map(({name}, index)=>(
        <div key={name + index} onClick={()=> setActual(index)} className={`w-10 md:w-14 aspect-square flex items-center justify-center text-white border rounded-full border-white/20 transition cursor-pointer ${technology.name === name && "active"}
        [&.active]:bg-white [&.active]:text-[#D0D6F9] [&.not(.active)]:hover:border-white
        `}>
                {index + 1}
        </div>

    ))}
    </div>

    <div className="text-[#D0D6F9] text-center px-6 md:max-w-lg md:mx-auto lg:text-left lg:max-w-xl">
    <span className="block nav-text uppercase mb-2 text-[14px] md:text-[16px]">
    THE TERMINOLOGY ...
    </span>
    <h3 className="uppercase mb-4 text-white text-[24px] md:text-[40px] lg:text-[56px]">
    {" "}
    {technology.name}{" "}
    </h3>
    <p className="leading-relaxed lg:leading-loose lg:text-[18px]">
    {" "}
    {technology.description}{" "}
    </p>
    </div>

    </div>
    </div>

    </main>
 
    </MotionDiv>
  );
};

export default page;
