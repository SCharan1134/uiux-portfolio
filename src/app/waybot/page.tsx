"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Waybot() {
  const router = useRouter();
  return (
    <div>
      <div
        className="absolute top-10 left-5 sm:left-10 cursor-pointer text-white  w-8 sm:w-24 h-8 sm:h-24 "
        onClick={() => router.push("/")}
      >
        <Image src={"/arrow-w.png"} width={50} height={50} alt="right arrow" />
        {/* <FiArrowLeft className="text-lg sm:text-7xl" /> */}
      </div>
      <section className="w-full flex justify-center items-center">
        <Image src={"/waybot.png"} width={1920} height={21039} alt="about" />
      </section>
      {/* <section className="w-full h-screen py-5 flex justify-center items-center">
        <video src="/waybot_v.mp4" width={1050} height={520} controls />
      </section> */}
    </div>
  );
}

export default Waybot;
