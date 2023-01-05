import React from 'react'
import Header from './components/Header'
import './static/App.css'
import Intro from './components/Intro'
import Snowfall from './components/Snowfall'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Snowfall/>
      <Header />
      <Intro />
      <Skills />
      <Projects />
      <Footer/>
    </>
  )
}

export default App