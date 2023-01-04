import React from 'react'
import Header from './components/Header'
import './static/App.css'
import Intro from './components/Intro'
import Snowfall from './components/Snowfall'
import Skills from './components/Skills'
function App() {
  return (
    <>
      <Snowfall/>
      <Header />
      <Intro />
      <Skills/>
    </>
  )
}

export default App