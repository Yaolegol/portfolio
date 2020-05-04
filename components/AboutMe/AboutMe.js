import React from 'react'

import './AboutMe.scss'

const AboutMe = () => (
  <div className='AboutMe'>
    <h1>Обо мне</h1>

    <table>
      <tbody>
        <tr>
          <th scope="row">Возраст</th>
          <td>31 год</td>
        </tr>
        <tr>
          <th scope="row">Город</th>
          <td>Томск</td>
        </tr>
        <tr>
          <th scope="row">Образование</th>
          <td>Высшее (ЮИ ТГУ, очная форма обучения)</td>
        </tr>
        <tr>
          <th scope="row">Работа</th>
          <td>Frontend разработчик (с 2019 по настоящее время)</td>
          <td>Юрисконсульт (с 2012 по 2019 года)</td>
        </tr>
        <tr>
          <th scope="row">Интересы</th>
          <td>Frontend (преимущественно), backend, mobile development</td>
        </tr>
        <tr>
          <th scope="row">Что изучил?</th>
          <td>HTML, CSS, БЭМ, Sass, less, адаптивная верстка, js, jQuery, react, react-router, redux, redux-promise, redux-thunk, reselect, classnames, next, axios, ajax, fetch, promise, async-await, pug, ejs, handlebars, webpack, gulp, material-ui, bootstrap, git, jira, jest, mocha, node, express, multer, JWT, mongodb, mongoose, sql, php, c#, ооп, REST API, GraphQL, React Native, Flutter, docker, Angular, Vue</td>
        </tr>
        <tr>
          <th scope="row">Технологии, которые использовал в production:</th>
          <td>HTML, CSS, БЭМ, less, адаптивная верстка, js, react, react-router, redux, redux-thunk, reselect, classnames, fetch, promise, async-await, webpack, git, ооп, REST API, React Native, Flutter, docker</td>
        </tr>
        <tr>
          <th scope="row">Что делал в качестве frontend разработчика?</th>
          <td>- создавал компоненты (верстка, интеграция с backend) разного уровня сложности для сайта на react с 0</td>
          <td>- верстал страницы с использованием HTML и less для сайта</td>
          <td>- делал интеграцию с backend на чистом js для сайта</td>
          <td>- создавал компоненты (верстка, интеграция с backend) на React Native</td>
          <td>- создавал компоненты (верстка, интеграция с backend) на Flutter</td>
          <td>- правил баги в существующих проектах</td>
        </tr>
      </tbody>
    </table>

  </div>
)

export default AboutMe
