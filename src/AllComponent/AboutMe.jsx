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
                        borderTopColor: 'blue', // Initial top border color
                        animation: 'border-animation 4s linear infinite',
                    }} className=" flex flex-col justify-center items-center text-center md:w-6/12 mx-auto border-2 rounded-md shadow-lg p-10">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Hello! I'm <span className='text-blue-600'>[Tushar Ahmed]</span>, a passionate <span className='text-blue-600'>[Web Developer]</span> who loves creating elegant and functional web solutions.
                        With a strong foundation in [Your Skills or Technologies], I thrive on turning ideas into reality.
                        In my free time, I enjoy [Your Hobbies or Interests].
                    </p>
                    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        My mission is to [Your Mission or Goal], and I believe in continuous learning to stay at the forefront of innovation.
                        Let's connect and build something amazing together!
                    </p>
                </div>
            </div>
        </div>
    );
});

export default AboutMe;