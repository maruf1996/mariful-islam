import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mbxgc77",
        "template_zkkjlrk",
        form.current,
        "TL9YTsBBnhIuNbDHA"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Your Order Recived Successfully",
            });
            navigate("/");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <section className="lg:px-14 px-4 lg:pt-10 mt-5">
        <h1
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="lg:text-5xl text-4xl font-black"
        >
          Contact
        </h1>
      </section>
      <section className="lg:px-14 px-4 lg:pt-10 mt-5">
        <div className="grid grid-cols-2 2xl:gap-10 gap-1">
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="2xl:col-span-1 col-span-2"
          >
            <div className="card p-6 bg-pink-50 shadow-xl mb-7">
              <h4 className="text-xl mb-2 font-semibold">Phone :</h4>
              <p className="text-xl">+88 01617589004</p>
              <p className="text-xl mb-1">+88 01978907918</p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="2xl:col-span-1 col-span-2"
          >
            <div className="card p-6 bg-sky-50 shadow-xl mb-7">
              <h4 className="text-xl mb-2 font-semibold">Email :</h4>
              <p className="text-xl">maruf3813@gmail.com</p>
              <p className="text-xl">mdmfbillah1996@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:p-14 p-3 lg:m-8 bg-slate-100 shadow-lg">
        <div className="card">
          <h2
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="lg:text-2xl text-1xl"
          >
            I'm always open to discussing product
          </h2>
          <h2
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="lg:text-2xl text-xl font-semibold mt-1 lg:mb-8 mb-3"
          >
            design work or partnerships.
          </h2>
          <form ref={form} onSubmit={sendEmail} action="w-full">
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="form-control w-full"
            >
              <label className="label">
                <span className="label-text font-semibold lg:text-xl">
                  Name *
                </span>
              </label>
              <input
                type="text"
                name="from_name"
                className="input w-full input-bordered input-error"
                required
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="form-control w-full"
            >
              <label className="label">
                <span className="label-text font-semibold lg:text-xl">
                  Email *
                </span>
              </label>
              <input
                type="email"
                name="from_email"
                className="input w-full input-bordered input-success"
                required
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="form-control w-full"
            >
              <label className="label">
                <span className="label-text font-semibold lg:text-xl">
                  Message *
                </span>
              </label>
              <textarea
                className="textarea textarea-secondary"
                name="message"
                required
              ></textarea>
            </div>
            <button
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="btn btn-outline btn-secondary lg:mt-8 mt-5 px-9"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <section>
        <p className="text-center lg:p-7 py-6 bg-slate-100 rounded-lg text-gray-600 text-1xl mt-1">
          © 2023 All Rights Reserved by mariful-islam.
        </p>
      </section>
    </motion.div>
  );
};

export default Contact;
