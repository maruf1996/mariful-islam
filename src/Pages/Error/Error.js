import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    return (
    <div className="lg:w-6/12 w-10/12 mx-auto lg:mt-12 mt-4">
        <div className="text-center">
        <h3 className='text-error text-justify font-semibold text-2xl mb-8'>{error.statusText || error.message}</h3>
        <Link to="/"><button className='btn btn-secondary  text-white font-bold px-4'>Back To Home</button></Link>
        </div>
    </div>
    );
};

export default Error;