import React, { useState } from 'react'
import { HiOutlineHome, HiChatAlt2 } from 'react-icons/hi'
import { FaUserGraduate, FaProjectDiagram } from 'react-icons/fa'
import { AiOutlineCode } from 'react-icons/ai'

function Links() {
    let [arrowOp, setOp] = useState(0)
    window.addEventListener('scroll', () => setOp(window.scrollY / 550))
    const handleClick = (event) => {
        event.preventDefault();
        const element = document.getElementById(event.target.getAttribute('href').substring(1));

        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <><div className="links fixed bottom-5 lg:bottom-10 z-50 flex justify-center w-full text-[#f2fc3e]" style={ {
            opacity: `${arrowOp}`
        } }>

            <ul className='aside-links flex flex-row justify-center shadow-md shadow-amber-300 gap-4 bg-[#241304ba] p-2 px-4 rounded-full' >
                <li><a className='nav-link rounded-full hover:scale-125 hover:text-black' href="#head" onClick={ handleClick }><div> <HiOutlineHome className="h-10 w-10" href="#head" /></div></a></li>
                <li><a className='nav-link rounded-full hover:scale-125 hover:text-black' href="#about" onClick={ handleClick }><div> <FaUserGraduate className="h-10 w-10" href="#about" /></div></a></li>
                <li><a className='nav-link rounded-full hover:scale-125 hover:text-black' href="#skills" onClick={ handleClick }><div> <AiOutlineCode className="h-10 w-10" href="#skills" /></div></a></li>
                <li><a className='nav-link rounded-full hover:scale-125 hover:text-black' href="#project" onClick={ handleClick }><div> <FaProjectDiagram className="h-10 w-10" href="#project" /></div></a></li>
                <li><a className='nav-link rounded-full hover:scale-125 hover:text-black' href="#contacts" onClick={ handleClick }><div> <HiChatAlt2 className="h-10 w-10" href="#contact" /></div></a></li>
            </ul>
        </div>

        </>
    )
}

export default Links