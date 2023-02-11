import React from 'react';
import { FaBacterium, FaBuffer, FaCode, FaCogs, FaReacteurope, FaRegFileCode } from 'react-icons/fa';

const Home = () => {
    return (
        <div>
            <section className='lg:px-14 px-4 lg:pt-10 mt-5'>
                <h1 className='lg:text-5xl text-4xl font-black'>About Me</h1>
                <p className='lg:mt-6 mt-3 leading-7 text-gray-500 text-justify'>I'm a Front-end-Developer from Dhaka, Bangladesh, working in web development and Front end Development. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                <p className='mt-6 leading-7 text-gray-500 text-justify'>My aim is to bring across your message and identity in the most creative way. I Working web development and Front end Development for many famous brand companies.</p>
            </section>
            <section className='lg:p-14 p-4 mt-3 lg:m-0'>
                <h1 className='lg:text-4xl text-2xl font-black mb-6'>What I do!</h1>
                <div className="grid lg:gap-10 gap-8 grid-cols-4">
                <div className="card p-6 col-span-4 lg:col-span-2 bg-fuchsia-50 shadow-xl">
                    <div className="flex">
                    <p className='lg:text-4xl text-2xl text-pink-400 lg:mr-4 mr-2'><FaRegFileCode/></p>
                    <div className="">
                    <h4 className='font-bold'>Web Design</h4>
                    <p className='mt-2 leading-7'>I will make a clean,unique and professional looking website.My design must be responsive in all devices,pixel perfect, and clean coding.</p>
                    </div>
                    </div>
                </div>
                <div className="card p-6 col-span-4 lg:col-span-2 bg-violet-50 shadow-xl">
                    <div className="flex">
                    <p className='lg:text-4xl text-2xl text-fuchsia-400 lg:mr-4 mr-2'><FaCode/></p>
                    <div className="">
                    <h4 className='font-bold'>Web Development</h4>
                    <p className='mt-2 leading-7'>I have been working with web development for almost 3 years. Also working on frontend and backend with HTML CSS bootstrap tailwind javascript.</p>
                    </div>
                    </div>
                </div>
                <div className="card p-6 col-span-4 lg:col-span-2 bg-sky-50 shadow-xl">
                    <div className="flex">
                    <p className='lg:text-4xl text-2xl text-orange-500 lg:mr-4 mr-2'><FaReacteurope/></p>
                    <div className="">
                    <h4 className='font-bold'>React Developer</h4>
                    <p className='mt-2 leading-7'>React is currently a very popular framework, I am working on various React technologies including React, React Router DOM, React Icon, etc.</p>
                    </div>
                    </div>
                </div>
                <div className="card p-6 col-span-4 lg:col-span-2 bg-fuchsia-50 shadow-xl">
                    <div className="flex">
                    <p className='lg:text-4xl text-2xl text-pink-400 lg:mr-4 mr-2'><FaCogs/></p>
                    <div className="">
                    <h4 className='font-bold'>Management</h4>
                    <p className='mt-2 leading-7'>The management system of every website is very important, managing them is very easy with Mern Stack. I am working on that too.</p>
                    </div>
                    </div>
                </div>
                <div className="card p-6 col-span-4 lg:col-span-2 bg-sky-50 shadow-xl">
                    <div className="flex">
                    <p className='lg:text-4xl text-2xl text-orange-500 lg:mr-4 mr-2'><FaBuffer/></p>
                    <div className="">
                    <h4 className='font-bold'>Front end Development</h4>
                    <p className='mt-2 leading-7'>Front end development is very popular nowadays, I am working on front end using javascript, react, firebase authentication and other technologies.</p>
                    </div>
                    </div>
                </div>
                <div className="card p-6 col-span-4 lg:col-span-2 bg-violet-50 shadow-xl">
                    <div className="flex">
                    <p className='lg:text-4xl text-2xl text-fuchsia-400 lg:mr-4 mr-2'><FaBacterium/></p>
                    <div className="">
                    <h4 className='font-bold'>Backend Development</h4>
                    <p className='mt-2 leading-7'>In addition to front end development, I am also working on backend and server using MongoDB, NodeJS, ExpressJS, and Vercel.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section>
                <p className='text-center lg:p-7 py-6 bg-slate-100 rounded-lg text-gray-600 text-1xl'>© 2023 All Rights Reserved by mariful-islam.</p>
            </section>
        </div>
    );
};

export default Home;