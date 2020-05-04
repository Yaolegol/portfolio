import React from 'react'

import './AboutMe.scss'

const AboutMe = () => (
  <div className='AboutMe'>
      <h1>Обо мне</h1>

      <div className='AboutMe__Info'>
          <div className='AboutMe__Info__TitleAria'>Возраст</div>
          <div className='AboutMe__Info__DescriptionAria'>31 год</div>

          <div className='AboutMe__Info__TitleAria'>Город</div>
          <div className='AboutMe__Info__DescriptionAria'>Томск</div>

          <div className='AboutMe__Info__TitleAria'>Образование</div>
          <div className='AboutMe__Info__DescriptionAria'>Высшее (ЮИ ТГУ, очная форма обучения)</div>

          <div className='AboutMe__Info__TitleAria'>Работа</div>
          <div>
              <div className='AboutMe__Info__DescriptionAria'>- Frontend разработчик (с 2019 по настоящее время),</div>
              <div className='AboutMe__Info__DescriptionAria'>- Юрисконсульт (с 2012 по 2019 года)</div>
          </div>

          <div className='AboutMe__Info__TitleAria'>Интересы</div>
          <div className='AboutMe__Info__DescriptionAria'>Frontend (преимущественно), backend, mobile development</div>

          <div className='AboutMe__Info__TitleAria'>Что изучил?</div>
          <div className='AboutMe__Info__DescriptionAria'>HTML, CSS, БЭМ, Sass, less, адаптивная верстка, js, jQuery,
              react, react-router, redux, redux-promise, redux-thunk, reselect, classnames, Flow, next, axios, ajax, fetch, promise, async-await, pug, ejs, handlebars,
              webpack, gulp, material-ui, bootstrap, git, jira, jest, mocha, node, express, multer, JWT, mongodb,
              mongoose, sql, php, c#, ООП, REST API, GraphQL, React Native, Flutter, docker, Angular, Vue, Figma,
              Ubuntu, MacOS, Visual Studio, VSCode, PHPStorm
          </div>

          <div className='AboutMe__Info__TitleAria'>Технологии, которые использовал в production:</div>
          <div className='AboutMe__Info__DescriptionAria'>HTML, CSS, less, адаптивная верстка, js, react, react-router,
              redux, redux-thunk, reselect, classnames, Flow, fetch, promise, async-await, webpack, git, REST API, React Native, Flutter, docker, Figma,
              Ubuntu, MacOS, PHPStorm
          </div>

          <div className='AboutMe__Info__TitleAria'>Что делал в роли frontend разработчика?</div>
          <div>
              <div className='AboutMe__Info__DescriptionAria'>- Создавал компоненты (верстка, интеграция с backend)
                  разного уровня сложности на react.js,
              </div>
              <div className='AboutMe__Info__DescriptionAria'>- Верстал страницы с использованием HTML и less,</div>
              <div className='AboutMe__Info__DescriptionAria'>- Интегрировал приложение с backend`ом на чистом js,</div>
              <div className='AboutMe__Info__DescriptionAria'>- Создавал компоненты (верстка, интеграция с backend) на
                  React Native,
              </div>
              <div className='AboutMe__Info__DescriptionAria'>- Создавал компоненты (верстка, интеграция с backend) на
                  Flutter,
              </div>
              <div className='AboutMe__Info__DescriptionAria'>- Правил баги в существующих проектах</div>
          </div>
      </div>
  </div>
)

export default AboutMe
