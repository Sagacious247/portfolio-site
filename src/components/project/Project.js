import React from 'react'
import './project.css'


function Project({data}) {
    
  return (
    <div >
        <div className='project'>
          <h2 className='title'>{data.title}</h2>
          <span className='subTitle'>{data.subTitle}</span>
          <img className='projectImg' src={data.imageUrl} alt=''/>
          <div>
          <button className='projectBtn'>View</button>
          </div>
        </div>
    </div>
  )
}

export default Project