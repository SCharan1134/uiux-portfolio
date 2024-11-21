"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

function Wiggles() {
  const router = useRouter();
  return (
    <div>
      <div
        className="bg-[#DDE156] absolute top-5 left-5 sm:left-10 p-2 cursor-pointer text-[#1C1B1F] rounded-full w-8 sm:w-10 h-8 sm:h-10 flex justify-center items-center"
        onClick={() => router.push("/")}
      >
        <FiArrowLeft className="text-lg sm:text-xl" />
      </div>
      <section className="w-full flex justify-center items-center">
        <Image
          src={"/wiggles_full.png"}
          width={1920}
          height={21039}
          alt="about"
        />
      </section>
    </div>
  );
}

export default Wiggles;
