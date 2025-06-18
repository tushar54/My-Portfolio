import React, { useState } from "react";
import { Link } from "react-router-dom";

const EachProject = ({ project }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  console.log(project)

  return (
    <>
      <div className=" bg-base-100 shadow-xl md:w-80 lg:w-[340px] flex-grow p-4">
        <figure className="flex justify-center">
          <img
            className="w-[250px] h-[150px] object-cover rounded-lg"
            src={project.image}
            alt={project.name}
          />
        </figure>
        <div className="card-body space-y-4">
          <h2 className="card-title text-lg font-bold">
            {project.name}
            <button
              onClick={handleModal}
              className="px-3 py-1 border-2 rounded-md text-sm hover:bg-blue-600 hover:text-white"
            >
              Details
            </button>
          </h2>
          <p className="text-gray-600 text-sm">{project.description}</p>
          <div className="card-actions flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <span key={index} className="badge badge-outline">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center space-x-2">
            <Link to={project.liveLink}>
              <button className="btn btn-primary bg-gradient-to-r from-purple-500 to-pink-500 text-white ">
                Live
              </button>
            </Link>
            <Link to={project.githubLink}>
              <button className="btn btn-sm btn-outline px-4 py-1 w-full">
                GitHub (Client)
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="overflow-y-auto z-50 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-10 pb-10">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-2/3 lg:w-1/2  ">
            <h2 className="text-lg font-bold mb-4">{project.name} Details</h2>
          <p className="text-gray-600 mb-4"> <span className="text-xl font-bold "> Description: </span>{project.project_description}</p>
          <p className="text-xl font-bold">Challenges: </p>
          {project?.challenges_faced.map((data,index)=><p>{index+1}. {data}</p>)}
          <p className="text-xl font-bold">Improvements: </p>
          {project?.potential_improvements.map((data,index)=><p>{index+1}. {data}</p>)}
          <p className="text-xl font-bold">Future Plan: </p>
          {project?.future_plans.map((data,index)=><p>{index+1}. {data}</p>)}
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleModal}
                className="px-3 py-1 border-2  rounded-md text-sm hover:bg-red-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EachProject;
