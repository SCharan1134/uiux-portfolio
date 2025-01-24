"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { motion, useScroll, useTransform, useInView } from "motion/react";
// import { useEffect, useRef, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const caseStudy = [
    {
      image: "/waybot-logo.png",
      hover: "/waybot-logo-h.png",
      page: "/waybot",
      content:
        "WAYBOT offers a solution for efficient crowd management, specifically in amusement parks. this involves the implementation of a kiosk equipped with various features designed to streamline operations and enhance visitor experiences.",
    },
    {
      image: "/sage-logo.png",
      hover: "/sage-logo-h.png",
      page: "/sage",
      content:
        "SAGE is an AI-powered platform that simplifies access to geospatial information for users of all backgrounds. From disaster response to agricultural challenges, Sage provides solutions by leveraging the power of geospatial data.",
    },
    {
      image: "/dryfold-logo.png",
      hover: "/dryfold-logo-h.png",
      page: "/dryfold",
      content:
        "DRYFOLD is a aI based laundry folding machine which can  promptly fold clothes as they are removed from the dryer. This process helps to mitigate the formation of wrinkles and the accumulation of garments on surfaces such as beds or chairs.",
    },
    {
      image: "/wiggles-logo.png",
      hover: "/wiggles-logo-h.png",
      page: "/wiggles",
      content:
        "WIGGLES is a pet traing app for Young dog owners who struggle to meet their pet's specific needs, in their daily life. also, Addressing different ways to strengthen the human-animal bond and improve the dog's overall well-being.",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* hero */}
      <section className="w-full h-full sm:px-16 px-5">
        <h1 className="font-fredericka sm:text-[240px] text-8xl sm:tracking-widest tracking-wide">
          Learn<span className="text-[#F8FF00]">.</span>
        </h1>
        <h1 className="font-fredericka sm:text-[240px] text-8xl sm:tracking-widest tracking-wide">
          Create<span className="text-[#F8FF00]">.</span>
        </h1>
        <h1 className="font-fredericka sm:text-[240px] text-8xl sm:tracking-widest tracking-wide">
          Inspire<span className="text-[#F8FF00]">.</span>
        </h1>
        <div className="w-full flex sm:flex-row flex-col gap-10 sm:items-center items-start justify-between sm:py-20 py-10">
          <button
            onClick={() => router.push("/about")}
            className="font-fredericka border-2 border-white sm:min-w-[300px] min-w-[200px] text-white hover:text-black hover:bg-[#F8FF00] hover:border-[#F8FF00] rounded-full px-8 py-3 sm:text-4xl text-2xl transition-all duration-300 ease-in-out"
          >
            ABOUT ME
          </button>
          <button
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="font-fredericka border-2 border-white  sm:min-w-[300px] min-w-[200px] text-white hover:text-black hover:bg-[#F8FF00] hover:border-[#F8FF00] rounded-full px-8 py-3 sm:text-4xl text-2xl transition-all duration-300 ease-in-out"
          >
            RESUME
          </button>
          <button
            onClick={() => router.push("/contact")}
            className="font-fredericka border-2 border-white sm:min-w-[300px] min-w-[200px] text-white hover:text-black hover:bg-[#F8FF00] hover:border-[#F8FF00] rounded-full px-8 py-3 sm:text-4xl text-2xl transition-all duration-300 ease-in-out"
          >
            CONTACT
          </button>
        </div>
      </section>
      {/* logo */}
      <section className="relative w-full h-full  sm:px-16 px-5 flex sm:flex-row flex-col sm:items-start items-center justify-center sm:gap-28 gap-5 py-16">
        <div className="bg-black z-50">
          <Image
            src={"/logo.png"}
            width={500}
            height={500}
            alt="logo"
            className=" rounded-full w-full max-w-[500px] z-50 h-full object-contain"
          />
        </div>
        <div className="py-24  z-50">
          <h2 className="w-fit font-Parkinsans text-3xl">
            <p className="text-white/50 bg-black">
              <span className="text-[#F8FF00]">&quot;</span>
              Design Is Not Just What It
              <br /> Looks Like And Feels Like
              <br /> Design Is How It Works
              <span className="text-[#F8FF00]">&quot;</span>
            </p>
          </h2>
        </div>
        <div className="border-2 border-white/50 border-dashed absolute w-full top-1/2 z-10"></div>
      </section>
      <section className="py-16 space-y-16 w-full ">
        {caseStudy.map((item, index) => (
          <div
            key={index}
            className="w-full sm:pl-28 pl-0 flex sm:flex-row flex-col items-start justify-center sm:gap-8 gap-2 cursor-pointer"
            onClick={() => router.push(item.page)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="w-full min-h-[250px] max-w-[600px] flex items-center sm:justify-end justify-center px-5 ">
              {hoveredIndex === index ? (
                <Image
                  src={item.hover}
                  width={300}
                  height={250}
                  alt="case study logo hover"
                  className="w-[300px] h-auto"
                />
              ) : (
                <Image
                  src={item.image}
                  width={300}
                  height={250}
                  alt="case study logo"
                  className="w-[300px] h-auto"
                />
              )}
            </div>
            <div className="font-Parkinsans sm:text-left text-center text-white/50  sm:pr-28 pr-5 py-10 border-b-2 border-dashed  border-white/50">
              {item.content}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
