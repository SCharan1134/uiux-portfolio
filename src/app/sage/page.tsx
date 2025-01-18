"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function FoodBuddy() {
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
      <section className="w-full h-screen flex justify-center items-center">
        {/* <Image
          src={"/wiggles_full.png"}
          width={1920}
          height={21039}
          alt="about"
        /> */}
        <h1 className="sm:text-9xl text-2xl text-center">
          Page is under Development
        </h1>
      </section>
    </div>
  );
}

export default FoodBuddy;
