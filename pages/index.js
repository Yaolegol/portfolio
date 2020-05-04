import React, { Fragment } from 'react'

import HeadHOC from '../components/hoc/head/head'
import Main from '../components/main'

const Home = () => (
  <Fragment>
    <HeadHOC />
    <Main />
  </Fragment>
)

export default Home
