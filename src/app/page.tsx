"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define responsive animations
  const translateX1 = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [-340, -1000] : [-500, -1000]
  );
  const translateX2 = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [-305, 800] : [-300, 800]
  );
  const translateX3 = useTransform(
    scrollYProgress,
    [0, 0.5],
    isMobile ? [-350, -600] : [-200, -600]
  );

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

  return (
    <div className="bg-[#1B1B1B] text-white">
      {/* hero */}
      <section className="lg:h-[100vh] pt-10 w-screen flex flex-col justify-center items-center font-bold lg:text-[155px] md:text-[120px] text-[80px] leading-tight overflow-hidden">
        <motion.h1
          className="whitespace-nowrap w-screen"
          style={{ x: translateX1 }}
        >
          <span className="text-border">INSPIRE . </span>
          <span className="text-white">
            LEARN <span className="text-[rgb(226,51,42)]">.</span>{" "}
          </span>
          <span className="text-border">CREATE .</span>
        </motion.h1>
        <motion.h1
          className="whitespace-nowrap w-screen"
          style={{ x: translateX2 }}
        >
          <span className="text-border">LEARN . </span>
          <span className="text-white">
            CREATE <span className="text-[#FDBF31]">.</span>{" "}
          </span>
          <span className="text-border">INSPIRE .</span>
        </motion.h1>
        <motion.h1
          className="whitespace-nowrap w-screen"
          style={{ x: translateX3 }}
        >
          <span className="text-border">CREATE . </span>
          <span className="text-white">
            INSPIRE <span className="text-[#264475]">.</span>{" "}
          </span>
          <span className="text-border">LEARN .</span>
        </motion.h1>
      </section>
      {/* logo */}
      <section className="lg:h-[100vh] w-screen flex justify-center items-center">
        <Image src={"/logo.png"} alt="hero" width={500} height={500} />
      </section>
      {/* profile img */}
      <section
        ref={profileRef}
        className="h-screen w-screen flex flex-col justify-center items-center px-8 sm:px-12 md:px-16 py-10 sm:py-16 md:py-20"
      >
        <motion.div
          initial="hidden"
          animate={profileInView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Image
            src={"/profile.png"}
            alt="hero"
            width={1400}
            height={500}
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[1400px]"
          />
        </motion.div>
      </section>
      {/* intro */}
      <section
        ref={ref}
        className="w-screen text-white text-[35px] flex flex-col justify-center items-center px-8 sm:px-12 md:px-24 lg:px-48 py-5 font-degular"
      >
        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug text-center font-extralight"
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
          className="my-10 sm:my-16 lg:my-20 flex items-center flex-wrap justify-center font-degular font-semibold"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <span className="inline-block h-px w-12 sm:w-16 bg-white mr-4 sm:mr-8"></span>
          <button
            className="bg-transparent border border-white px-8 sm:px-12 lg:px-16 py-3 sm:py-4 lg:py-5 text-base sm:text-lg md:text-xl rounded-xl"
            onClick={() => router.push("/about")}
          >
            Learn more about me
          </button>
          <span className="inline-block h-px w-12 sm:w-16 bg-white ml-4 sm:ml-8"></span>
        </motion.div>
      </section>

      {/* case studies */}
      <section className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="w-full max-w-full overflow-x-scroll flex gap-6 sm:gap-8 lg:gap-10 whitespace-nowrap pl-[10vw] sm:pl-[20vw] lg:pl-[30vw] px-6 sm:px-12 lg:px-20 no-scrollbar">
          <div
            className="cursor-pointer w-[300px] sm:w-[400px] lg:w-[550px] h-[300px] sm:h-[400px] lg:h-[550px] bg-[#306CCE80] flex justify-center items-center flex-shrink-0 rounded-2xl lg:rounded-3xl"
            onClick={() => router.push("/wiggles")}
          >
            <Image
              src={"/wiggles.png"}
              width={250}
              height={150}
              alt="wiggles"
            />
          </div>
          <div
            className="cursor-pointer w-[300px] sm:w-[400px] lg:w-[550px] h-[300px] sm:h-[400px] lg:h-[550px] bg-[#306CCE80] flex justify-center items-center flex-shrink-0 rounded-2xl lg:rounded-3xl"
            onClick={() => router.push("/waybot")}
          >
            <Image
              src={"/waybot_txt.png"}
              width={300}
              height={150}
              alt="waybot"
            />
          </div>
          <div
            className="cursor-pointer w-[300px] sm:w-[400px] lg:w-[550px] h-[300px] sm:h-[400px] lg:h-[550px] bg-[#306CCE80] flex justify-center items-center flex-shrink-0 rounded-2xl lg:rounded-3xl"
            onClick={() => router.push("/foodbuddy")}
          >
            <Image
              src={"/foodbuddy_logo.png"}
              width={200}
              height={150}
              alt="foodbuddy"
            />
          </div>
          <div
            className="cursor-pointer w-[300px] sm:w-[400px] lg:w-[550px] h-[300px] sm:h-[400px] lg:h-[550px] bg-[#306CCE80] flex justify-center items-center flex-shrink-0 rounded-2xl lg:rounded-3xl"
            onClick={() => router.push("/dryfold")}
          >
            <Image
              src={"/dryfold_logo.png"}
              width={300}
              height={150}
              alt="dryfold"
            />
          </div>
        </div>
      </section>

      {/* dowload */}
      <section
        ref={downloadRef}
        className="w-screen flex flex-col justify-center items-center px-8 sm:px-12 md:px-24 lg:px-48 py-5"
      >
        <motion.div
          className="my-10 sm:my-16 lg:my-20 flex items-center flex-wrap justify-center gap-4 font-degular font-semibold"
          initial="hidden"
          animate={downloadInView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block h-px w-4 sm:w-16 bg-white"></span>
          <a href="/resume.pdf" target="_blank" download>
            <motion.button
              className="bg-[#306CCE80] text-white px-8 sm:px-12 lg:px-16 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl rounded-xl"
              whileHover={{ scale: 1.1 }} // Adds hover effect
            >
              Download My Resume
            </motion.button>
          </a>
          <span className="inline-block h-px w-4 sm:w-16 bg-white"></span>
        </motion.div>
        <motion.div
          className="pb-16 sm:pb-24 lg:pb-32 flex gap-3 sm:gap-5 flex-wrap justify-center"
          initial="hidden"
          animate={downloadInView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div
            className="p-3 sm:p-4 bg-[#383D38] rounded-full cursor-pointer"
            onClick={() =>
              router.push("https://www.instagram.com/jaswanthpindiboina")
            }
            variants={iconVariants}
            transition={{ duration: 0.6 }}
          >
            <Image src={"/insta.png"} width={30} height={30} alt="insta" />
          </motion.div>
          <motion.div
            className="p-3 sm:p-4 bg-[#383D38] rounded-full cursor-pointer"
            variants={iconVariants}
            transition={{ duration: 0.6 }}
          >
            <a href="mailto:jaswanth7779@gmail.com">
              <Image src={"/mail.png"} width={30} height={30} alt="mail" />
            </a>
          </motion.div>
          <motion.div
            className="p-3 sm:p-4 bg-[#383D38] rounded-full cursor-pointer"
            onClick={() =>
              router.push("https://www.linkedin.com/in/jaswanthpindiboina/")
            }
            variants={iconVariants}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={"/linkedin.png"}
              width={30}
              height={30}
              alt="linkedin"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
