import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import IntegrationInstructionsSharpIcon from '@mui/icons-material/IntegrationInstructionsSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ForumSharpIcon from '@mui/icons-material/ForumSharp';
function Links() {
    let [arrowOp, setOp] = useState(0)
    window.addEventListener('scroll', () => setOp(window.scrollY / 550))
    const handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log(event.target)
        const element = document.getElementById(event.target.getAttribute('href').substring(1));

        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <>
            <ul className='aside-links' style={ {
                opacity: `${arrowOp}`, color: 'aqua',
                borderLeft: '0.3rem solid aqua'
            } }>
                <li><a className='nav-link' href="#head" onClick={ handleClick }><HomeIcon href="#head"  /></a></li>
                <li><a className='nav-link' href="#about" onClick={ handleClick }><AccountCircleSharpIcon href="#about"  /></a></li>
                <li><a className='nav-link' href="#skills" onClick={ handleClick }><IntegrationInstructionsSharpIcon href="#skills"  /></a></li>
                <li><a className='nav-link' href="#project" onClick={ handleClick }><AccountTreeRoundedIcon href="#project"  /></a></li>
                <li><a className='nav-link' href="#contact" onClick={ handleClick }><ForumSharpIcon href="#contact"  /></a></li>
            </ul>

        </>
    )
}

export default Links