import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Associate Software Engineer",
    company: "L&T Technology Services",
    date: "2024 - Present",
    responsibilities: [
      "Implememting large scale application.",
      "Integration of ad logins, microsoft APIs in application.",
      "Adding Security to the application.",
      "Making User Interface Interative of application.",
    ],
  },
  {
    job: "Front-End Developer Intern",
    company: "Verzeo",
    date: "2022 - Past",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  //   {
  //     job: "Marketing and Spervisior Manager",
  //     company: "MilkBasket (Reliance)",
  //     date: "2022 - Past",
  //     responsibilities: [
  //       "On field doing marketing campigon.",
  //       "Handiling on Field deliveries .",
  //       "Supervising over 100 delivery agents at one time.",
  //     ],
  //   },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 1 ? (
              <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <FaArrowLeft className="text-7xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience;
