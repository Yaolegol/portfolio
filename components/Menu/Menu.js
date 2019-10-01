import React from 'react'

import './Menu.scss'
import ProjectsImg from './img/ProjectsImg.png'
import AboutImg from './img/AboutImg.png'

const Menu = () => (
  <div className='Menu'>
    <div className='Item'>
      <img src={AboutImg} alt="About Img" />
      <p>Обо мне</p>
    </div>
    <div className='Item'>
      <img src={ProjectsImg} alt="Projects Img" />
      <p>Мои проекты</p>
    </div>
  </div>
)

export default Menu
