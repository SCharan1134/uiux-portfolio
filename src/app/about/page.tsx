"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

function About() {
  const router = useRouter();
  return (
    <div className="relative pb-10 px-20 font-pangolin text-[40px]">
      <div
        className="bg-[#DDE156] absolute top-5 cursor-pointer text-[#1C1B1F] rounded-full w-10 flex justify-center items-center h-10"
        onClick={() => router.push("/")}
      >
        <FiArrowLeft />
      </div>
      <section className="w-full h-screen flex justify-center items-center">
        <Image src={"/about.png"} width={1150} height={520} alt="about" />
      </section>
      <section className="w-full px-20 py-5 flex flex-col justify-start items-center">
        <Image src={"/about_art_1.png"} width={700} height={700} alt="fort" />
        <div className="w-full flex flex-col justify-between items-center text-center px-20 text-xl gap-10 text-[#BBBBBB]">
          <p>Hello !! I’m Jash.</p>
          <p>
            Firstly, i’m from the vibrant city of Bengaluru, India – the land of
            techies, temples, terrific and food. I’m pretty chill and go with
            the flow type of a person. I like Hiking up hills, perfecting my
            yoga poses, strolling through museums, binge-watching documentaries,
            and doodling for fun!
          </p>
          <p>Oh, and I love a good chat – I’m all ears!</p>
          <p>
            I can switch between Hindi, Kannada, English, Telugu, and even throw
            in a dash of Spanish when needed. Multilingual and always ready to
            learn something new!
          </p>
        </div>
        <Image
          src={"/about_art_2.png"}
          width={200}
          height={200}
          alt="fort"
          className="my-20"
        />
        <div className="w-full flex flex-col justify-between items-center text-center px-20 text-xl gap-10 text-[#BBBBBB]">
          <p>
            “As a harmonizer and idealist, I’m all about combining big-picture
            thinking with a love for collaboration. I focus on building strong
            connections and making sure everyone’s voice is heard.
          </p>
          <p>
            I like blending beauty, usability, and emotion to craft experiences
            that inspire. Plus, I’m great at bringing different perspectives
            together and keeping the creative energy high!”
          </p>
        </div>
        <Image
          src={"/about_art_3.png"}
          width={200}
          height={200}
          alt="fort"
          className="my-20"
        />
        <div className="w-full flex flex-col justify-between items-center text-center px-20 text-xl gap-10 text-[#BBBBBB]">
          <p>
            I’m all about creating seamless, user-focused experiences from start
            to finish! Whether it’s diving into UX research to understand user
            needs or conducting competitor analysis to see what’s out there,
            I’ve got it covered. Crafting personas and empathy maps helps me get
            into the user’s shoes and map out the perfect user journey and user
            flow.
          </p>
          <p>
            From building strong information architecture to setting up a design
            system that keeps things consistent, I love creating visual
            guidelines. My creative spark shines through in moodboards and
            wireframes, and when it’s time to get serious, I turn ideas into
            reality with high-fidelity prototypes and polished mock-ups.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
