import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiCodersrank } from "react-icons/si";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer  text-black border-4 border-t-blue-600 items-center p-4">
  <aside className="grid-flow-col items-center">
    <p className='text-6xl text-blue-500'><SiCodersrank /></p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  <div className='flex justify-center items-center gap-10 *:text-3xl'>
                    <Link to={'https://www.facebook.com/tushar.ahmed.52289'} className='text-blue-600'><FaFacebook /></Link>
                    <Link to={'https://github.com/tushar54'} className='text-black'><FaGithub /></Link>
                    <Link to={'https://www.linkedin.com/in/tushar-ahmed-49b9a1337/'} className='text-blue-600'><FaLinkedin /></Link>
                    <Link className='text-blue-600'><FaTwitter /></Link>

                </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;