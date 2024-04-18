import { motion } from "framer-motion";
import React from "react";
import {
  FaBacterium,
  FaBuffer,
  FaCode,
  FaCogs,
  FaReacteurope,
  FaRegFileCode,
} from "react-icons/fa";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <section className="2xl:px-14 px-6 2xl:pt-10 mt-5">
        <h1
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="lg:text-5xl text-4xl font-black"
        >
          About Me
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="2xl:mt-6 mt-3 leading-7 text-gray-500 text-justify"
        >
          I'm a Front End Developer from Dhaka, Bangladesh, working in web
          development and Front end Development, I enjoy turning complex
          problems into simple, beautiful and intuitive designs.
        </p>
        <p
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="mt-6 leading-7 text-gray-500 text-justify"
        >
          My aim is to bring across your message and identity in the most
          creative way. I Working web development and Front end Development for
          many famous brand companies.
        </p>
      </section>
      <section className="2xl:p-14 p-6 mt-3 2xl:m-0">
        <h1
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="2xl:text-4xl text-2xl font-black mb-6"
        >
          What I do!
        </h1>
        <div className="grid 2xl:gap-10 gap-8 grid-cols-4">
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="card p-6 col-span-4 2xl:col-span-2 bg-fuchsia-50 shadow-xl"
          >
            <div className="flex">
              <p className="lg:text-4xl text-2xl text-pink-400 lg:mr-4 mr-2">
                <FaRegFileCode />
              </p>
              <div className="">
                <h4 className="font-bold">Web Design</h4>
                <p className="mt-2 leading-7 text-justify">
                  I will make a clean, unique and professional looking website.
                  My design must be responsive in all devices, pixel perfect,
                  and clean coding.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="card p-6 col-span-4 2xl:col-span-2 bg-violet-50 shadow-xl"
          >
            <div className="flex">
              <p className="lg:text-4xl text-2xl text-fuchsia-400 lg:mr-4 mr-2">
                <FaCode />
              </p>
              <div className="">
                <h4 className="font-bold">Web Development</h4>
                <p className="mt-2 leading-7 text-justify">
                  I have been learning and working with web development for
                  almost 2 years. Also working on frontend and backend with HTML
                  CSS bootstrap tailwind javascript.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="card p-6 col-span-4 2xl:col-span-2 bg-sky-50 shadow-xl"
          >
            <div className="flex">
              <p className="lg:text-4xl text-2xl text-orange-500 lg:mr-4 mr-2">
                <FaReacteurope />
              </p>
              <div className="">
                <h4 className="font-bold">React Developer</h4>
                <p className="mt-2 leading-7 text-justify">
                  React is currently a very popular framework, I am working on
                  various React technologies including React, React Router DOM,
                  React Redux, React Icon, etc.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="card p-6 col-span-4 2xl:col-span-2 bg-fuchsia-50 shadow-xl"
          >
            <div className="flex">
              <p className="lg:text-4xl text-2xl text-pink-400 lg:mr-4 mr-2">
                <FaCogs />
              </p>
              <div className="">
                <h4 className="font-bold">Management</h4>
                <p className="mt-2 leading-7 text-justify">
                  The management system of every website is very important,
                  managing them is very easy with Mern Stack. I am working on
                  that too.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="card p-6 col-span-4 2xl:col-span-2 bg-sky-50 shadow-xl"
          >
            <div className="flex">
              <p className="lg:text-4xl text-2xl text-orange-500 lg:mr-4 mr-2">
                <FaBuffer />
              </p>
              <div className="">
                <h4 className="font-bold">Front end Development</h4>
                <p className="mt-2 leading-7 text-justify">
                  Front end development is very popular nowadays, I am working
                  on front end using javascript, react, react redux, Next js,
                  TypeScript, firebase authentication and other technologies.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="card p-6 col-span-4 2xl:col-span-2 bg-violet-50 shadow-xl"
          >
            <div className="flex">
              <p className="lg:text-4xl text-2xl text-fuchsia-400 lg:mr-4 mr-2">
                <FaBacterium />
              </p>
              <div className="">
                <h4 className="font-bold">Backend Development</h4>
                <p className="mt-2 leading-7 text-justify">
                  In addition to full stack development, I am also working on
                  backend and server using MongoDB, Mongoose, NodeJS, ExpressJS,
                  Postgresql, Prisma, and Vercel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <p className="text-center lg:p-7 py-6 bg-slate-100 rounded-lg text-gray-600 text-1xl">
          © 2023 All Rights Reserved by mariful-islam.
        </p>
      </section>
    </motion.div>
  );
};

export default Home;
