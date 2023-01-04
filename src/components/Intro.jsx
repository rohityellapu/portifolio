import React from 'react'
import Avatar from '@mui/material/Avatar';
function Intro() {
    return (
        <>
            <main className='flex items-center'>
                <div className="intro flex flex-row items-center space-between">
                    <section className="text">
                        <p>Hi, I'm </p>
                        <h1 style={{fontSize:'3rem'}}>Rohit Yellapu</h1>
                        <p>A Web developer. I develop and design real-world web and mobile applications.</p>
                    </section>
                    <section className="image">
                        <Avatar alt="Rohit Yellapu" sx={ { width: 396, height: 396 } } src={ require('../images/rohit.jpg') } />
                    </section>
                </div>
            </main>
        </>
    )
}

export default Intro