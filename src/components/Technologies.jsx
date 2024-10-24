import { RiReactjsLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center font-bold text-5xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-500 p-4">
          <RiReactjsLine className="text-7xl  text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-500 p-4">
          <RiHtml5Line className="text-7xl  text-pink-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-500 p-4">
          <FaCss3Alt className="text-7xl  text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-500 p-4">
          <TbBrandJavascript className="text-7xl  text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-500 p-4">
          <FaGithub className="text-7xl  text-black-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
