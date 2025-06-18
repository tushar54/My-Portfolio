import React, { forwardRef } from 'react';
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui, SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { motion } from "motion/react"
import Marquee from "react-fast-marquee";

const Skill = forwardRef((props,ref) => {
    return (
        <div className='mt-10' ref={ref}>
            <h1 className='text-center text-3xl font-bold border-b-blue-600 border-b-2  w-2/12 mx-auto ' >Skill</h1>
         <Marquee>
         <div className='flex justify-center items-center gap-5 my-10'>
                <motion.div whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    className='flex flex-col justify-center items-center border-2 shadow-lg rounded-md p-5'>
                    <FaHtml5 className='text-7xl text-orange-600' />
                    <p className='font-bold'>HTML-5</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }} className='flex flex-col justify-center items-center border-2 shadow-lg rounded-md p-5'>
                    <FaCss3 className='text-7xl text-blue-500' />
                    <p className='font-bold'>Css 3</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }} className='flex flex-col justify-center items-center border-2 shadow-lg rounded-md p-5'>
                    <RiTailwindCssFill className='text-7xl text-blue-700' />
                    <p className='font-bold'>Tailwind</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }} className='flex flex-col justify-center items-center border-2 shadow-lg rounded-md p-5'>
                    <SiDaisyui className='text-7xl text-green-400' />
                    <p className='font-bold'>DaisyUi</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }} className='flex flex-col justify-center items-center border-2 shadow-lg rounded-md p-5'>
                    <IoLogoJavascript className='text-7xl text-yellow-400' />
                    <p className='font-bold'>Javascript</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }} className='flex flex-col justify-center items-center border-2 shadow-lg rounded-md p-5'>
                    <FaReact className='text-7xl text-blue-400' />
                    <p className='font-bold'>React</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }} className='flex flex-col justify-center items-center border-2 shadow-lg rounded-md p-5'>
                    <FaNodeJs className='text-7xl text-green-400' />
                    <p className='font-bold'>Node.JS</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }} className='flex flex-col justify-center items-center border-2 shadow-lg rounded-md p-5'>
                    <DiMongodb className='text-7xl text-green-500' />
                    <p className='font-bold'>MongoDB</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }} className='flex flex-col justify-center items-center border-2 shadow-lg rounded-md p-5'>
                    <SiExpress className='text-7xl text-black' />
                    <p className='font-bold'>Express</p>
                </motion.div>
            </div>
         </Marquee>
        </div>
    );
});

export default Skill;