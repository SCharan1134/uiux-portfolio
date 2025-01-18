"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function About() {
  const router = useRouter();
  return (
    <div className="bg-white text-black ">
      <div
        className="absolute top-10 left-5 sm:left-10 cursor-pointer text-white  w-8 sm:w-24 h-8 sm:h-24 "
        onClick={() => router.push("/")}
      >
        <Image src={"/arrow-b.png"} width={50} height={50} alt="right arrow" />
        {/* <FiArrowLeft className="text-lg sm:text-7xl" /> */}
      </div>
      <section className="grid sm:grid-cols-2 grid-cols-1 gap-16 sm:px-28 px-5 py-16 items-center">
        <div className="flex justify-end items-center">
          <Image
            src={"/about-pp.png"}
            height={400}
            width={400}
            alt="profile picture"
          />
        </div>
        <div className="text-left">
          <h1 className="text-5xl font-fredericka">Me!</h1>
          <p className="font-Parkinsans sm:text-2xl text-lg">
            I’m <span className="font-bold"> Jaswanth Pindiboina</span>, from
            Bangalore, India—a renowned hub of innovation, rich culture, and
            culinary excellence.
          </p>
        </div>
        <div className="sm:hidden block">
          <Image
            src={"/about-into.png"}
            height={400}
            width={400}
            alt="profile picture"
          />
        </div>
        <div>
          <p className="font-Parkinsans sm:text-2xl text-lg sm:text-right text-left">
            After completing my undergraduate degree in Electronic Engineering,
            I pursued my <span className="font-bold"> passion for design.</span>{" "}
            As a self-taught graphic designer, I developed a strong foundation
            in visual communication. Subsequently, I became increasingly
            interested in user-centered design and enrolled in a Master&apos;s
            program in Interactive Design at SCAD to further my expertise in
            this field.
          </p>
        </div>
        <div className="sm:block hidden">
          <Image
            src={"/about-into.png"}
            height={400}
            width={400}
            alt="profile picture"
          />
        </div>
        <div className="flex justify-end items-center">
          <Image
            src={"/about-3.png"}
            height={400}
            width={400}
            alt="profile picture"
          />
        </div>
        <div>
          <p className="font-Parkinsans sm:text-2xl text-lg">
            As a <span className="font-bold"> harmonizer and idealist,</span> I
            bring together big ideas with a focus on creating designs that are
            beautiful, easy to use, and emotionally engaging.{" "}
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
