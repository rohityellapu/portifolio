import React from 'react'
import Header from './components/Header'
import './static/App.css'
import './index.css'
import Intro from './components/Intro'
import Snowfall from './components/Snowfall'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import About from './components/About'
import Menu from './components/Menu'

function App() {
  return (
    <>
      <div className="app lg:text-xl">
        <Menu />
        <Snowfall />
        <Header />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App