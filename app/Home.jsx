import React from 'react'
import NavBar from './NavBar'
import WebStack from './WebStack'
import Services from './Services'
import Resume from './Resume'
import Work from './Work'
import Footer from './Footer'


const Home = props => (
  <div>
    <NavBar />
      <WebStack />
      <Services />
      <Resume />
      <Work />
      <Footer />
  </div>
)

module.exports = Home
