import React, { forwardRef, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";

const Contact = forwardRef((props,ref) => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_2s8wfg8', 'template_tmv76uc', form.current, {
                publicKey: 'VdfcOOjG1Lam5H1Xo',
            })
            .then(
                (data) => {
                    if (data.status === 200) {
                        toast("Successfully send Your Mail")
                    }
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert("Failed to send the message.");
                },
            );
    };

    return (
        <div className='mt-8' ref={ref}>
           
            <h1 className='text-center text-3xl font-bold border-b-2 w-2/12 mx-auto mb-6'>
                Contact Me
            </h1>
            <h1 className='text-blue-400 font-bold text-2xl pl-4'>Send Your Mail</h1>
           <div className='grid md:grid-cols-2 justify-center items-center gap-6'>
           <div className="bg-white p-10 rounded-lg shadow-lg max-w-xl mx-auto">
                <p className="text-slate-700 mb-4 text-center text-lg font-semibold ">
                    If you have any questions or concerns, please don't hesitate to contact
                    me. I am open to any work opportunities that align with my skills and
                    interests.
                </p>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-4">
                        <label htmlFor="user_name" className="block text-sm font-medium mb-1">
                            Your Name:
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            id="user_name"
                            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="user_email" className="block text-sm font-medium mb-1">
                            Your Email:
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            id="user_email"
                            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                            Your Message:
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:opacity-90"
                    >
                        SEND MESSAGE
                    </button>
                </form>
            </div>
            <div className='space-y-5 text-slate-700 pl-6'>
                <h1 className='text-2xl font-bold flex  gap-4 items-center'> <IoCall /> 01303078081</h1>
                <h1 className='text-2xl font-bold flex gap-4 items-center'> <SiGmail />tusharahmed7083@gmail.com</h1>
                <h1 className='text-2xl font-bold flex gap-4 items-center'> <CiLocationOn />Tangail,Dhaka,Bangladesh</h1>
            </div>
           </div>
            <ToastContainer />
        </div>
    );
});

export default Contact;
