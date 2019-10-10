import React, { Component } from 'react'

import About from '../components/About/About'
import Menu from '../components/Menu/Menu'
import AboutMe from '../components/AboutMe/AboutMe'
import Projects from '../components/Projects/Projects'
import './main.scss'

class Main extends Component {

  state = {
    page: 'projects',
    activePage: 1
  }

  clickHandler = (page) => {
    if (page !== this.state.page) {
      this.setState({
        page,
        activePage: this.state.activePage === 0 ? 1 : 0
      });
    }
  }  

  render() {
    return (
      <div className='Main' >
        <About />
        <Menu onClick={this.clickHandler} activePage={this.state.activePage} />
        {
          this.state.page === 'projects'
            ? <Projects />
            :
            this.state.page === ''
              ? null
              : <AboutMe />              
        }
      </div>
    )
  }
}

export default Main
