import React, { forwardRef } from 'react';


const AboutMe = forwardRef((props,ref) => {
    return (
        <div className='mt-10 flex flex-col justify-center items-center space-y-9' ref={ref} >
            <h1 className='text-center text-3xl font-bold '>About Me</h1>
            <div>
                <div
                    style={{
                        borderWidth: '4px',
                        borderStyle: 'solid',
                        borderColor: 'transparent', // Start with transparent
                        borderTopColor: 'pink', // Initial top border color
                        animation: 'border-animation 4s linear infinite',
                    }} className=" flex flex-col justify-center items-center text-center md:w-6/12 mx-auto border-2 rounded-md shadow-lg p-10">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Hello! I'm <span className='text-blue-600'>[Tushar Ahmed]</span>,I am a passionate programmer with a love for problem-solving and exploring new technologies. My core skill is JavaScript, and I specialize in React, Tailwind CSS, Firebase, Node.js, and MongoDB. I strive to make the web more accessible and innovative. Open to opportunities that align with my skills and interests!
                    </p>
                   
                </div>
            </div>
        </div>
    );
});

export default AboutMe;