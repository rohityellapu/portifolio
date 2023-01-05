import React from 'react'
import '../static/Header.css';
function Header() {
  const handleClick = (event) => {
    event.preventDefault();
    const element = document.getElementById(event.target.getAttribute('href').substring(1));
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  return (
    <>
      <header>
        <nav className='flex flex-row space-between'>
          <div className="logo">
            <img src={ require('../images/logo.png') } height='120rem' width='120rem' alt="ry" />
          </div>
          <ul className='nav-links flex flex-row'>
            <li><a href="" onClick={ handleClick }>About</a></li>
            <li> <a href="#skills" onClick={ handleClick }>Skills</a></li>
            <li><a href="#contact" onClick={ handleClick }>Projects</a></li>
            <li><a href="#contacts" onClick={ handleClick }>Contact</a></li>
          </ul></nav>
      </header>
    </>
  )
}

export default Header