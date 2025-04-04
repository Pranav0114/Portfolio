import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        Hi, I'm Pranav — a passionate Full Stack Web Developer currently working
        at L&T Technology Services. I specialize in crafting dynamic frontends
        with React and building robust backends using Spring Boot. With a strong
        focus on clean code and innovative solutions, I aim to deliver seamless
        and efficient digital experiences. Beyond full-stack development, I also
        bring creative expertise to the table. I’ve led and collaborated with my
        own team to design stunning, high-performance websites, manage engaging
        social media content, and craft beautiful, eye-catching product catalogs
        that help brands stand out. Let’s build something extraordinary together
        — whether it’s a digital product, an online presence, or a complete
        brand experience!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan ">
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
