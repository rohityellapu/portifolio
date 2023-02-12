import React, { useRef } from 'react'

function Menu() {
    const menu = useRef(null);
    function handleToggle(e) {
        e.target.classList.toggle('active');
        menu.current.classList.toggle('active');
    }
    const handleClick = (event) => {
        event.preventDefault();
        const element = document.getElementById(event.target.getAttribute('href').substring(1));
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        menu.current.classList.toggle('active');
    };
    return (
        <div className='lg:hidden flex flew-row justify-between p-4'>
            <div className="logo ">
                <img src={ require('../images/logo.png') } className='h-16 w-16 hover:cursor-pointer' alt="ry" />
            </div>
            <div className="menubar flex justify-center items-center">
                <div className="menu flex flex-col justify-end" ref={ menu }>
                    <ul className='nav-links flex flex-col justify-end font-bold gap-2 gap-y-8 m-8 items-center'>

                        <li><a className='nav-link duration-500 hover:text-blue-500' href="#about" onClick={ handleClick }>About</a></li>
                        <li><a className='nav-link duration-500 hover:text-blue-500' href="#skills" onClick={ handleClick }>Skills</a></li>
                        <li><a className='nav-link duration-500 hover:text-blue-500' href="#project" onClick={ handleClick }>Projects</a></li>
                        <li><a className='nav-link duration-500 hover:text-blue-500' href="#contact" onClick={ handleClick }>Contact</a></li>
                        <li><a className='resume bg-[#F2AA4CFF] p-2 px-4 rounded-xl border-[#F2AA4CFF] border-2 hover:bg-[#101820FF] hover:text-[#F2AA4CFF] duration-500 text-black  glow-on-hover' target='_blank' href={ require('../images/resume.pdf') } download="rohits-resume">Resume</a></li>
                    </ul>
                </div>
                <div className="menu__toggler" onClick={ handleToggle }><span></span></div>
            </div>
        </div>
    )
}

export default Menu