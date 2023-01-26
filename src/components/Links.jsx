import React, { useState } from 'react'
import { HiOutlineHome, HiChatAlt2 } from 'react-icons/hi'
import { FaUserGraduate, FaProjectDiagram } from 'react-icons/fa'
import { AiOutlineCode } from 'react-icons/ai'

function Links() {
    let [arrowOp, setOp] = useState(0)
    window.addEventListener('scroll', () => setOp(window.scrollY / 550))
    const handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const element = document.getElementById(event.target.getAttribute('href').substring(1));

        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <><div className="links fixed bottom-5 lg:bottom-10 z-50 flex justify-center w-full text-[#f2fc3e]" style={ {
            opacity: `${arrowOp}`
        } }>

            <ul className='aside-links flex flex-row justify-center shadow-md shadow-amber-300 gap-4 bg-[#241304ba] p-2 px-4 rounded-full' >
                <li><a className='nav-link rounded-full hover:scale-125 hover:text-black' href="#head"><HiOutlineHome className="h-10 w-10" href="#head" onClick={ handleClick } /></a></li>
                <li><a className='nav-link rounded-full hover:scale-125 hover:text-black' href="#about"><FaUserGraduate className="h-10 w-10" href="#about" onClick={ handleClick } /></a></li>
                <li><a className='nav-link rounded-full hover:scale-125 hover:text-black' href="#skills"><AiOutlineCode className="h-10 w-10" href="#skills" onClick={ handleClick } /></a></li>
                <li><a className='nav-link rounded-full hover:scale-125 hover:text-black' href="#project"><FaProjectDiagram className="h-10 w-10" href="#project" onClick={ handleClick } /></a></li>
                <li><a className='nav-link rounded-full hover:scale-125 hover:text-black' href="#contacts"><HiChatAlt2 className="h-10 w-10" href="#contact" onClick={ handleClick } /></a></li>
            </ul>
        </div>

        </>
    )
}

export default Links