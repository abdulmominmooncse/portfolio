import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-[1140px] mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-['Inter',sans-serif] text-lg text-[#64ffda] font-semibold flex items-center tracking-wide">
        04. What’s Next?
      </p>
      <h2 className="font-['Inter',sans-serif] text-5xl font-semibold">
        Get In Touch
      </h2>
      <p className="max-w-[600px] text-center text-[#8892b0]">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>

      <a href="mailto:noor.jsdivs@gmail.com">
        <button className="w-40 h-14 border border-text-[#64ffda] mt-6 font-['Inter',sans-serif] text-sm text-[#64ffda] tracking-wider rounded-md hover:bg-[rgba(100,255,218,0.1)] duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
