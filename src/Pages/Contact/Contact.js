import React from 'react';

const Contact = () => {
    return (
        <div>
        <section className='px-14 pt-10'>
            <h1 className='text-5xl font-black'>Contact</h1>
        </section>
        <section className='px-14 mt-8'>
        <div className="grid grid-cols-2 gap-10">
        <div className="lg:col-span-1 col-span-2">
            <div className="card p-6 bg-pink-50 shadow-xl mb-7">
               <h4 className='text-xl mb-2 font-semibold'>Phone :</h4>
               <p className='text-xl mb-1'>+88 01978907918</p>
               <p className='text-xl'>+88 01778907918</p>
            </div>
        </div>
        <div className="lg:col-span-1 col-span-2">
            <div className="card p-6 bg-sky-50 shadow-xl mb-7">
               <h4 className='text-xl mb-2 font-semibold'>Email :</h4>
               <p className='text-xl'>maruf3813@gmail.com</p>
               <p className='text-xl'>mdmfbillah1996@gmail.com</p>
            </div>
        </div>
        </div>
        </section>
        <section className='p-14 m-8 bg-slate-100 shadow-lg'>
        <div className="card">
            <h2 className='text-2xl'>I'm always open to discussing product</h2>
            <h2 className='text-2xl font-semibold mt-1 mb-8'>design work or partnerships.</h2>
            <form action="w-full">
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text font-semibold text-xl">Name *</span>
            </label>
            <input type="text" className="input w-full input-bordered input-error" required/>
            </div>
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text font-semibold text-xl">Email *</span>
            </label>
            <input type="email" className="input w-full input-bordered input-success" required/>
            </div>
            <div className="form-control w-full">
            <label className="label">
                <span className="label-text font-semibold text-xl">Message *</span>
            </label>
            <textarea className="textarea textarea-secondary" required></textarea>
            </div>
            <button className="btn btn-outline btn-secondary mt-8 px-9">Submit</button>
            </form>
        </div>
        </section>
        <section>
            <p className='text-center p-7 bg-slate-100 rounded-lg text-gray-600'>© 2023 All Rights Reserved by mariful-islam.</p>
        </section>
    </div>
    );
};

export default Contact;