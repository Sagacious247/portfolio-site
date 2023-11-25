import React, {useState } from 'react'
import './work.css'
import myProjects from '../data/data'
import Projects from '../project/Projects'

function Work() {
  let [currentPage, setCurrentPage] = useState(1)
  
  const handleSelect = (selectedPage) => {
    if(selectedPage >= 1 &&
      selectedPage <= myProjects.length /2 &&
      selectedPage !== currentPage)
    setCurrentPage(selectedPage)
  }
  return (

        <section id='works'>
        <h2 className='workTitle'>My Portfolio</h2>
        <span className='workDetails'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.
        I am excited to bring my skills and my experience to help businesses to achieve their goals and create a strong online presence.</span>

        <div className='workImgs'>
          { myProjects &&
            myProjects.slice(currentPage * 6 - 6, currentPage * 6).map(project => (
             <a  href={project.Click} style={{color: '#fff'}}>
             <Projects 
              data={project}
              />
              </a>
           ))}
           {myProjects.length > 0 &&
            <div className='pagination'>
            <span 
            className={currentPage > 1 ? "" : "paginationDisable"}
            onClick={() => handleSelect(currentPage - 1)}
            >◀</span>
            {[...Array(myProjects.length / 2 - 3)].map((_, i) => {
              return (
              <span 
              className={currentPage === i + 1 ? "paginationSelected" : ""}
              onClick={() => handleSelect(i + 1)} 
              key={i}>
                { i + 1}
                </span>)
            })}
            <span 
            className={currentPage < myProjects.length  / 2 -3 ? "" : "paginationDisable"}
            onClick={() => handleSelect(currentPage + 1)}
            >▶</span>
            </div>}
        </div>
        </section>

  )
}

export default Work