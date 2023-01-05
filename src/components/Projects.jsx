import React from 'react'
import Project from './Project'
import '../static/Projects.css'
function Projects() {
  return (
      <>
          <h1 className='text-center'>Projects I worked on...</h1>
          <div id="project" className="flex flex-column projects">
              { projects.map(project => (
                  <Project
                      name={ project.name }
                      desc={ project.description }
                      image={ project.imageUrl }
                      link={ project.liveLink }
                      git={project.gitHubLink}
                  />
              ))}
          </div>
      </>
  )
}

const projects = [
    {
        name: "Real Estate Catalog",
        description: "An Estate Catalog where Real estate agents can add their property making them easy to analyse and compare the number of properties.",
        imageUrl: 'https://res.cloudinary.com/dovkoy31j/image/upload/v1672898503/Projects/Screenshot_2023-01-05_11.30.46_qzg3vk.png',
        liveLink: 'https://estate-catalog-by-rohit-chava-harish.onrender.com',
        gitHubLink: "https://github.com/rohityellapu/RealEstate-Client"
    },
    {
        name: "YelpCamp",
        description: "An Estate Catalog where Real estate agents can add their property making them easy to analyse and compare the number of properties.",
        imageUrl: 'https://res.cloudinary.com/dovkoy31j/image/upload/v1672900122/Projects/Screenshot_2023-01-05_11.56.35_rqj4ys.png',
        liveLink: 'https://rohits-yelpcamp.onrender.com',
        gitHubLink: "https://github.com/rohityellapu/yelpCamp"
    }
]

export default Projects