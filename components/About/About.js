import React from 'react'

import './About.scss'
import UserFotoImg from './img/3.png';
import VKImg from './img/vk.png';

const About = () => (
  <div className='About'>
    <div className='UserFoto'>
      <img src={UserFotoImg} alt="User foto" />
    </div>

    <div className='About-Text'>
      <h1>Олег Олейник</h1>
      <p>Frontend developer</p>
      <p className='About-MainText'>Всем привет! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure minus magni est dolores maiores molestiae veritatis quam temporibus error?</p>
    </div>

    <div className='MediaLinks'>
      <p><b>Сот.телефон: +79069473139</b></p>
      <p><b>Email: m160160@yandex.ru</b></p>
      <a href='https://vk.com/id41167330' target="_blank" rel="noopener noreferrer">
        <img src={VKImg} alt="VK" />
      </a>
    </div>
  </div>
)

export default About
