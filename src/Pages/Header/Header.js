import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="navbar xl:p-12">
            <div className="flex-1">
                <Link to='/' className="font-lobster text-3xl lg:text-5xl text-red-400">Mariful Islam</Link>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end -right-2">
                <label onClick={() => setIsOpen(isOpen => !isOpen)} tabIndex={1} className="btn btn-md xl:hidden lg:btn-lg btn-error btn-circle text-white avatar mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 lg:w-8 lg:h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
             
             { isOpen &&  <ul tabIndex={1} className="menu menu-compact dropdown-content m-0 shadow rounded-box w-[100vw]  bg-white">
                    <li><Link to='/' className='hover:bg-common hover:text-white'>Home</Link></li>
                    <li><Link to='/resume' className='hover:bg-common hover:text-white'>Resume</Link></li>
                    <li><Link to='/projects' className='hover:bg-common hover:text-white'>Projects</Link></li>
                    <li><Link to='/contact' className='hover:bg-common hover:text-white'>Contact</Link></li>
                </ul>}
             
            </div>
            </div>
        </div>
    );
};

export default Header;