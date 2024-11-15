"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const translateX1 = useTransform(scrollYProgress, [0, 1], [-500, -1000]);
  const translateX2 = useTransform(scrollYProgress, [0, 1], [-300, 800]);
  const translateX3 = useTransform(scrollYProgress, [0, 0.5], [-200, -600]);

  const ref = useRef(null);
  const profileRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const downloadRef = useRef(null);
  const downloadInView = useInView(downloadRef, { once: true });
  const profileInView = useInView(profileRef, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Initially hidden and shifted down
    visible: { opacity: 1, y: 0 }, // Fully visible and aligned
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Hidden with smaller scale
    visible: { opacity: 1, scale: 1 }, // Fully visible and normal scale
  };

  // const scrollVariants = {
  //   animate: {
  //     x: [0, -1000], // Scroll from 0px to -1000px
  //     transition: {
  //       x: {
  //         repeat: Infinity,
  //         repeatType: "loop",
  //         duration: 10,
  //         ease: "linear",
  //       },
  //     },
  //   },
  // };
  return (
    <div className="bg-[#1B1B1B]">
      {/* hero */}
      <section className="h-screen w-screen flex flex-col justify-center items-center font-bold text-[168px] leading-tight overflow-hidden">
        <motion.h1
          className="whitespace-nowrap w-screen"
          style={{ x: translateX1 }}
        >
          <span className="text-border">INSPIRE . </span>
          <span>
            LEARN <span className="text-[rgb(226,51,42)]">.</span>{" "}
          </span>
          <span className="text-border">CREATE .</span>
        </motion.h1>
        <motion.h1
          className="whitespace-nowrap w-screen"
          style={{ x: translateX2 }}
        >
          <span className="text-border">LEARN . </span>
          <span>
            CREATE <span className="text-[#FDBF31]">.</span>{" "}
          </span>
          <span className="text-border">INSPIRE .</span>
        </motion.h1>
        <motion.h1
          className="whitespace-nowrap w-screen"
          style={{ x: translateX3 }}
        >
          <span className="text-border">CREATE . </span>
          <span>
            INSPIRE <span className="text-[#264475]">.</span>{" "}
          </span>
          <span className="text-border">LEARN .</span>
        </motion.h1>
      </section>
      {/* logo */}
      <section className="h-[100vh] w-screen flex justify-center items-center">
        <motion.div style={{ rotate }}>
          <Image src={"/logo.png"} alt="hero" width={500} height={500} />
        </motion.div>
      </section>
      {/* profile img */}
      <section
        ref={profileRef}
        className="h-screen w-screen flex flex-col justify-center items-center px-20 py-20"
      >
        <motion.div
          initial="hidden"
          animate={profileInView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image src={"/profile.png"} alt="hero" width={1200} height={500} />
        </motion.div>
      </section>
      {/* intro */}
      <section
        ref={ref}
        className="w-screen text-[35px] flex flex-col justify-center items-center px-48 py-5"
      >
        <motion.p
          className="text-3xl leading-snug text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          👋 I’m a <span className="text-[#FDBF31] font-bold">UX designer</span>{" "}
          who thinks even buttons should be easy and fun to use! I love creating
          designs that look good and make people happy, while keeping things
          simple and frustration-free. I bring empathy, humor, and a little bit
          of my own style to everything I create. 😊
        </motion.p>

        <motion.div
          className="my-20 flex items-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <span className="inline-block h-px w-16 bg-white mr-8"></span>
          <button
            className="bg-transparent border border-white px-16 py-5 text-xl rounded-2xl"
            onClick={() => router.push("/about")}
          >
            Learn more about me
          </button>
          <span className="inline-block h-px w-16 bg-white ml-8"></span>
        </motion.div>
      </section>
      {/* case studies */}
      <section className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="w-full max-w-full overflow-x-scroll flex gap-10 whitespace-nowrap pl-[30vw] px-20 no-scrollbar">
          <div
            className="cursor-pointer w-[550px] h-[550px] bg-[#306CCE80] flex justify-center items-center flex-shrink-0 rounded-3xl"
            onClick={() => router.push("/wiggles")}
          >
            <Image
              src={"/wiggles.png"}
              width={250}
              height={250}
              alt="wiggles"
            />
          </div>
          <div
            className="w-[550px] h-[550px] bg-[#306CCE80] flex justify-center items-center flex-shrink-0 rounded-3xl"
            onClick={() => router.push("/waybot")}
          >
            <Image
              src={"/waybot_txt.png"}
              width={250}
              height={250}
              alt="wiggles"
            />
          </div>
          <div
            className="w-[550px] h-[550px] bg-[#306CCE80] flex justify-center items-center flex-shrink-0 rounded-3xl"
            onClick={() => router.push("/foodbuddy")}
          >
            <Image
              src={"/foodbuddy_logo.png"}
              width={250}
              height={250}
              alt="wiggles"
            />
          </div>
          <div
            className="w-[550px] h-[550px] bg-[#306CCE80] flex justify-center items-center flex-shrink-0 rounded-3xl"
            onClick={() => router.push("/dryfold")}
          >
            <Image
              src={"/dryfold_logo.png"}
              width={250}
              height={250}
              alt="wiggles"
            />
          </div>
        </div>
      </section>
      {/* dowload */}
      <section
        ref={downloadRef}
        className="w-screen flex flex-col justify-center items-center px-48 py-5"
      >
        <motion.div
          className="my-20 flex items-center"
          initial="hidden"
          animate={downloadInView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block h-px w-16 bg-white mr-8"></span>
          <a href="/resume.pdf" target="_blank" download>
            <motion.button
              className="bg-[#306CCE80] text-white px-16 py-5 text-xl rounded-2xl"
              whileHover={{ scale: 1.1 }} // Adds hover effect
            >
              Download My Resume
            </motion.button>
          </a>
          <span className="inline-block h-px w-16 bg-white ml-8"></span>
        </motion.div>
        <motion.div
          className="pb-32 flex gap-5"
          initial="hidden"
          animate={downloadInView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // Adds a delay for staggered animation
        >
          <motion.div
            className="p-4 bg-[#383D38] rounded-full cursor-pointer"
            onClick={() =>
              router.push("https://www.instagram.com/jaswanthpindiboina")
            }
            variants={iconVariants}
            transition={{ duration: 0.6 }}
          >
            <Image src={"/insta.png"} width={40} height={40} alt="insta" />
          </motion.div>
          <motion.div
            className="p-4 bg-[#383D38] rounded-full cursor-pointer"
            variants={iconVariants}
            transition={{ duration: 0.6 }}
          >
            <a href="mailto:jaswanth7779@gmail.com">
              <Image src={"/mail.png"} width={40} height={40} alt="mail" />
            </a>
          </motion.div>
          <motion.div
            className="p-4 bg-[#383D38] rounded-full cursor-pointer"
            onClick={() =>
              router.push("https://www.linkedin.com/in/jaswanthpindiboina/")
            }
            variants={iconVariants}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={"/linkedin.png"}
              width={40}
              height={40}
              alt="linkedin"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
