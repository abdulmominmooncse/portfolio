import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Amazon from "./works/Amazon";
import Apple from "./works/Apple";
import Google from "./works/Google";
import ReactBD from "./works/ReactBD";
import Splash from "./works/Splash";

const Experience = () => {
  const [workReactbd, setWorkReactbd] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workApple, setWorkApple] = useState(false);
  const [workSplash, setWorkSplash] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);

  const handleReactbd = () => {
    setWorkReactbd(true);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleGoogle = () => {
    setWorkReactbd(false);
    setWorkGoogle(true);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleApple = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(true);
    setWorkSplash(false);
    setWorkAmazon(false);
  };
  const handleSplash = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(true);
    setWorkAmazon(false);
  };
  const handleAmazon = () => {
    setWorkReactbd(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(true);
  };
  return (
    <section
      id="experience"
      className="max-w-[1024px] mx-auto py-10 lg:py-32 px-10"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleReactbd}
            className={`${
              workReactbd
                ? "border-l-text-[#64ffda] text-[#64ffda]"
                : "border-l-hoverColor text-[#8892b0]"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            RactBD
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-text-[#64ffda] text-[#64ffda]"
                : "border-l-hoverColor text-[#8892b0]"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Google
          </li>
          <li
            onClick={handleApple}
            className={`${
              workApple
                ? "border-l-text-[#64ffda] text-[#64ffda]"
                : "border-l-hoverColor text-[#8892b0]"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Apple
          </li>
          <li
            onClick={handleSplash}
            className={`${
              workSplash
                ? "border-l-text-[#64ffda] text-[#64ffda]"
                : "border-l-hoverColor text-[#8892b0]"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Splash
          </li>
          <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "border-l-text-[#64ffda] text-[#64ffda]"
                : "border-l-hoverColor text-[#8892b0]"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Amazon
          </li>
        </ul>
        {workReactbd && <ReactBD />}
        {workGoogle && <Google />}
        {workApple && <Apple />}
        {workSplash && <Splash />}
        {workAmazon && <Amazon />}
      </div>
    </section>
  );
};

export default Experience;
