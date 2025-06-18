import React, { forwardRef, useEffect, useState } from 'react';
import EachProject from './EachProject';

const Projects = forwardRef((props, ref) => {
    const [data, SetData] = useState([])
    useEffect(() => {
        fetch('/projectData.json')
            .then(res => res.json())
            .then(data => SetData(data))
    }, [])
    return (
        <div ref={ref}>
            <h1 className='text-center text-3xl font-bold  border-b-blue-600 border-b-2 w-2/12 mx-auto mb-10 ' >Porjcets</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center '>
                {
                    data.map(project => <EachProject key={project.id} project={project}></EachProject>)
                }
            </div>
        </div>
    );
});

export default Projects;