"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

function Wiggles() {
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
