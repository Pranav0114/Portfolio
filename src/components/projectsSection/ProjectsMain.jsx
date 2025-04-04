import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "My Money",
    description: "Tracks Users Expenses",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Interview Management Portal",
    description: "Manage all the data of interviewed candidates",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "Transformer Based human Tumor classification",
    description: "In this application classify the human tumor by using x-rays",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              description={item.description}
              align={item.align}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
