import React from "react";

const Resume = () => {
  return (
    <div>
      <section className="2xl:px-14 px-4 2xl:pt-10 mt-5">
        <h1 className="lg:text-5xl text-4xl font-black">Resume</h1>
      </section>
      <section className="2xl:p-14 p-4 mt-3 2xl:m-0">
        <div className="grid grid-cols-2 2xl:gap-10 gap-8">
          <div className="2xl:col-span-1 col-span-2">
            <h1 className="text-2xl font-black mb-6">Education</h1>
            <div className="card p-6 bg-pink-100 shadow-xl mb-7">
              <h6 className="text-gray-500 mb-2">2019-2021</h6>
              <h4 className="text-xl mb-2">Honors (Degree)</h4>
              <p className="text-1xl">Jirail Aziziya Fazil Madrasah</p>
            </div>
            <div className="card p-6 bg-pink-100 shadow-xl mb-7">
              <h6 className="text-gray-500 mb-2">2017-2018</h6>
              <h4 className="text-xl mb-2">Hsc (Alim)</h4>
              <p className="text-1xl">Sagardi Islamiya Kamil Madrasah</p>
            </div>
            <div className="card p-6 bg-pink-100 shadow-xl mb-7">
              <h6 className="text-gray-500 mb-2">2016</h6>
              <h4 className="text-xl mb-2">Ssc (Dakhil)</h4>
              <p className="text-1xl">Bhola Darul Hadis Kamil Madrasah</p>
            </div>
          </div>
          <div className="2xl:col-span-1 col-span-2">
            <h1 className="text-2xl font-black mb-6">Experience</h1>
            <div className="card p-6 bg-sky-50 shadow-xl mb-7">
              <h6 className="text-gray-500 mb-2">2023</h6>
              <h4 className="text-xl mb-2">Full stack Web Development</h4>
              <p className="text-1xl">Apollo: Level 2 Programming Hero</p>
            </div>
            <div className="card p-6 bg-sky-50 shadow-xl mb-7">
              <h6 className="text-gray-500 mb-2">2022</h6>
              <h4 className="text-xl mb-2">Front end Development</h4>
              <p className="text-1xl">Programming Hero</p>
            </div>
            <div className="card p-6 bg-sky-50 shadow-xl mb-7">
              <h6 className="text-gray-500 mb-2">2021</h6>
              <h4 className="text-xl mb-2">Web Design</h4>
              <p className="text-1xl">Myself</p>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-14 px-4 2xl:mt-8 bg-slate-100 lg:pt-10 pt-4">
        <div className="grid grid-cols-2 lg:gap-10 gap-2">
          <div className="2xl:col-span-1 col-span-2">
            <h1 className="text-2xl font-black lg:mb-6 mb-3">Working Skills</h1>
            <div className=" mb-6">
              <div className="flex justify-between mb-1">
                <p className="font-semibold">Web Design</p>
                <p className="font-semibold">80%</p>
              </div>
              <progress
                className="progress progress-warning w-full mb-6"
                value="85"
                max="100"
              ></progress>
              <div className="flex justify-between mb-1">
                <p className="font-semibold">Web Development</p>
                <p className="font-semibold">75%</p>
              </div>
              <progress
                className="progress progress-primary w-full mb-6"
                value="80"
                max="100"
              ></progress>
              <div className="flex justify-between mb-1">
                <p className="font-semibold">Front end Development</p>
                <p className="font-semibold">75%</p>
              </div>
              <progress
                className="progress progress-accent w-full mb-6"
                value="80"
                max="100"
              ></progress>
              <div className="flex justify-between mb-1">
                <p className="font-semibold">Full stack Development</p>
                <p className="font-semibold">70%</p>
              </div>
              <progress
                className="progress progress-error w-full"
                value="70"
                max="100"
              ></progress>
            </div>
          </div>
          <div className="2xl:col-span-1 col-span-2">
            <h1 className="text-2xl font-black mb-5">Knowledge</h1>
            <div className="flex flex-wrap mb-6">
              <p className="bg-base-300 m-1 rounded-lg px-5 py-2">Html5</p>
              <p className="bg-base-300 m-1 rounded-lg px-5 py-2">Css3</p>
              <p className="bg-base-300 m-1 rounded-lg px-5 py-2">
                Bootstrap 5
              </p>
              <p className="bg-base-300 m-1 rounded-lg px-5 py-2">
                Tailwind Css
              </p>
              <p className="bg-base-300 m-1 rounded-lg px-5 py-2">Javascript</p>
              <p className="bg-base-300 m-1 rounded-lg px-5 py-2">React</p>
              <p className="bg-base-300 m-1 rounded-lg px-5 py-2">Redux</p>
              <p className="bg-base-300 m-1 rounded-lg px-5 py-2">Next js</p>
              <p className="bg-base-300 m-1 rounded-lg px-5 py-2">Typescript</p>
              <p className="bg-base-300 m-1 rounded-lg px-5 py-2">Next Auth</p>
              <p className="bg-base-300 m-1 rounded-lg px-5 py-2">Firebase</p>
              <p className="bg-base-300 m-1 rounded-lg px-5 py-2">Mongodb</p>
              <p className="bg-base-300 m-1 rounded-lg px-5 py-2">Mongoose</p>
              <p className="bg-base-300 m-1 rounded-lg px-5 py-2">Node</p>
              <p className="bg-base-300 m-1 rounded-lg px-5 py-2">Express Js</p>
              <p className="bg-base-300 m-1 rounded-lg px-5 py-2">Postgresql</p>
              <p className="bg-base-300 m-1 rounded-lg px-5 py-2">Prisma</p>
              <p className="bg-base-300 m-1 rounded-lg px-5 py-2">etc.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <p className="text-center lg:p-7 py-6 bg-slate-100 rounded-lg text-gray-600 text-1xl mt-1">
          © 2023 All Rights Reserved by mariful-islam.
        </p>
      </section>
    </div>
  );
};

export default Resume;
