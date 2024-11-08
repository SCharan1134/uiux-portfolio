"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-[#1B1B1B]">
      <section className="h-screen w-screen flex flex-col justify-center items-center font-bold text-[168px] leading-tight overflow-hidden">
        <h1 className="whitespace-nowrap w-screen  mr-[1000px]">
          INSPIRE .{" "}
          <span>
            LEARN <span className="text-[rgb(226,51,42)]">.</span>{" "}
          </span>
          CREATE .
        </h1>
        <h1 className="whitespace-nowrap w-screen mr-[600px]">
          LEARN .{" "}
          <span>
            CREATE <span className="text-[#FDBF31]">.</span>{" "}
          </span>
          INSPIRE .
        </h1>
        <h1 className="whitespace-nowrap w-screen mr-[500px]">
          CREATE .{" "}
          <span>
            INSPIRE <span className="text-[#264475]">.</span>{" "}
          </span>
          LEARN .
        </h1>
      </section>
      <section className="h-screen w-screen flex justify-center items-center">
        <Image src={"/logo.png"} alt="hero" width={500} height={500} />
      </section>
      <section className="h-screen w-screen flex flex-col justify-center items-center px-20 py-20">
        <Image src={"/profile.png"} alt="hero" width={1200} height={500} />
      </section>
      <section className="w-screen flex flex-col justify-center items-center px-48 py-5">
        <p className="text-3xl leading-snug text-center">
          👋 I’m a <span className="text-[#FDBF31] font-bold">UX designer</span>{" "}
          who thinks even buttons should be easy and fun to use! I love creating
          designs that look good and make people happy, while keeping things
          simple and frustration-free. I bring empathy, humor, and a little bit
          of my own style to everything I create. 😊
        </p>

        <div className="my-20 flex items-center">
          <span className="inline-block h-px w-16 bg-white mr-8"></span>
          <button
            className="bg-transparent border border-white px-16 py-5 text-xl rounded-2xl"
            onClick={() => router.push("/about")}
          >
            Learn more about me
          </button>
          <span className="inline-block h-px w-16 bg-white ml-8"></span>
        </div>
      </section>
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
      <section className="w-screen flex flex-col justify-center items-center px-48 py-5">
        <div className="my-20 flex items-center">
          <span className="inline-block h-px w-16 bg-white mr-8"></span>
          <a href="/resume.pdf" target="_blank" download>
            <button className="bg-[#306CCE80] text-white  px-16 py-5 text-xl rounded-2xl">
              Download My Resume
            </button>
          </a>
          <span className="inline-block h-px w-16 bg-white ml-8"></span>
        </div>
        <div className="pb-32 flex gap-5">
          <div
            className="p-4 bg-[#383D38] rounded-full cursor-pointer"
            onClick={() =>
              router.push("https://www.instagram.com/jaswanthpindiboina")
            }
          >
            <Image src={"/insta.png"} width={40} height={40} alt="insta" />
          </div>
          <div className="p-4 bg-[#383D38] rounded-full cursor-pointer">
            <a href="mailto:jaswanth7779@gmail.com">
              <Image src={"/mail.png"} width={40} height={40} alt="mail" />
            </a>
          </div>
          <div
            className="p-4 bg-[#383D38] rounded-full cursor-pointer"
            onClick={() =>
              router.push("https://www.linkedin.com/in/jaswanthpindiboina/")
            }
          >
            <Image
              src={"/linkedin.png"}
              width={40}
              height={40}
              alt="linkedin"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
