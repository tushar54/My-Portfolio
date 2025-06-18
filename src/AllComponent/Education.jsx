import React, { forwardRef } from "react";

// Forwarding the ref from the parent component to this Education component
const Education = forwardRef((props, ref) => {
  const educationData = [
    {
      degree: "Bachelor of Arts in Economics",
      institution: "Gov. Saadat College",
      year: "2018 - 2024",
      description:
        "Economics is my major subject, where I focused on understanding economic theories, data analysis, and their practical applications in real-world scenarios. Alongside my studies, I nurtured a deep passion for technology, demonstrating a tech-savvy and enthusiastic mindset. I successfully balanced my academic commitments with my exploration of technology, gaining hands-on experience and actively engaging in tech-related endeavors.",
    },
  ];

  return (
    <section ref={ref} className="py-10 text-center w-3/4 mx-auto">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 border-2 border-b-fuchsia-600 w-[200px] mx-auto">
          Education
        </h2>
        <div className="">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="card shadow-lg bg-base-100 p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {item.degree}
              </h3>
              <p className="text-sm text-gray-500 mb-1">{item.institution}</p>
              <p className="text-sm text-gray-400">{item.year}</p>
              <p className="mt-4 text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Education;
