import React from 'react'
import '../static/Header.css';
function Header() {
  return (
      <>
          <header>
              <nav>
                  <ul className='nav-links flex flex-row'>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul></nav>
          </header>
      </>
  )
}

export default Header