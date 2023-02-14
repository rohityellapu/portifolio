import React from 'react'
import Project from './Project'

function Projects() {
    return (
        <>
            <div className="proj mt-4 w-full text-center">
                <h1 className='lg:text-5xl text-3xl font-bold p-4 m-4 my-16'>Projects I worked on</h1>
                <div id="project" className="flex flex-col projects gap-4">
                    { projects.map((project, i) => (
                        <Project
                            id={ i + 1 }
                            key={ project.name }
                            name={ project.name }
                            desc={ project.description }
                            image={ project.imageUrl }
                            link={ project.liveLink }
                            git={ project.gitHubLink }
                        />
                    )) }
                </div>
            </div>

        </>
    )
}

const projects = [
    {
        name: "Finance",
        description: "Rohit's Finance, a web app via which you can manage portfolios of stocks. Not only will this tool allow you to check real stocks’ actual prices and portfolios’ values, it will also let you buy (okay, “buy”) and sell (okay, “sell”) stocks by querying IEX for stocks’ prices.",
        imageUrl: 'https://res.cloudinary.com/dovkoy31j/image/upload/v1676349323/Projects/finance_n4fora.png',
        liveLink: 'https://finance-rohit.onrender.com',
        gitHubLink: "https://github.com/rohityellapu/finance"
    },
    {
        name: "YelpCamp",
        description: "Jump right in and explore our many campgrounds. Feel free to share some of your own and comment on others. It'll let camp lovers know the best spots to go relaxing.",
        imageUrl: 'https://res.cloudinary.com/dovkoy31j/image/upload/v1676349319/Projects/yelpcamp_yju0m1.png',
        liveLink: 'https://rohits-yelpcamp.onrender.com',
        gitHubLink: "https://github.com/rohityellapu/yelpCamp"
    },
    {
        name: "Instagram Clone",
        description: "Clone of Instagram where we can post feed, see others posts with Infinite Scrolling, Built with React with fully responsive design. Looking forward to add new features in this app that may fill gaps in Facebook's Instagram.",
        imageUrl: 'https://res.cloudinary.com/dovkoy31j/image/upload/v1676349301/Projects/instagram_arsyi7.png',
        liveLink: 'https://instagram-byrohit.vercel.app',
        gitHubLink: "https://github.com/rohityellapu/instaclone-V2"
    },

    {
        name: "Task Manager",
        description: "Add your daily tasks or todos with ease. Manage your activities quickly completing the tasks one by one. User can also pause his activity and start another activity, thus completing the tasks at user's own pace.",
        imageUrl: 'https://res.cloudinary.com/dovkoy31j/image/upload/v1676349330/Projects/taskManager_j82evf.png',
        liveLink: 'https://rohits-todo.onrender.com',
        gitHubLink: "https://github.com/rohityellapu/task-manager"
    },
    {
        name: "Ping Pong Game",
        description: "A Famous Two Player Ping Pong Game with keyboard inputs as controllers, Bet your friends could beat you on this, built with Scratch MIT Edu.",
        imageUrl: 'https://res.cloudinary.com/dovkoy31j/image/upload/v1676349335/Projects/Web_capture_13-2-2023_132758_scratch.mit.edu_rqem4k.jpg',
        liveLink: 'https://scratch.mit.edu/projects/762417318/fullscreen/',
        gitHubLink: "https://github.com/rohityellapu/CS50x/tree/main/Week%200%20Scratch"
    },
    {
        name: "Real Estate Catalog",
        description: "An Estate Catalog where Real estate agents can add their property making them easy to analyse and compare the number of properties. It'll make adding and describing your properties and with a proper maintainance.",
        imageUrl: 'https://res.cloudinary.com/dovkoy31j/image/upload/v1672898503/Projects/Screenshot_2023-01-05_11.30.46_qzg3vk.png',
        liveLink: 'https://estate-catalog-by-rohit-chava-harish.onrender.com',
        gitHubLink: "https://github.com/rohityellapu/RealEstate-Client"
    },

    {
        name: "Deliverio",
        description: "A Food Delivery mobile application built on React-Native with help of Expo Go compatible on both Android and iOS. Acknowledge the logic behind food delivery applications.",
        imageUrl: 'https://www.pineserve.com/food-online-ordering/ecommerce-mobile-app/assets/img/food-delivery-app-clone-development.png',
        liveLink: 'https://youtu.be/gZM1vMrrzIs',
        gitHubLink: "https://github.com/rohityellapu/deliverio"
    },
    {
        name: "Portfolio",
        description: "Magazine of all my Frontend, Backend, Full Stack projects and applications using various tech stacks. Connect if you have any brilliant app ideas that needs to be built to bring into world.",
        imageUrl: 'https://res.cloudinary.com/dovkoy31j/image/upload/v1676349313/Projects/portfolio_yp9sy7.png',
        liveLink: 'https://rohityellapu-portifolio.vercel.app/',
        gitHubLink: "https://github.com/rohityellapu/portifolio"
    },

]

export default Projects