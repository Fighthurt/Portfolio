import { HERO_CONTENT } from "../assets/constants";
import profilePic from "../assets/projects/AyeniTeniolaProfile.jpg";
import { motion } from "framer-motion";


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay}
    }
})
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight lg:mt-16 whitespace-nowrap"
            >
              Ayeni Teniola Mayowa
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl lg:text-4xl tracking-tight text-transparent mb-4"
            >
              Junior Frontend Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-normal tracking-tighter text-2xl"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:p-8">
                  <motion.img initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{duration:1, delay:1.2}}
            src={profilePic}
            alt="Ayeni Teniola"
            className="w-60 h-50 object-cover mr-4 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
