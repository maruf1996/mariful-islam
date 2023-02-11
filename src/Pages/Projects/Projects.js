import React from 'react';
import project1 from '../../img/projects/project-1.jpg';
import project2 from '../../img/projects/project-2.jpg';
import project3 from '../../img/projects/project-3.jpg';
import project4 from '../../img/projects/project-4.jpg';
import project5 from '../../img/projects/project-5.jpg';
import project6 from '../../img/projects/project-6.jpg';

const Projects = () => {
    return (
        <div>
        <section className='lg:px-14 px-3 lg:pt-10 mt-5'>
            <h1 className='lg:text-5xl text-4xl font-black'>Projects</h1>
            <div className="grid grid-cols-2 lg:gap-x-10">
                <div className="lg:col-span-1 col-span-2">
                    <a href='https://clocki-website.web.app/' target={`_blank`} className="card p-4 bg-teal-50 shadow-xl mt-7">
                    <img className='w-full h-44' src={project1} alt="" />
                    <h4 className='text-gray-500 mt-3 mb-1'>Front end Project</h4>
                    <h1 className='lg:text-2xl text-xl font-semibold'>Resale Cars</h1>
                    </a>
                </div>
                <div className="lg:col-span-1 col-span-2">
                    <a href='https://jannet-dekker.web.app/' target={`_blank`} className="card p-4 bg-red-50 shadow-xl mt-7">
                    <img className='w-full h-44' src={project2} alt="" />
                    <h4 className='text-gray-500 mt-3 mb-1'>Front end Project</h4>
                    <h1 className='lg:text-2xl text-xl font-semibold'>Jannet Dekker</h1>
                    </a>
                </div>
                <div className="lg:col-span-1 col-span-2">
                    <a href='https://web-development-learning-ac9a2.web.app/' target={`_blank`} className="card p-4 bg-teal-50 shadow-xl mt-7">
                    <img className='w-full h-44' src={project3} alt="" />
                    <h4 className='text-gray-500 mt-3 mb-1'>React Project</h4>
                    <h1 className='lg:text-2xl text-xl font-semibold'>Web School</h1>
                    </a>
                </div>
                <div className="lg:col-span-1 col-span-2">
                    <a href='https://maruf-web-quiz.netlify.app/' target={`_blank`} className="card p-4 bg-teal-50 shadow-xl mt-7">
                    <img className='w-full h-44' src={project4} alt="" />
                    <h4 className='text-gray-500 mt-3 mb-1'>React Project</h4>
                    <h1 className='lg:text-2xl text-xl font-semibold'>Wen Quiz</h1>
                    </a>
                </div>
                <div className="lg:col-span-1 col-span-2">
                    <a href='https://assignment-pro-designer.netlify.app/#' target={`_blank`} className="card p-4 bg-teal-50 shadow-xl mt-7">
                    <img className='w-full h-44' src={project5} alt="" />
                    <h4 className='text-gray-500 mt-3 mb-1'>Web Design</h4>
                    <h1 className='lg:text-2xl text-xl font-semibold'>Pro Designer</h1>
                    </a>
                </div>
                <div className="lg:col-span-1 col-span-2">
                    <a href='https://maruf1996.github.io/Simple-Website-Html-css/' target={`_blank`} className="card p-4 bg-pink-50 shadow-xl mt-7">
                    <img className='w-full h-44' src={project6} alt="" />
                    <h4 className='text-gray-500 mt-3 mb-1'>Web Design</h4>
                    <h1 className='lg:text-2xl text-xl font-semibold'>Fitness Power</h1>
                    </a>
                </div>
            </div>
        </section>
        <section className='px-14 mt-8'>
      
        </section>
        <section>
            <p className='text-center lg:p-7 py-6 bg-slate-100 rounded-lg text-gray-600 text-1xl mt-1'>© 2023 All Rights Reserved by mariful-islam.</p>
        </section>
    </div>
    );
};

export default Projects;