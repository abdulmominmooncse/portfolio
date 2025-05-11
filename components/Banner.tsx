import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-[1140px] mx-auto py-10 md:py-24 flex flex-col gap-4 lg:gap-8 md:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-['Inter',sans-serif] tracking-wide text-[#64ffda]"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lg:text-6xl font-['Inter',sans-serif] font-semibold flex flex-col"
      >
        Noor Mohammad.
        <span className="text-[#8892b0] mt-2 lg:mt-4">
          I build things for the web.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-[#8892b0] font-medium"
      >
        I am a web developer with 4+ years of experience in React. I have a
        strong foundation in front-end & back-end development and am skilled in
        creating user-friendly and responsive web applications using React and
        its ecosystem.{" "}
        <a href="https://www.noormohammad.live/" target="_blank">
          {" "}
          <span className="text-[#64ffda] inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn more
            <span className="absolute w-full h-[1px] bg-text-[#64ffda] left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <a href="https://github.com/noorjsdivs" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-['Inter',sans-serif] border border-text-[#64ffda] rounded-md text-[#64ffda] tracking-wide hover:bg-[rgba(100,255,218,0.1)] duration-300"
        >
          Check out my project!
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
