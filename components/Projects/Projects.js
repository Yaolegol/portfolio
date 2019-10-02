import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './Projects.scss'
import TakeoffImg from './img/Takeoff_img.jpg'
import VeltryImg from './img/Veltry_img.jpg'
import GithubImg from './img/Github_icon.png'

const defaultProps = {
  interval: null
};

Carousel.defaultProps = defaultProps;

const Projects = () => (
  <div className='Projects'>

    <Carousel>
      <Carousel.Item>
        <div className='Projects-CarouselWrap'>
          <a href="http://takeoff-rename.herokuapp.com/" target='_blank'>
            <img
              className="d-block w-100"
              src={TakeoffImg}
              alt="First slide"
            />
          </a>
        </div>
        <Carousel.Caption>
          <a href="http://takeoff-rename.herokuapp.com/" target='_blank'>
            <h3>Takeoff</h3>
            <h6>(landing page)</h6>
          </a>
          <h5>Особенности проекта</h5>
          <p>- выполнен на чистых HTML, CSS + немного jQuery</p>
          <p>- верстка выполнена по БЭМ</p>
          <p>- карусель - Owl Carousel 2 с добавлением скрипта на кнопки влево-вправо</p>
          <p>- навигация с использованием якорей</p>
          <p>- backend на node.js (работает кнопка "contact" в правом верхнем углу)</p>
          <a href="https://github.com/Yaolegol/TAKEOFF" target='_blank'>
            <img
              className='GitHubImg'
              src={GithubImg}
              alt="GitHub"
            />
            <p>Посмотреть код</p>
          </a>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <div className='Projects-CarouselWrap'>
          <a href="https://veltry.herokuapp.com/" target='_blank'>
            <img
              className="d-block w-100"
              src={VeltryImg}
              alt="Third slide"
            />
          </a>
        </div>
        <Carousel.Caption>
          <a href="http://takeoff-rename.herokuapp.com/" target='_blank'>
            <h3>Veltry</h3>
            <h6>(landing page)</h6>
          </a>
          <h5>Особенности проекта</h5>
          <p>- выполнен на чистых HTML, CSS + немного jQuery</p>
          <p>- верстка выполнена по БЭМ</p>
          <p>- карусель - Owl Carousel 2 с добавлением скрипта на кнопки влево-вправо</p>
          <p>- навигация с использованием якорей</p>
          <p>- backend на node.js (работает кнопка "contact" в правом верхнем углу)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='Projects-CarouselWrap'>
          <img
            className="d-block w-100"
            src={VeltryImg}
            alt="Third slide"
          />
        </div>
      </Carousel.Item>
    </Carousel>

  </div>
)

export default Projects
