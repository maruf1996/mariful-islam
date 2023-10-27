import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const links = [
  { id: 1, title: "Home", to: "/" },
  { id: 2, title: "Resume", to: "/resume" },
  { id: 3, title: "Projects", to: "/projects" },
  { id: 4, title: "Contact", to: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar xl:p-12">
      <div className="flex-1">
        <Link
          to="/"
          className="font-lobster text-3xl lg:text-5xl text-slate-700"
        >
          Mariful Islam
        </Link>
      </div>
      <div className="lg:hidden">
        <div onClick={() => setOpen(!open)} className="block lg:hidden">
          {open ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </div>
        <ul
          onClick={() => setOpen(!open)}
          className={`items-stretch ${
            open
              ? "flex flex-col fixed left-0 top-0 w-[90%] md:w-[80%] ease-in-out duration-500 bg-slate-500 h-full z-10 !important"
              : "fixed left-[-100%]"
          }`}
        >
          {links?.map((link) => (
            <li key={link.id} className="py-2 border-b-2 text-white">
              <Link
                to={link.to}
                className="p-4 uppercase hover:text-red-600 text-sm tracking-wide"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
