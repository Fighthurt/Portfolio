import { ABOUT_TEXT } from "../assets/constants";
import aboutImg from "../assets/projects/about.jpg";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-6xl font-bold">
        About <span className="text-neutral-300 font-bold">Me</span>
      </h2>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-start">
          <img
            src={aboutImg}
            alt="about"
            className="w-2/5 h-auto max-w-xs sm:max-w-sm md:max-w-md mr-4 rounded-2xl"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-start">
          <p className="my-2 max-w-xl py-2 ml-6 mb-0 text-2xl">{ABOUT_TEXT}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
