import React, { useState } from 'react'

function Project({ name, desc, image, link, git, id }) {
    const [isHovered, setisHovered] = useState(false)
    return (
        <div className={ `project lg:m-4 flex ${id % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col-reverse lg:bg-inherit bg-[#041221] rounded-2xl m-2 p-2 justify-between` }>
            <div className="about flex items-center flex-col lg:w-1/2">
                <h2 className='text-3xl font-semibold py-2'>{ name }</h2>
                <p className='m-6'>{ desc }</p>
                <div className="links flex justify-around w-full px-4 p-2 m-4">
                    <a href={ link } className='text-blue-300 hover:saturate-200 hover:scale-110 duration-200' target="_blank">Live Demo <img className='h-5 w-5 hover:scale-100 inline' src="https://img.icons8.com/fluency/512/link.png" alt="link" /></a>
                    <a href={ git } className='text-blue-300 hover:saturate-200 hover:scale-110 duration-200' target="_blank">Source Code <img className='h-5 w-5 hover:scale-100 inline' src="https://img.icons8.com/glyph-neue/512/github.png" alt="git" /></a>
                </div>
            </div>
            <div className={ `image ${isHovered ? 'hover' : ''} flex items-center lg:flex-row flex-col space-around rounded-lg h-[30rem] lg:w-1/3 m-2 bg-contain bg-no-repeat` } style={ { backgroundImage: `url(${image})` } } onMouseEnter={ () => setisHovered(true) }
                onMouseLeave={ () => setisHovered(false) }>
                <div className="icons" style={ { display: !isHovered && 'none' } }><a href={ link } target="_blank"><img className='h-16 w-16 hover:scale-150 duration-300' src="https://img.icons8.com/fluency/512/link.png" alt="link" /></a></div>
                <div className="icons" style={ { display: !isHovered && 'none' } }> <a href={ git } target="_blank"><img className='h-16 w-16 hover:scale-150 duration-300' src="https://img.icons8.com/glyph-neue/512/github.png" alt="git" /></a></div>

            </div>
        </div>
    )
}

export default Project