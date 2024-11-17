"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

function About() {
  const router = useRouter();
  return (
    <div className="relative pb-10 px-5 sm:px-10 lg:px-20 font-pangolin text-[20px] sm:text-[30px] lg:text-[40px]">
      {/* Back Button */}
      <div
        className="bg-[#DDE156] absolute top-5 left-5 sm:left-10 p-2 cursor-pointer text-[#1C1B1F] rounded-full w-8 sm:w-10 h-8 sm:h-10 flex justify-center items-center"
        onClick={() => router.push("/")}
      >
        <FiArrowLeft className="text-lg sm:text-xl" />
      </div>

      {/* Hero Section */}
      <section className="w-full h-[70vh]  flex justify-center items-center mb-32">
        <Image
          src={"/about.png"}
          width={1450}
          height={520}
          alt="about"
          className="w-full max-w-[1150px] object-contain filter grayscale"
        />
      </section>

      {/* Content Section */}
      <section className="w-full px-5 sm:px-10 lg:px-20 py-5 flex flex-col justify-start items-center">
        {/* Art Image 1 */}
        <Image
          src={"/about_art_1.png"}
          width={600}
          height={700}
          alt="fort"
          className="w-full max-w-[700px] object-contain"
        />

        {/* Text Block 1 */}
        <div className="w-full flex flex-col justify-between items-center text-center px-2 sm:px-10 lg:px-20 text-sm sm:text-base lg:text-xl gap-5 sm:gap-10 text-[#BBBBBB]">
          <p>Hello !! I’m Jash.</p>
          <p>
            Firstly, I’m from the vibrant city of Bengaluru, India – the land of
            techies, temples, terrific food, and fun. I’m pretty chill and go
            with the flow type of a person. I like hiking up hills, perfecting
            my yoga poses, strolling through museums, binge-watching
            documentaries, and doodling for fun!
          </p>
          <p>Oh, and I love a good chat – I’m all ears!</p>
          <p>
            I can switch between Hindi, Kannada, English, Telugu, and even throw
            in a dash of Spanish when needed. Multilingual and always ready to
            learn something new!
          </p>
        </div>

        {/* Art Image 2 */}
        <Image
          src={"/about_art_2.png"}
          width={150}
          height={100}
          alt="art"
          className="my-10 w-32 sm:w-48 lg:w-56"
        />

        {/* Text Block 2 */}
        <div className="w-full flex flex-col justify-between items-center text-center px-2 sm:px-10 lg:px-20 text-sm sm:text-base lg:text-xl gap-5 sm:gap-10 text-[#BBBBBB]">
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

        {/* Art Image 3 */}
        <Image
          src={"/about_art_3.png"}
          width={200}
          height={200}
          alt="art"
          className="my-10 w-32 sm:w-48 lg:w-56"
        />

        {/* Text Block 3 */}
        <div className="w-full flex flex-col justify-between items-center text-center px-2 sm:px-10 lg:px-20 text-sm sm:text-base lg:text-xl gap-5 sm:gap-10 text-[#BBBBBB]">
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
