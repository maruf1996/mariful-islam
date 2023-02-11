import React from 'react';
import { FaBacterium, FaBuffer, FaCode, FaCogs, FaReacteurope, FaRegFileCode } from 'react-icons/fa';

const Home = () => {
    return (
        <div>
            <section className='px-14 pt-10'>
                <h1 className='text-5xl font-black'>About Me</h1>
                <p className='mt-6 leading-7 text-gray-500'>I'm a Front-end-Developer from Dhaka, Bangladesh, working in web development and Front end Development. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                <p className='mt-6 leading-7 text-gray-500'>My aim is to bring across your message and identity in the most creative way. I Working web development and Front end Development for many famous brand companies.</p>
            </section>
            <section className='p-14'>
                <h1 className='text-4xl font-black mb-6'>What I do!</h1>
                <div className="grid gap-10 grid-cols-4">
                <div className="card p-6 col-span-4 lg:col-span-2 bg-fuchsia-50 shadow-xl">
                    <div className="flex">
                    <p className='text-4xl text-pink-400 mr-4'><FaRegFileCode/></p>
                    <div className="">
                    <h4 className='font-bold'>Web Design</h4>
                    <p className='mt-2 leading-7'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                    </div>
                    </div>
                </div>
                <div className="card p-6 col-span-4 lg:col-span-2 bg-violet-50 shadow-xl">
                    <div className="flex">
                    <p className='text-4xl text-fuchsia-400 mr-4'><FaCode/></p>
                    <div className="">
                    <h4 className='font-bold'>Web Development</h4>
                    <p className='mt-2 leading-7'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                    </div>
                    </div>
                </div>
                <div className="card p-6 col-span-4 lg:col-span-2 bg-sky-50 shadow-xl">
                    <div className="flex">
                    <p className='text-4xl text-orange-500 mr-4'><FaReacteurope/></p>
                    <div className="">
                    <h4 className='font-bold'>Front end Development</h4>
                    <p className='mt-2 leading-7'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                    </div>
                    </div>
                </div>
                <div className="card p-6 col-span-4 lg:col-span-2 bg-fuchsia-50 shadow-xl">
                    <div className="flex">
                    <p className='text-4xl text-pink-400 mr-4'><FaCogs/></p>
                    <div className="">
                    <h4 className='font-bold'>Management</h4>
                    <p className='mt-2 leading-7'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                    </div>
                    </div>
                </div>
                <div className="card p-6 col-span-4 lg:col-span-2 bg-violet-50 shadow-xl">
                    <div className="flex">
                    <p className='text-4xl text-fuchsia-400 mr-4'><FaBacterium/></p>
                    <div className="">
                    <h4 className='font-bold'>Basic Backend Development</h4>
                    <p className='mt-2 leading-7'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                    </div>
                    </div>
                </div>
                <div className="card p-6 col-span-4 lg:col-span-2 bg-sky-50 shadow-xl">
                    <div className="flex">
                    <p className='text-4xl text-orange-500 mr-4'><FaBuffer/></p>
                    <div className="">
                    <h4 className='font-bold'>Basic Fullstack Development</h4>
                    <p className='mt-2 leading-7'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section>
                <p className='text-center p-7 bg-slate-100 rounded-lg text-gray-600'>© 2023 All Rights Reserved by mariful-islam.</p>
            </section>
        </div>
    );
};

export default Home;