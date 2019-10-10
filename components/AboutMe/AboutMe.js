import React from 'react'

import './AboutMe.scss'

const AboutMe = () => (
  <div className='AboutMe'>
    <h1>Обо мне</h1>

    <table>
      <tbody>
        <tr>
          <th scope="row">Возраст</th>
          <td>30 лет</td>
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
          <td>Юрисконсульт (с 2012 по 2019 года)</td>
        </tr>
        <tr>
          <th scope="row">Интересы</th>
          <td>Frontend (преимущественно), backend, mobile development</td>
        </tr>
        <tr>
          <th scope="row">Что изучил?</th>
          <td>HTML, CSS, БЭМ, Sass, less, адаптивная верстка, js, jQuery, react, react-router, redux, redux-promise, redux-thunk, next, axios, ajax, fetch, promise, async-await, pug, ejs, handlebars, webpack, gulp, material-ui, bootstrap, git, jira, jest, mocha, node, express, multer, JWT, mongodb, mongoose, sql, php, c#, ооп, REST API, GraphQL</td>
        </tr>
      </tbody>
    </table>

  </div>
)

export default AboutMe
