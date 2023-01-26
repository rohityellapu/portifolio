import React, { useEffect, useState, useRef } from 'react'

function Positions() {
    const positions = ["Front End Developer.", "Back End Developer.", "Full Stack Developer.", "Junior Software Engineer.", "Web Developer.", "Generalized Software Engineer."]
    let [text, settext] = useState("")


    let i = useRef(0);
    let index = useRef(0);
    const display = () => {

        let t = positions[i.current].slice(0, index.current)
        settext(t)
        index.current++;
        if (index.current > positions[i.current].length * 1.5) {
            index.current = 0;
            i.current++;
            if (i.current >= positions.length) i.current = 0;
        }

    }
    useEffect(() => {

        setInterval(display, 300)
    }, [])
    return (
        <p className='text-xl lg:text-3xl saturate-150' id="text">{ text }</p>
    )
}

export default Positions