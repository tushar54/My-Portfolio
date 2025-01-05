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
                <h1 className='text-3xl font-bold'>Front-End Developer</h1>
                <p className=' text-lg font bold'>I Make Beautiful Landing Page</p>
                <div className='flex justify-center items-center gap-10 *:text-3xl'>
                    <Link className='text-blue-600'><FaFacebook /></Link>
                    <Link className='text-black'><FaGithub /></Link>
                    <Link className='text-blue-600'><FaLinkedin /></Link>
                    <Link className='text-blue-600'><FaTwitter /></Link>

                </div>
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