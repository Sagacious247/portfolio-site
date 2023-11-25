import React from 'react'
import Project from './Project'
import './project.css'

function Projects({data, handleClick}) {
  return (
    <div className='projectsContainer'>
        <Project
          data={data}
          />
    </div>
  )
}

export default Projects