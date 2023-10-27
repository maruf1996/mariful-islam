import React from "react";
import {
  FaDownload,
  FaFacebookF,
  FaFax,
  FaGithub,
  FaLinkedinIn,
  FaMobileAlt,
  FaPeriscope,
  FaRegCalendarAlt,
  FaTwitter,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import img from "../../img/maruf_2.png";

const Devider = () => {
  return (
    <div className="flex flex-col gap-6 w-full xl:flex-row xl:p-4 xl:px-20 mt-40">
      <div className="w-full xl:w-4/12 card bg-white rounded-box h-full xl:sticky xl:top-0 xl:z-50">
        <figure className="-mt-28 bg-pink-300 w-7/12 xl:w-6/12 shadow-lg mx-auto rounded-lg">
          <img
            className="w-full h-[15rem] md:h-[20rem] lg:h-[26rem] xl:h-[13rem]"
            src={img}
            alt=""
          />
        </figure>
        <div className="card-body">
          <div className="w-9/12 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-1">
              Mariful Islam
            </h1>
            <h4 className=" text-center mb-3">Front End Developer</h4>
            <div className="flex justify-around p-3">
              <a
                className="bg-base-200 p-3 rounded-lg text-blue-500 hover:bg-common hover:text-white"
                href="https://web.facebook.com/profile.php?id=100012133538164"
                target={`_blank`}
              >
                <FaFacebookF />
              </a>
              <a
                className="bg-base-200 p-3 rounded-lg text-blue-500 hover:bg-common hover:text-white"
                href="https://twitter.com/maruf3813"
                target={`_blank`}
              >
                <FaTwitter />
              </a>
              <a
                className="bg-base-200 p-3 rounded-lg text-blue-500 hover:bg-common hover:text-white"
                href="https://github.com/maruf1996"
                target={`_blank`}
              >
                <FaGithub />
              </a>
              <a
                className="bg-base-200 p-3 rounded-lg text-blue-500 hover:bg-common hover:text-white"
                href="https://www.linkedin.com/feed/"
                target={`_blank`}
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="card w-10/12 mx-auto mb-2 bg-base-200 shadow-xl p-6">
          <div className="flex items-center border-b py-2">
            <p className="bg-white p-3 rounded-lg mr-3 text-red-600 hover:bg-common hover:text-white">
              <FaMobileAlt />
            </p>
            <div className="">
              <p>Phone</p>
              <h4 className="lg:text-xl">+88 01617589004</h4>
            </div>
          </div>
          <div className="flex items-center border-b py-2">
            <p className="bg-white p-3 rounded-lg mr-3 text-green-600 hover:bg-common hover:text-white">
              <FaPeriscope />
            </p>
            <div className="">
              <p>Location</p>
              <h4 className="lg:text-xl">Dhaka, Bangladesh</h4>
            </div>
          </div>
          <div className="flex items-center border-b py-2">
            <p className="bg-white p-3 rounded-lg mr-3 text-red-600 hover:bg-common hover:text-white">
              <FaFax />
            </p>
            <div className="">
              <p>Email</p>
              <h4 className="lg:text-xl">maruf3813@gmail.com</h4>
            </div>
          </div>
          <div className="flex items-center border-b py-2">
            <p className="bg-white p-3 rounded-lg mr-3 text-purple-600 hover:bg-common hover:text-white">
              <FaRegCalendarAlt />
            </p>
            <div className="">
              <p>Birthday</p>
              <h4 className="lg:text-xl">October 27, 1996</h4>
            </div>
          </div>
        </div>

        <div className="text-center my-6">
          <a
            href="https://drive.google.com/file/d/1Cw4R1nlxHkzk0Li-oWP-BQiuLDxgm1lh/view?usp=sharing"
            target={`_blank`}
          >
            <button className="btn btn-wide btn-error text-white rounded-full">
              {" "}
              <span className="mr-2">
                <FaDownload />
              </span>{" "}
              Download CV
            </button>
          </a>
        </div>
      </div>

      <div className="xl:w-8/12 w-full m-0 xl:m-5">
        <div className="xl:w-8/12 hidden xl:block ml-auto card">
          <ul
            tabIndex={1}
            className="shadow rounded-box p-12 bg-white flex justify-between items-center"
          >
            <li>
              <Link
                to="/"
                className="font-semibold py-4 px-3 rounded-lg bg-base-200 hover:bg-common hover:text-white"
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="font-semibold py-4 px-3 rounded-lg bg-base-200 hover:bg-common hover:text-white"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="font-semibold py-4 px-3 rounded-lg bg-base-200 hover:bg-common hover:text-white"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-semibold py-4 px-3 rounded-lg bg-base-200 hover:bg-common hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full mt-1 xl:mt-12 bg-white card">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Devider;
