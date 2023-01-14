import React, { useRef } from 'react'
import Avatar from '@mui/material/Avatar';
import { height } from '@mui/system';
function Intro() {

    const title = useRef(null)
    const positions = ["Front End Developer.", "Back End Developer.", "Full Stack Developer.", "Junior Software Engineer."]
    let text = positions[0]
    let i = 0;
    let index = 0;
    const display = () => {
        if (i >= positions.length) i = 0;
        text = positions[i];
        if (title.current) title.current.innerText = text.slice(0, index)

        index++;
        if (index > text.length * 2) {
            index = 0;
            i++;
        }
    }

    setInterval(display, 200)
    return (
        <>
            <main className='flex items-center'>
                <div className="intro flex flex-row items-center space-between">
                    <section className="text">
                        <p>Hi, I'm </p>
                        <h1 style={ { fontSize: '3rem' } }>Rohit Yellapu</h1>
                        <p>I'm looking for a position as a..</p>
                        <p style={ { fontSize: '2rem' } } id="text" ref={ title }></p>
                        <p>I develop and design real-world web and mobile applications.</p>
                    </section>

                    <section className="image">
                        <img src="https://media.tenor.com/7Hh1I-SmB3cAAAAi/playmobil-christmas.gif" style={ santaStyle } alt="santa" />
                        <Avatar alt="Rohit Yellapu" sx={ { width: 396, height: 396 } } src={ require('../images/rohit.jpg') } />
                    </section>
                </div>
            </main>
        </>
    )
}

const santaStyle = {
    position: 'absolute',
    top: '2rem',
    left: '4rem',
    border: 'none',
    height: '15rem'
}

export default Intro