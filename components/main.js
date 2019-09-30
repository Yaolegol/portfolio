import React from 'react'

import About from '../components/About/About'
import Menu from '../components/Menu/Menu'
import Projects from '../components/Projects/Projects'
import './main.scss'

const main = () => (
  <div className='Main' >
    <About />
    <Menu />
    <Projects />
  </div>
)

export default main
