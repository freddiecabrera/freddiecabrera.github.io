import React from 'react'
import NavBar from './NavBar'
import WebStack from './WebStack'
import Services from './Services'
import Resume from './Resume'
import Footer from './Footer'


const Home = props => (
  <div>
    <NavBar />
      <WebStack />
      <Services />
      <Resume />
      <Footer />
  </div>
)

module.exports = Home
