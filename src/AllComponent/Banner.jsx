import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import img from '../assets/1735984195457-removebg-preview (1).png'
import img1 from '../assets/cool-background.png'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${img1})`,
            backgroundPosition: 'cover',
            backgroundRepeat: 'no-repeat',
        }} className='grid md:grid-cols-2 justify-center items-center mt-10 p-10 '>
            <div className='col-span-1 flex flex-col justify-center items-center space-y-5 '>
                <h1 className='text-3xl font-bold'> "Hi! I'm Tushar, a Front-End Developer."</h1>
                <p className=' text-lg font-bold '>I Make Beautiful Landing Page</p>
                <div className='flex justify-center items-center gap-10 *:text-3xl'>
                    <Link to={'https://www.facebook.com/tushar.ahmed.52289'} className='text-blue-600'><FaFacebook /></Link>
                    <Link to={'https://github.com/tushar54'} className='text-black'><FaGithub /></Link>
                    <Link to={'https://www.linkedin.com/in/tushar-ahmed-49b9a1337/'} className='text-blue-600'><FaLinkedin /></Link>
                    <Link className='text-blue-600'><FaTwitter /></Link>

                </div>
                <div><Link to={'https://docs.google.com/document/d/1pb9-W-mp6cAaU_eFIfnT6k70TLaYxo3foeFe6A0-oYY/edit?tab=t.0'} className=' border-2 border-blue-500 px-3 py-2 rounded-lg font-bold'>Download Resume</Link></div>
            </div>

            <div className='col-span-1 flex justify-center items-center '>
                <div className="tooltip tooltip-bottom" data-tip="Tushar Ahmed">
                    <img className='w-[300px] h-[300px] rounded-full bg-transparent' src={img} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;