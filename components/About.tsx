import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-[1024px] mx-auto py-10 lg:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-2/3 text-base text-[#8892b0] font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Noor Mohammad and I enjoy creating things that
            live on the internet. My interest in web development started back in
            2012 when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I had the privilege of working at an
            advertising agency, a start-up,{" "}
            <span className="text-[#64ffda]">
              a huge corporation, and a student-led design studio.
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem
            accusantium fugiat veritatis, quidem repellat{" "}
            <span className="text-[#64ffda]">
              ab natus possimus? Sint, accusamus!
            </span>
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            ullam eligendi dolorum nostrum possimus quos iusto magnam ut esse
            recusandae.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-['Inter',sans-serif] grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-[#64ffda]">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#64ffda]">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#64ffda]">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#64ffda]">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#64ffda]">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#64ffda]">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#64ffda]">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#64ffda]">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lg:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lg:inline-block absolute w-full h-80 bg-text-[#64ffda]/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lg:inline-flex w-full h-80 border-2 border-text-[#64ffda] rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
