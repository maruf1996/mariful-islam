import { motion } from "framer-motion";
import React from "react";

import project7 from "../../img/projects/cuda-html.png";
import project8 from "../../img/projects/fodest-html.png";
import project2 from "../../img/projects/light-jobs.png";
import project1 from "../../img/projects/muslim-pathagar.png";
import project3 from "../../img/projects/project-3.jpg";
import project4 from "../../img/projects/project-4.jpg";
import project5 from "../../img/projects/project-5.jpg";
import project6 from "../../img/projects/project-6.jpg";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <section className="lg:px-14 px-3 lg:pt-10 mt-5">
        <h1
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="lg:text-5xl text-4xl font-black"
        >
          Projects
        </h1>
        <div className="grid grid-cols-2 lg:gap-x-6">
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="lg:col-span-1 col-span-2"
          >
            <a
              href="https://muslim-pathagar.vercel.app/"
              target={`_blank`}
              className="card p-4 bg-pink-50 shadow-xl mt-7"
            >
              <img className="w-full h-44" src={project1} alt="" />
              <h4 className="text-gray-500 mt-3 mb-1">Full Stack Project</h4>
              <h1 className="lg:text-2xl text-xl font-semibold">
                Muslim Pathagar
              </h1>
            </a>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="lg:col-span-1 col-span-2"
          >
            <a
              href="https://light-jobs.vercel.app/"
              target={`_blank`}
              className="card p-4 bg-red-50 shadow-xl mt-7"
            >
              <img className="w-full h-44" src={project2} alt="" />
              <h4 className="text-gray-500 mt-3 mb-1">Full Stack Project</h4>
              <h1 className="lg:text-2xl text-xl font-semibold">Light Jobs</h1>
            </a>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="lg:col-span-1 col-span-2"
          >
            <a
              href="https://river-travels.vercel.app/"
              target={`_blank`}
              className="card p-4 bg-red-50 shadow-xl mt-7"
            >
              <img className="w-full h-44" src={project3} alt="" />
              <h4 className="text-gray-500 mt-3 mb-1">Full Stack Project</h4>
              <h1 className="lg:text-2xl text-xl font-semibold">
                River Travels
              </h1>
            </a>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="lg:col-span-1 col-span-2"
          >
            <a
              href="https://clocki-website.web.app/"
              target={`_blank`}
              className="card p-4 bg-teal-50 shadow-xl mt-7"
            >
              <img className="w-full h-44" src={project4} alt="" />
              <h4 className="text-gray-500 mt-3 mb-1">Front end Project</h4>
              <h1 className="lg:text-2xl text-xl font-semibold">Resale Cars</h1>
            </a>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="lg:col-span-1 col-span-2"
          >
            <a
              href="https://web-development-learning-ac9a2.web.app/"
              target={`_blank`}
              className="card p-4 bg-teal-50 shadow-xl mt-7"
            >
              <img className="w-full h-44" src={project5} alt="" />
              <h4 className="text-gray-500 mt-3 mb-1">React Project</h4>
              <h1 className="lg:text-2xl text-xl font-semibold">Web School</h1>
            </a>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="lg:col-span-1 col-span-2"
          >
            <a
              href="https://maruf-web-quiz.netlify.app/"
              target={`_blank`}
              className="card p-4 bg-teal-50 shadow-xl mt-7"
            >
              <img className="w-full h-44" src={project6} alt="" />
              <h4 className="text-gray-500 mt-3 mb-1">React Project</h4>
              <h1 className="lg:text-2xl text-xl font-semibold">Web Quiz</h1>
            </a>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="lg:col-span-1 col-span-2"
          >
            <a
              href="https://cuda-psd-html.netlify.app/"
              target={`_blank`}
              className="card p-4 bg-teal-50 shadow-xl mt-7"
            >
              <img className="w-full h-44" src={project7} alt="" />
              <h4 className="text-gray-500 mt-3 mb-1">PSD to HTML</h4>
              <h1 className="lg:text-2xl text-xl font-semibold">Cuda</h1>
            </a>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="lg:col-span-1 col-span-2"
          >
            <a
              href="https://fodest-figma-html.netlify.app/"
              target={`_blank`}
              className="card p-4 bg-teal-50 shadow-xl mt-7"
            >
              <img className="w-full h-44" src={project8} alt="" />
              <h4 className="text-gray-500 mt-3 mb-1">Figma To HTML</h4>
              <h1 className="lg:text-2xl text-xl font-semibold">Fodest</h1>
            </a>
          </div>
        </div>
      </section>
      <section className="px-14 mt-8"></section>
      <section>
        <p className="text-center lg:p-7 py-6 bg-slate-100 rounded-lg text-gray-600 text-1xl mt-1">
          © 2023 All Rights Reserved by mariful-islam.
        </p>
      </section>
    </motion.div>
  );
};

export default Projects;
