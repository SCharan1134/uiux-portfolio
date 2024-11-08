"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

function Waybot() {
  const router = useRouter();
  return (
    <div>
      <div
        className="bg-[#DDE156] absolute top-10 mx-32  cursor-pointer text-[#1C1B1F] rounded-full w-10 flex justify-center items-center h-10"
        onClick={() => router.push("/")}
      >
        <FiArrowLeft />
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
