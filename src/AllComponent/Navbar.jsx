import React from 'react';
import img from '../assets/1735984195457-removebg-preview (1).png'
import { SiCodersrank } from "react-icons/si";
import { Link } from 'react-router-dom';


const Navbar = ({onScrollToEducation,onScrollToSkill,onScrollToAboutMe,onScrollToContact,onScrollToProject }) => {
  const title=<>
   <li><button onClick={onScrollToAboutMe}>About Me</button></li>
      <li><button onClick={onScrollToContact}>Contact Me</button></li>
      <li><button onClick={onScrollToSkill}>Skill</button></li>
      <li><button onClick={onScrollToEducation}>Education</button></li>
      <li><button onClick={onScrollToProject}>Projects</button></li>
      </>
    return (
      <div className=" sticky top-0 z-10 navbar bg-base-100 border-b-2 border-b-blue-500">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className=" text-lg font-semibold menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {title}
      </ul>
    </div>
   <p className='text-6xl text-blue-600'><SiCodersrank /></p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1  text-lg font-semibold ">
     {title}
    </ul>
  </div>
  <div className="navbar-end">
  <Link to={'https://docs.google.com/document/d/1pb9-W-mp6cAaU_eFIfnT6k70TLaYxo3foeFe6A0-oYY/edit?tab=t.0'} className=' border-2 border-blue-500 px-3 py-2 rounded-lg font-bold'>Download Resume</Link>
  </div>
</div>
    );
};

export default Navbar;