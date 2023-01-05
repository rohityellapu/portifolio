import React, {useRef, useEffect} from 'react'
import '../static/Skills.css'
import Skill from './Skill'
function Skills() {
    const boxRef = useRef(null);
    useEffect(() => {
        const box = boxRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                }
            });
        });
        observer.observe(box);
    }, []);
  return (
      <div ref={boxRef} className='skills'>
          <h1>Technologies I use currently or used previosly</h1>
       
          <ul class="progress">
              { skills.map(skill => {
                  return <Skill name={skill.name } percent={skill.percent} />
              })}
               
          </ul>
 
          <svg width="0" height="0">
              <defs>
                  <linearGradient id="cl1" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
                      <stop stop-color="#618099" />
                      <stop offset="100%" stop-color="#8e6677" />
                  </linearGradient>
                  <linearGradient id="cl2" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
                      <stop stop-color="#8e6677" />
                      <stop offset="100%" stop-color="#9b5e67" />
                  </linearGradient>
                  <linearGradient id="cl3" gradientUnits="objectBoundingBox" x1="1" y1="0" x2="0" y2="1">
                      <stop stop-color="#9b5e67" />
                      <stop offset="100%" stop-color="#9c787a" />
                  </linearGradient>
                  <linearGradient id="cl4" gradientUnits="objectBoundingBox" x1="1" y1="1" x2="0" y2="0">
                      <stop stop-color="#9c787a" />
                      <stop offset="100%" stop-color="#817a94" />
                  </linearGradient>
                  <linearGradient id="cl5" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="0" y2="0">
                      <stop stop-color="#817a94" />
                      <stop offset="100%" stop-color="#498a98" />
                  </linearGradient>
                  <linearGradient id="cl6" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="1" y2="0">
                      <stop stop-color="#498a98" />
                      <stop offset="100%" stop-color="#618099" />
                  </linearGradient>
              </defs>
          </svg>

    </div>
  )
}


const skills = [
    {
        name: 'JavaScript',
        percent: 98,
    },
    {
        name: 'NodeJS',
        percent: 92,
    },
    {
        name: 'ExpressJS',
        percent: 96,
    },
    {
        name: 'MongoDB',
        percent: 97,
    },
    {
        name: 'Mongoose',
        percent: 99,
    },
    {
        name: 'HTML',
        percent: 93,
    },
    {
        name: 'CSS',
        percent: 91,
    },
    {
        name: 'ReactJS',
        percent: 95,
    },
    {
        name: 'SQL and NoSQL',
        percent: 91,
    },
    {
        name: 'C',
        percent: 99,
    },
    {
        name: 'C++',
        percent: 81,
    },
    {
        name: 'Java',
        percent: 86,
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
        name: 'SQLite3 and MySQL',
        percent: 91,
    }
]



export default Skills