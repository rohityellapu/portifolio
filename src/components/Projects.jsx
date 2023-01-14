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
                      key={project.name}
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
        description: "An Estate Catalog where Real estate agents can add their property making them easy to analyse and compare the number of properties. It'll make adding and describing your properties and with a proper maintainance.",
        imageUrl: 'https://res.cloudinary.com/dovkoy31j/image/upload/v1672898503/Projects/Screenshot_2023-01-05_11.30.46_qzg3vk.png',
        liveLink: 'https://estate-catalog-by-rohit-chava-harish.onrender.com',
        gitHubLink: "https://github.com/rohityellapu/RealEstate-Client"
    },
    {
        name: "YelpCamp",
        description: "Jump right in and explore our many campgrounds. Feel free to share some of your own and comment on others. It'll let camp lovers know the best spots to go relaxing.",
        imageUrl: 'https://res.cloudinary.com/dovkoy31j/image/upload/v1672900122/Projects/Screenshot_2023-01-05_11.56.35_rqj4ys.png',
        liveLink: 'https://rohits-yelpcamp.onrender.com',
        gitHubLink: "https://github.com/rohityellapu/yelpCamp"
    },
    {
        name: "Deliverio",
        description: "A Food Delivery mobile application built on React-Native with help of Expo Go compatible on both Android and iOS. Acknowledge the logic behind food delivery applications.",
        imageUrl: 'https://www.pineserve.com/food-online-ordering/ecommerce-mobile-app/assets/img/food-delivery-app-clone-development.png',
        liveLink: 'https://youtu.be/gZM1vMrrzIs',
        gitHubLink: "https://github.com/rohityellapu/deliverio"
    },
    {
        name: "CS50 Finance",
        description: "C$50 Finance, a web app via which you can manage portfolios of stocks. Not only will this tool allow you to check real stocks’ actual prices and portfolios’ values, it will also let you buy (okay, “buy”) and sell (okay, “sell”) stocks by querying IEX for stocks’ prices.",
        imageUrl: 'https://cs50.harvard.edu/x/2022/psets/9/finance/finance.png',
        liveLink: 'https://finance.cs50.net/',
        gitHubLink: "https://github.com/rohityellapu/finance"
    },
]

export default Projects