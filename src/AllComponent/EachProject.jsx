import React from 'react';

const EachProject = ({project}) => {
    // console.log(project)
    return (
        <div className="card bg-base-100 w-96 shadow-xl justify-center items-center">
        <figure>
          <img
            src={project.image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {project.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{project.description}</p>
          <div className="card-actions justify-end">
            {project.stack.map((data)=><div className="badge badge-outline">{data}</div>)}
           
          </div>
          <div>
            <button className="btn ">Details</button>
            </div>
        </div>
      </div>
    );
};

export default EachProject;