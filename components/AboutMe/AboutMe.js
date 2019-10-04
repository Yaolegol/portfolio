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
          <td>Работал помощником арбитражного управляющего с 2012 года</td>
        </tr>
        <tr>
          <th scope="row">Интересы</th>
          <td>Frontend (преимущественно), backend, mobile development. Программированием увлекаюсь более 2-х лет, frontend разработкой занимаюсь более года</td>
        </tr>
        <tr>
          <th scope="row">Что изучил?</th>
          <td>HTML, CSS, БЭМ, Sass, less, адаптивная верстка, js, jQuery, react.js, react-router, redux, redux-promise, redux-thunk, next.js, axios.js, ajax, fetch, promise, async-await, pug, ejs, handlebars, webpack, gulp, material-ui, bootstrap, git, jira, основы тестирования web приложений, jest, mocha, node.js, express.js, multer, JWT, mongodb, mongoose, sql, php, c#, ооп</td>
        </tr>        
        <tr>
          <th scope="row">Владение английским языком</th>
          <td>Понимаю речь и тексты без труда, немного могу говорить и писать</td>
        </tr>
      </tbody>
    </table>

  </div>
)

export default AboutMe
