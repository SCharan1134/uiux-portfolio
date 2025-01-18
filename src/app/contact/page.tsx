"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
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
      <section className="w-full h-[100vh] flex sm:justify-between justify-start gap-5 items-center flex-col py-28">
        <button
          onClick={() =>
            router.push("https://www.linkedin.com/in/jaswanthpindiboina/")
          }
          className="font-fredericka border-2 border-white text-white hover:text-[#F8FF00] hover:border-[#F8FF00] rounded-full px-8 py-5 sm:text-7xl text-3xl sm:min-w-[600px] min-w-[300px]"
        >
          LINKEDIN
        </button>
        <button
          onClick={() =>
            router.push(
              "https://www.instagram.com/jaswanthpindiboina?igsh=cWxsa2NtaWltd3Yw"
            )
          }
          className="font-fredericka border-2 border-white text-white hover:text-[#F8FF00] hover:border-[#F8FF00] rounded-full px-8 py-5 sm:text-7xl text-3xl sm:min-w-[600px] min-w-[300px]"
        >
          INSTAGRAM
        </button>
        <button
          //   onClick={() => window.open("mailto:jaswanth7779@gmail.com")}
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=jaswanth7779@gmail.com"
            )
          }
          className="font-fredericka border-2 border-white text-white hover:text-[#F8FF00] hover:border-[#F8FF00] rounded-full px-8 py-5 sm:text-7xl text-3xl sm:min-w-[600px] min-w-[300px]"
        >
          GMAIL
        </button>
      </section>
    </div>
  );
}
