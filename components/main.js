import React, { Component } from 'react'

import About from '../components/About/About'
import Menu from '../components/Menu/Menu'
import Projects from '../components/Projects/Projects'
import './main.scss'

class Main extends Component {

  state = {
    page: 'projects'
  }

  clickHandler = (page) => {
    if (page !== this.state.page) {
      this.setState({
        page
      });
    }
  }

  render() {
    return (
      <div className='Main' >
        <About />
        <Menu onClick={this.clickHandler} />
        {
        this.state.page === 'projects'
        ? <Projects />
        : null
        }
      </div>
    )
  }
}

export default Main
