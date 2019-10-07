import React, { Component } from 'react'
import ReactSwipe from 'react-swipe'

import './Projects.scss'
import TakeoffImg from './img/Takeoff_img.jpg'
import VeltryImg from './img/Veltry_img.jpg'
import PortfolioImg from './img/kotiki.jpg'
import GithubImg from './img/Github_icon.png'
import LeftArrowImg from '../../static/left_arrow.png'
import RightArrowImg from '../../static/right_arrow.png'

class Projects extends Component {

  reactSwipeEl;

  render() {

    return (
      <div className='Projects'>
        <ReactSwipe swipeOptions={{ speed: 500 }} ref={el => this.reactSwipeEl = el}>
          <div>
            <div className='Projects-CarouselWrap'>
              <a href="http://takeoff-rename.herokuapp.com/" target='_blank'>
                <img
                  className="d-block w-100"
                  src={TakeoffImg}
                  alt="takeoff"
                />
              </a>
            </div>
            <div className='Arrows'>
              <div className='LeftArrow'>
                <button type='button' onClick={() => this.reactSwipeEl.prev()}>
                  <img
                    src={LeftArrowImg}
                    alt="LeftArrow"
                  />
                </button>
              </div>

              <div className='RightArrow'>
                <button type='button' onClick={() => this.reactSwipeEl.next()}>
                  <img
                    src={RightArrowImg}
                    alt="RightArrow"
                  />
                </button>
              </div>
            </div>

            <div className='Description'>
              <a href="http://takeoff-rename.herokuapp.com/" target='_blank'>
                <h3>Takeoff</h3>
                <h6>(landing page)</h6>
              </a>
              <h5>Особенности проекта</h5>
              <p>- выполнен на чистых HTML, CSS + немного jQuery</p>
              <p>- адаптивная верстка</p>              
              <p>- карусель - Owl Carousel 2 с добавлением скрипта на кнопки влево-вправо</p>
              <p>- навигация с использованием якорей</p>
              <p>- backend на node.js (работает кнопка "contact" в правом верхнем углу)</p>
              <div className='GitHubImg'>
                <a href="https://github.com/Yaolegol/TAKEOFF" target='_blank'>
                  <img
                    src={GithubImg}
                    alt="GitHub"
                  />
                  <p>Посмотреть код</p>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className='Projects-CarouselWrap'>
              <a href="https://veltry.herokuapp.com/" target='_blank'>
                <img
                  className="d-block w-100"
                  src={VeltryImg}
                  alt="veltry"
                />
              </a>
            </div>

            <div className='Arrows'>
              <div className='LeftArrow'>
                <button type='button' onClick={() => this.reactSwipeEl.prev()}>
                  <img
                    src={LeftArrowImg}
                    alt="LeftArrow"
                  />
                </button>
              </div>

              <div className='RightArrow'>
                <button type='button' onClick={() => this.reactSwipeEl.next()}>
                  <img
                    src={RightArrowImg}
                    alt="RightArrow"
                  />
                </button>
              </div>
            </div>

            <div className='Description'>
              <a href="http://takeoff-rename.herokuapp.com/" target='_blank'>
                <h3>Veltry</h3>
                <h6>(интернет-магазин)</h6>
              </a>
              <h5>Особенности проекта</h5>

              <h5>Email и пароль для входа как админ</h5>
              <p><b>Email - admin@admin.ru</b></p>
              <p><b>пароль - admin</b></p>

              <h5>Client</h5>
              <p>- выполнен с использованием react, react-router, redux, redux-promise, redux-thunk, axios, scss, material-ui, fontawesome</p>
              <p>- адаптивная верстка</p>              
              <p>- карусель - react-slick</p>
              <p>- пагинация страниц с товарами</p>

              <h5>Server</h5>
              <p>- backend на node.js (express.js, mongoose, multer)</p>
              <p>- база данных MongoDB Atlas</p>
              <p>- сохранение картинок в cloudinary</p>
              <p>- аутентификация с использованием JWT, token сохраняется в Local Storage</p>

              <h5>Возможности</h5>
              <p>- sing in, log in, log out</p>
              <p>- просматривать историю заказов (для login пользователей)</p>
              <p>- создавать продукты, категории, бренды (для admin пользователей)</p>
              <p>- просматривать поступившие заказы (для admin пользователей)</p>
              <p>- просматривать свои личные заказы (для admin пользователей)</p>
              <p>- сортировать товары по цене (для всех пользователей)</p>
              <p>- фильтровать товары по цене (для всех пользователей)</p>
              <p>- заказывать товары (для всех пользователей)</p>
              <p>- просматривать текущую корзину (для всех пользователей)</p>

              <div className='GitHubImg'>
                <a href="https://github.com/Yaolegol/veltry" target='_blank'>
                  <img
                    src={GithubImg}
                    alt="GitHub"
                  />
                  <p>Посмотреть код</p>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className='Projects-CarouselWrap'>
              <a href="/">
                <img
                  className="d-block w-100"
                  src={PortfolioImg}
                  alt="portfolio"
                />
              </a>
            </div>

            <div className='Arrows'>
              <div className='LeftArrow'>
                <button type='button' onClick={() => this.reactSwipeEl.prev()}>
                  <img
                    src={LeftArrowImg}
                    alt="LeftArrow"
                  />
                </button>
              </div>

              <div className='RightArrow'>
                <button type='button' onClick={() => this.reactSwipeEl.next()}>
                  <img
                    src={RightArrowImg}
                    alt="RightArrow"
                  />
                </button>
              </div>
            </div>

            <div className='Description'>
              <a href="/">
                <h3>Portfolio</h3>
                <h6>(текущий сайт)</h6>
              </a>
              <h5>Особенности проекта</h5>
              <p>- выполнен с использованием next.js</p>
              <p>- адаптивная верстка</p>              
              <p>- карусель - react-swipe</p>

              <div className='GitHubImg'>
                <a href="https://github.com/Yaolegol/portfolio" target='_blank'>
                  <img
                    src={GithubImg}
                    alt="GitHub"
                  />
                  <p>Посмотреть код</p>
                </a>
              </div>
            </div>
          </div>


        </ReactSwipe>
      </div>
    )
  }
}

export default Projects
