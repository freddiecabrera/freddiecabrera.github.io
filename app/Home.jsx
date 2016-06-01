import React from 'react'
import NavBar from './NavBar'
import WebStack from './WebStack'
import Services from './Services'
import Work from './Work'
import About from './About'
import Footer from './Footer'


const Home = props => (
  <div>
    <NavBar />
      <WebStack />
      <Services />
      <Work />
      <About />
      <Footer />
  </div>

)

module.exports = Home
