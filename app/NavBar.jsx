import React from 'react'
import { tabHolder, temp, navHeader, mouseIcon, navHeaderP } from '../styles/style'
import HorizontalFab from './HorizontalFab'
import scrollTo from './ScrollTo'

const NavBar = React.createClass({
  getInitialState () {
    return ({
      HF: null
    })
  },
componentDidMount() {
    let lastScrollPosition = 0
    window.onscroll = function() {
        let newScrollPosition = window.scrollY
        if (newScrollPosition <= 71) {
            this.setState({HF: null})
        } else {
            this.setState({HF: <HorizontalFab/>})
        }
        lastScrollPosition = newScrollPosition
    }.bind(this)
},
  scrollHere (location) {
    scrollTo(location)
  },
  render () {
    return (
      <div>
        <div className='bgImageContainer'>
          <img src="https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?dpr=2&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb" alt="background-image" className='bgImage'/>
        </div>
        <div className='navContainer faderTwo'>
        <p className='pTag'>F</p>
        <ul className='menu'>
          <li onClick={this.scrollHere.bind(this, 785)} style={tabHolder} href="#">STACK</li>
          <li onClick={this.scrollHere.bind(this, 1602)} style={tabHolder} href="#">SERVICES</li>
          <li onClick={this.scrollHere.bind(this, 2412)} style={tabHolder} href="#">WORK</li>
          <li onClick={this.scrollHere.bind(this, 3202)} style={tabHolder} href="#">ABOUT</li>
        </ul>
        <h4 style={navHeader}>WELCOME</h4>
        <p style={navHeaderP}>I hope you enjoy your experience, scroll down and get to know me.</p>
        <img onClick={this.scrollHere.bind(this, 734)} src='http://imgh.us/mouse.svg' style={mouseIcon}/>
        {this.state.HF}
      </div>
    </div>
    )
  }
})
module.exports = NavBar
