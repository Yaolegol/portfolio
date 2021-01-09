import React from 'react'

import './Menu.scss'
import ProjectsImg from './img/ProjectsImg.png'
import AboutImg from './img/AboutImg.png'

const Menu = props => (
  <div className='Menu'>
    <div className='Item' onClick={() => props.onClick('about')} style={props.activePage === 0 ? {borderColor: 'rgb(17, 65, 155)', borderRadius: '0'} : {borderColor: '#fff'}}>
      <img src={AboutImg} alt="About Img" />
      <p>Обо мне</p>
    </div>
    <div className='Item' onClick={() => props.onClick('projects')} style={props.activePage === 1 ? {borderColor: 'rgb(17, 65, 155)', borderRadius: '0'} : {borderColor: '#fff'}}>
      <img src={ProjectsImg} alt="Projects Img" />
      <p>Мои проекты</p>
    </div>
  </div>
)

export default Menu
