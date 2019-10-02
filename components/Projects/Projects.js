import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './Projects.scss'
import TakeoffImg from './img/Takeoff_img.jpg'
import VeltryImg from './img/Veltry_img.jpg'

const defaultProps = {
  interval: null
};

Carousel.defaultProps = defaultProps;

const Projects = () => (
  <div className='Projects'>
    <div className='Projects-CarouselWrap'>
      <Carousel>
        <Carousel.Item>
          <a href="http://takeoff-rename.herokuapp.com/" target='_blank'>
            <img
              className="d-block w-100"
              src={TakeoffImg}
              alt="First slide"
            />
          </a>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
          <a href="https://veltry.herokuapp.com/" target='_blank'>
            <img
              className="d-block w-100"
              src={VeltryImg}
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={VeltryImg}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
)

export default Projects
