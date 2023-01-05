import React,{useState} from 'react'

function Project({ name, desc, image, link, git }) {
    const [isHovered, setisHovered] = useState(false)
  return (
      <div className='project flex'>
          <div className="about flex items-center flex-column">
              <h2>{ name }</h2>
              <p>{ desc }</p>
          </div>
          <div className={ `image ${isHovered? 'hover': ''} flex items-center flex-row space-around` } style={ { backgroundImage: `url(${image})` } } onMouseEnter={ () => setisHovered(true) }
              onMouseLeave={ () => setisHovered(false) }>
              <div className="icons" style={ { display: !isHovered && 'none' } }><a href={ link } target="_blank"><img src="https://img.icons8.com/fluency/512/link.png" alt="link" /></a></div>
              <div className="icons" style={ { display: !isHovered && 'none' } }> <a href={ git } target="_blank"><img src="https://img.icons8.com/glyph-neue/512/github.png" alt="git" /></a></div>
              
          </div>
    </div>
  )
}

export default Project