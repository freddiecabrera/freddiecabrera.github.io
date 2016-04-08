import React from 'react'
import NavBar from './NavBar'
import WebStack from './WebStack'
import Services from './Services'
import Footer from './Footer'

const Home = props => (
  <div>
    <NavBar />
      <WebStack />
      <Services />
      <Footer />
  </div>
)

module.exports = Home
