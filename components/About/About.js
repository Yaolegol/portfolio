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
      <p className='About-MainText'>Данный сайт представляет собой сборник моих работ, а также немного рассказывает обо мне. Приятного просмотра :)</p>
    </div>

    <div className='MediaLinks'>
      <p><b><a href="tel:+79069473139">Сот.телефон: +79069473139</a></b></p>
      <p><b><a href="mailto:m160160@yandex.ru">Email: m160160@yandex.ru</a></b></p>
      <a href='https://vk.com/id41167330' target="_blank" rel="noopener noreferrer">
        <img src={VKImg} alt="VK" />
      </a>
    </div>
  </div>
)

export default About
