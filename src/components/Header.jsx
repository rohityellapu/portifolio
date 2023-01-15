import React, {useState} from 'react'
import '../static/Header.css';
import { FormControlLabel } from '@mui/material';
import MaterialUISwitch from './Switch'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Links from './Links';
function Header() {
  let [arrowOp, setOp] = useState(0)
  window.addEventListener('scroll', () => setOp(window.scrollY / 550))
  const handleClick = (event) => {
    event.preventDefault();
    const element = document.getElementById(event.target.getAttribute('href').substring(1));
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  return (
    <>
      <Links/>
      <a href="#head" onClick={ handleClick } style={ { opacity: `${arrowOp}`, color: 'aqua'}} ><ArrowCircleUpIcon  href="#head" onClick={ handleClick } fontSize="large" className="goUp" /></a>
      <header id='head'>
        <nav className='flex flex-row space-between'>
          <div className="logo">
            <img src={ require('../images/logo.png') } height='120rem' width='120rem' alt="ry" />

          </div>
          <ul className='nav-links flex flex-row'>

            <li><a className='nav-link' href="#about" onClick={ handleClick }>About</a></li>
            <li><a className='nav-link' href="#skills" onClick={ handleClick }>Skills</a></li>
            <li><a className='nav-link' href="#project" onClick={ handleClick }>Projects</a></li>
            <li><a className='nav-link' href="#contact" onClick={ handleClick }>Contact</a></li>
            <li><a className='resume' target='_blank' href={ require('../images/resume.pdf') } download="rohits-resume">Resume</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header