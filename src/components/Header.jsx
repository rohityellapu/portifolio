import React from 'react'

import Links from './Links';
function Header() {

  const handleClick = (event) => {
    event.preventDefault();
    const element = document.getElementById(event.target.getAttribute('href').substring(1));
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  return (
    <>
      <Links />

      <header className='hidden lg:block'>
        <nav className='flex lg:flex-row justify-between flex-col'>
          <div className="logo ">
            <img className='hover:cursor-pointer' src={ require('../images/logo.png') } height='120rem' width='120rem' alt="ry" />

          </div>
          <ul className='nav-links flex font-bold flex-row gap-16 m-8 justify-center items-center'>

            <li><a className='nav-link duration-500 hover:text-blue-500' href="#about" onClick={ handleClick }>About</a></li>
            <li><a className='nav-link duration-500 hover:text-blue-500' href="#skills" onClick={ handleClick }>Skills</a></li>
            <li><a className='nav-link duration-500 hover:text-blue-500' href="#project" onClick={ handleClick }>Projects</a></li>
            <li><a className='nav-link duration-500 hover:text-blue-500' href="#contact" onClick={ handleClick }>Contact</a></li>
            <li><a className='resume bg-[#F2AA4CFF] p-2 px-4 rounded-xl border-[#F2AA4CFF] border-2 hover:bg-[#101820FF] hover:text-[#F2AA4CFF] duration-500 text-black  glow-on-hover' target='_blank' href={ require('../images/resume.pdf') } download="rohits-resume">Resume</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header