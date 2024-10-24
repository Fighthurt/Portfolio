import { EXPERIENCES } from "../assets/constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-5xl font-semibold text-neutral-900">
        Education & Certification
      </h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-start">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-800  font-bold">
                {experience.year}
              </p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <p className="text-neutral-900 font-medium text-2xl">
                {experience.School}
              </p>
              <p className="text-neutral-800 text-1xl font-semibold">
                {experience.discipline}
                    </p>
                    <span className="text-lg font-bold  text-neutral-700 ">
                  {experience.company}
                </span>
              <h6 className="mb-2 text-lg  text-neutral-900">
                {experience.role} 
               
              </h6>
              <p className=" text-neutral-500 font-semibold">{experience.award}</p>
              <p className="mb-4 text-neutral-700 font-semibold">
                {experience.description}
              </p>

              <p className="text-neutral-800 font-bold">{experience.cohort}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
