import React, { useEffect, useState } from 'react'
import '../static/Skills.css'
import Skill from './Skill'
function Skills() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div id='skills' className="skills">
            <h1 style={ { fontSize: '3rem' } }>Technologies I use currently or used previosly</h1>

            <ul className={ `box progress ${isScrolled ? 'show' : ''}` }>
                { skills.map(skill => {
                    return <Skill key={ skill.name } name={ skill.name } percent={ skill.percent } />
                }) }

            </ul>

            <svg width="0" height="0">
                <defs>
                    <linearGradient id="cl1" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
                        <stop stopColor="#618099" />
                        <stop offset="100%" stopColor="#8e6677" />
                    </linearGradient>
                    <linearGradient id="cl2" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
                        <stop stopColor="#8e6677" />
                        <stop offset="100%" stopColor="#9b5e67" />
                    </linearGradient>
                    <linearGradient id="cl3" gradientUnits="objectBoundingBox" x1="1" y1="0" x2="0" y2="1">
                        <stop stopColor="#9b5e67" />
                        <stop offset="100%" stopColor="#9c787a" />
                    </linearGradient>
                    <linearGradient id="cl4" gradientUnits="objectBoundingBox" x1="1" y1="1" x2="0" y2="0">
                        <stop stopColor="#9c787a" />
                        <stop offset="100%" stopColor="#817a94" />
                    </linearGradient>
                    <linearGradient id="cl5" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="0" y2="0">
                        <stop stopColor="#817a94" />
                        <stop offset="100%" stopColor="#498a98" />
                    </linearGradient>
                    <linearGradient id="cl6" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="1" y2="0">
                        <stop stopColor="#498a98" />
                        <stop offset="100%" stopColor="#618099" />
                    </linearGradient>
                </defs>
            </svg>

        </div>
    )
}


const skills = [
    {
        name: 'JavaScript',
        percent: 99,
    },
    {
        name: 'NodeJS',
        percent: 94,
    },
    {
        name: 'ExpressJS',
        percent: 97,
    },
    {
        name: 'MongoDB & Atlas',
        percent: 97,
    },
    {
        name: 'Mongoose',
        percent: 99,
    },
    {
        name: 'HTML5',
        percent: 93,
    },
    {
        name: 'CSS3 & SASS',
        percent: 91,
    },
    {
        name: 'TailWind CSS',
        percent: 97,
    },
    {
        name: 'Bootstrap 4 & 5',
        percent: 96,
    },
    {
        name: 'ReactJS',
        percent: 95,
    },
    {
        name: 'C',
        percent: 99,
    },
    {
        name: 'C++',
        percent: 89,
    },
    {
        name: 'Java',
        percent: 81,
    },
    {
        name: 'Python',
        percent: 91,
    },
    {
        name: 'Flask',
        percent: 94,
    },
    {
        name: 'SQLAlchemy',
        percent: 94,
    },
    {
        name: 'SQLite3 and MySQL',
        percent: 91,
    }
]



export default Skills