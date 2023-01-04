import React from 'react'

function Skill({name, percent}) {
  return (
      <>
          <li data-name={name} data-percent={`${percent}%`}>
              <svg viewBox="-10 -10 220 220">
                  <g fill="none" stroke-width="9" transform="translate(100,100)">
                      <path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)" />
                      <path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)" />
                      <path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)" />
                      <path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)" />
                      <path d="M -86.6,50 A 100,100 0 0,1 -86.6,-50" stroke="url(#cl5)" />
                      <path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)" />
                  </g>
              </svg>
              <svg viewBox="-10 -10 220 220">
                  <path d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z" stroke-dashoffset={percent*6.29}></path>
              </svg>
          </li>
      </> 
  )
}

export default Skill